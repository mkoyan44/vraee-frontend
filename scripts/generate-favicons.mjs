#!/usr/bin/env node
/**
 * Generates PNG favicons from public/icons/favicon.svg
 * Run: node scripts/generate-favicons.mjs
 */
import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const iconsDir = path.join(__dirname, '..', 'public', 'icons');
const srcSvg = path.join(iconsDir, 'favicon.svg');

const sizes = [16, 32, 64];

async function generate() {
  for (const size of sizes) {
    const outPath = path.join(iconsDir, `v-${size}x${size}.png`);
    await sharp(srcSvg)
      .resize(size, size)
      .png()
      .toFile(outPath);
    console.log(`Generated ${outPath}`);
  }
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});
