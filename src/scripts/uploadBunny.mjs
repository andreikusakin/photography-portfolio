// uploadBunny.mjs — sync a local `optimized/` tree to a Bunny.net Storage Zone.
//
// Uploads the CONTENTS of the given directory to the storage-zone root, so files
// land at couples/…, weddings/…, intimate-weddings-elopements/… — matching the
// `src` values in galleries.json and the Photo component's BASE
// (https://images.kusakinphoto.com). Do NOT upload the `optimized` folder itself.
//
// Usage:
//   BUNNY_STORAGE_KEY=xxxxx \
//   node src/scripts/uploadBunny.mjs "/Volumes/8TB 2025 (1)/Other/Website galleries/optimized"
//
// Env:
//   BUNNY_STORAGE_KEY    (required)  storage-zone password (Storage → FTP & API Access)
//   BUNNY_STORAGE_ZONE   (default: kusakin-photo)  storage zone name
//   BUNNY_STORAGE_HOST   (default: storage.bunnycdn.com)  region host —
//                        e.g. ny. / la. / uk. / se. / br. / jh. / syd. prefixes
//   BUNNY_CONCURRENCY    (default: 8)

import { readdir, readFile } from "node:fs/promises";
import { join, relative, sep } from "node:path";

const ROOT = process.argv[2] || "./optimized";
const KEY = process.env.BUNNY_STORAGE_KEY;
const ZONE = process.env.BUNNY_STORAGE_ZONE || "kusakin-photo";
const HOST = process.env.BUNNY_STORAGE_HOST || "storage.bunnycdn.com";
const CONCURRENCY = Number(process.env.BUNNY_CONCURRENCY) || 8;

if (!KEY) {
  console.error("Missing BUNNY_STORAGE_KEY.");
  process.exit(1);
}

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.name.startsWith(".")) continue; // skip .DS_Store etc.
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else out.push(full);
  }
  return out;
}

const files = await walk(ROOT);
if (files.length === 0) {
  console.log(`No files found under ${ROOT}.`);
  process.exit(0);
}
console.log(`Uploading ${files.length} files to ${ZONE} via ${HOST}…`);

let done = 0;
const failures = [];

async function put(file) {
  const key = relative(ROOT, file).split(sep).join("/");
  const res = await fetch(`https://${HOST}/${ZONE}/${key}`, {
    method: "PUT",
    headers: { AccessKey: KEY, "Content-Type": "application/octet-stream" },
    body: await readFile(file),
  });
  if (!res.ok) failures.push(`${key} → ${res.status} ${res.statusText}`);
  done++;
  if (done % 50 === 0 || done === files.length) {
    console.log(`  ${done}/${files.length}`);
  }
}

// Simple fixed-size worker pool.
const queue = [...files];
await Promise.all(
  Array.from({ length: CONCURRENCY }, async () => {
    while (queue.length) await put(queue.pop());
  })
);

if (failures.length) {
  console.error(`\n${failures.length} failed:`);
  for (const f of failures) console.error(`  ✗ ${f}`);
  process.exit(1);
}
console.log(`\nDone. ${done} files uploaded.`);
