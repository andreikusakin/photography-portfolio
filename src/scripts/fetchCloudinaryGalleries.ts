import "dotenv/config";
import fs from "fs";
import path from "path";
import { v2 as cloudinary } from "cloudinary";
import { weddings, intimateWeddings, couples, Gallery } from "../lib/data";

console.log("Loading Cloudinary credentials:");
console.log("Cloud Name:", process.env.CLOUDINARY_CLOUD_NAME);
console.log(
  "API Key:",
  process.env.CLOUDINARY_API_KEY ? "Loaded" : "Not Loaded"
);
console.log(
  "API Secret:",
  process.env.CLOUDINARY_API_SECRET ? "Loaded" : "Not Loaded"
);
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Helper type for the raw image data
type CloudinaryImage = {
  id: string;
  name: string;
  src: string;
  width: number;
  height: number;
};

async function fetchImages(folder: string) {
  const { resources } = await cloudinary.search
    .expression(`folder:${folder}`)
    .max_results(500)
    .sort_by("public_id", "asc")
    .execute();

  return resources.map((r: any) => ({
    id: r.asset_id,
    name: r.public_id,
    src: r.secure_url,
    width: r.width,
    height: r.height,
  }));
}

async function buildGalleries() {
  const collections: Record<string, Gallery[]> = {
    weddings,
    intimateWeddings,
    couples,
  };

  // 1. Container for your main Galleries
  const galleriesResult: Record<string, Gallery[]> = {};
  
  // 2. New Container for Highlights
  const highlightsResult: Record<string, CloudinaryImage[]> = {};

  for (const [collectionName, galleries] of Object.entries(collections)) {
    console.log(`\n📸 Processing collection: ${collectionName}...`);

    // --- Part A: Fetch Main Galleries ---
    const updated: Gallery[] = [];

    for (const gallery of galleries) {
      const folderPath = `${collectionName}/${gallery.id}`;
      console.log(`   ↳ Fetching Gallery: ${folderPath}`);

      const images = await fetchImages(folderPath);
      const coverImage =
        images.find((i: any) => i.name.includes("cover")) || images[0];
      const heroImage =
        images.find((i: any) => i.name.includes("hero")) || images[0];

      const cleanGallery = images.filter(
        (i: any) => !i.name.includes("hero") && !i.name.includes("cover")
      );

      updated.push({ ...gallery, cover: coverImage, hero: heroImage, images: cleanGallery });
    }
    galleriesResult[collectionName] = updated;

    // --- Part B: Fetch Highlights ---
    // This targets "couples/highlights", "weddings/highlights", etc.
    const highlightPath = `${collectionName}/highlights`;
    console.log(`   ✨ Fetching Highlights: ${highlightPath}`);
    
    // We reuse fetchImages, but we don't need to filter for cover/hero
    // since highlights are usually just the best images.
    const highlightImages = await fetchImages(highlightPath);
    highlightsResult[collectionName] = highlightImages;
  }

  // 3. Combine everything into one output object
  // Using 'any' here to allow flexibility in the final JSON structure
  const finalOutput: Record<string, any> = {
    ...galleriesResult, // spreads weddings: [...], couples: [...]
    highlights: highlightsResult // adds highlights: { weddings: [...], ... }
  };

  const output = path.join("src", "lib", "data.galleries.json");
  fs.writeFileSync(output, JSON.stringify(finalOutput, null, 2), "utf8");

  console.log(`\n✅ All done! Data saved to ${output}`);
}

buildGalleries().catch((e) => {
  console.error("❌ Error fetching galleries:", e);
  process.exit(1);
});


// import "dotenv/config";
// import fs from "fs";
// import path from "path";
// import { v2 as cloudinary } from "cloudinary";
// import { weddings, intimateWeddings, couples, Gallery } from "../lib/data";

// console.log("Loading Cloudinary credentials:");
// console.log("Cloud Name:", process.env.CLOUDINARY_CLOUD_NAME);
// console.log(
//   "API Key:",
//   process.env.CLOUDINARY_API_KEY ? "Loaded" : "Not Loaded"
// );
// console.log(
//   "API Secret:",
//   process.env.CLOUDINARY_API_SECRET ? "Loaded" : "Not Loaded"
// );
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// async function fetchImages(folder: string) {
//   const { resources } = await cloudinary.search
//     .expression(`folder:${folder}`)
//     .max_results(500)
//     .sort_by("public_id", "asc")
//     .execute();

//   return resources.map((r: any) => ({
//     id: r.asset_id,
//     name: r.public_id,
//     src: r.secure_url,
//     width: r.width,
//     height: r.height,
//   }));
// }

// async function buildGalleries() {
//   // Define all your collections here
//   const collections: Record<string, Gallery[]> = {
//     weddings,
//     intimateWeddings,
//     couples,
//   };

//   const result: Record<string, Gallery[]> = {};

//   for (const [collectionName, galleries] of Object.entries(collections)) {
//     console.log(`\n📸 Fetching images for ${collectionName}...`);

//     const updated: Gallery[] = [];

//     for (const gallery of galleries) {
//       const folderPath = `${collectionName}/${gallery.id}`;
//       console.log(` ↳ ${folderPath}`);

//       const images = await fetchImages(folderPath);
//       const coverImage =
//         images.find((i: any) => i.name.includes("cover")) || images[0];
//       const heroImage =
//         images.find((i: any) => i.name.includes("hero")) || images[0];

//       // gallery with no hero and cover
//       const cleanGallery = images.filter(
//         (i: any) => !i.name.includes("hero") && !i.name.includes("cover")
//       );

//       updated.push({ ...gallery, cover: coverImage, hero: heroImage, images: cleanGallery });
//     }

//     result[collectionName] = updated;
//   }

//   const output = path.join("src", "lib", "data.galleries.json");
//   fs.writeFileSync(output, JSON.stringify(result, null, 2), "utf8");

//   console.log(`\n✅ All done! Data saved to ${output}`);
// }

// buildGalleries().catch((e) => {
//   console.error("❌ Error fetching galleries:", e);
//   process.exit(1);
// });
