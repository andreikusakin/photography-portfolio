import React from "react";
import { weddings } from "@/lib/data";
import Gallery from "@/app/components/Gallery/Gallery";
import type { Metadata } from "next";
import fs from "fs";
import path from "path";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const { id } = await params;
  const wedding = weddings.find((wedding) => wedding.id === id);
  
  if (!wedding) {
    return {
      title: "Wedding Not Found | Boston Wedding Photographer",
      description: "The requested wedding gallery could not be found.",
    };
  }
  
  return {
    title: `${wedding.name} Wedding | Boston Wedding Photographer`,
    description: `The beautiful wedding of ${wedding.name} at ${wedding.venue} in ${wedding.location}.`,
    alternates: {
      canonical: `/wedding/${id}`,
    },
    openGraph: {
      title: `${wedding.name} Wedding | Andrew Kusakin Photography`,
      description: `View the beautiful wedding of ${wedding.name} at ${wedding.venue} in ${wedding.location}. Boston Wedding Photography by Andrew Kusakin.`,
    }
  };
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const wedding = weddings.find((wedding) => wedding.id === id);
  
  if (!wedding) {
    return <div>Images not found</div>;
  }
  const imageDirectory = path.join(process.cwd(), "public/weddings", id);

  let imagePaths: string[] = [];
  try {
    // 3. Read all filenames from the directory
    const imageFilenames = fs.readdirSync(imageDirectory);

    // 4. Create public URLs and filter for valid image files
    imagePaths = imageFilenames
      .filter((file) =>
        // Ensure we only include image files, excluding others like .DS_Store
        /\.(jpg|jpeg|png|webp)$/i.test(file)
      )
      .map((file) => `/weddings/${id}/${file}`); // Format for the <Image> src
  } catch (error) {
    // If the directory doesn't exist, we can log it and continue
    // The gallery will just not have any images, which is fine.
    console.error("Could not read image directory:", error);
  }

  // 5. Combine the wedding data with the dynamically loaded image paths
  const galleryData = {
    ...wedding,
    images: imagePaths, // Add the array of image paths
  };
  
  return <div>
    <Gallery gallery={galleryData}/>
  </div>;
}
