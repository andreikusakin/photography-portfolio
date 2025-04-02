import fs from "fs/promises"; 
import path from "path";

import { imageSizeFromFile } from 'image-size/fromFile'
const publicDir = path.join(process.cwd(), "public");
const galleryTypes = ["wedding", "family", "couples"]; 
const allMetadata = {};

async function processGalleries() {
  console.log("Starting image metadata generation...");
  for (const type of galleryTypes) {
    const typeDir = path.join(publicDir, type);
    try {
      const galleryIds = await fs.readdir(typeDir);
      for (const id of galleryIds) {
        const galleryPath = path.join(typeDir, id);
        const stats = await fs.stat(galleryPath);
        if (!stats.isDirectory()) continue;

        const galleryKey = `${type}/${id}`;
        allMetadata[galleryKey] = [];
        console.log(`Processing gallery: ${galleryKey}`);

        const files = await fs.readdir(galleryPath);
        const imageFiles = files.filter((f) => f.match(/\.(jpg|jpeg|png|gif|webp)$/i)); 

        for (const file of imageFiles) {
          const imagePath = path.join(galleryPath, file);
          const srcPath = `/${type}/${id}/${file}`;
          try {
            // Using async version here
            const dimensions = await imageSizeFromFile(imagePath);
            if (dimensions) {
              allMetadata[galleryKey].push({
                width: dimensions.width,
                height: dimensions.height,
                src: srcPath,              
              });
            }
          } catch (err) {
            console.error(`Error processing image ${imagePath}:`, err);
          }
        }
        allMetadata[galleryKey].sort((a, b) => {
            const numA = parseInt(path.basename(a.src, path.extname(a.src)));
            const numB = parseInt(path.basename(b.src, path.extname(b.src)));
            return numA - numB;
        });
      }
    } catch (err) {
      if (err.code !== "ENOENT") {
        console.error(`Error reading directory ${typeDir}:`, err);
      }
    }
  }

  const outputPath = path.join(publicDir, "galleries-metadata.json");
  await fs.writeFile(outputPath, JSON.stringify(allMetadata, null, 2));
  console.log(`Image metadata saved to ${outputPath}`);
}

processGalleries();
