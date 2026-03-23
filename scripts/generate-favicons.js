const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const INPUT = path.join(__dirname, '..', 'public', 'mission_one.png');
const APP_DIR = path.join(__dirname, '..', 'app');

async function generate() {
  const img = sharp(INPUT);
  const meta = await img.metadata();

  // Crop to square (use the shorter dimension)
  const size = Math.min(meta.width, meta.height);
  const squareImg = sharp(INPUT).resize(size, size, { fit: 'cover', position: 'top' });

  // favicon.ico (32x32 PNG wrapped as ICO)
  const png32 = await squareImg.clone().resize(32, 32).png().toBuffer();
  // Simple ICO format: header + 1 entry + PNG data
  const ico = buildIco(png32, 32, 32);
  fs.writeFileSync(path.join(APP_DIR, 'favicon.ico'), ico);
  console.log('Created app/favicon.ico (32x32)');

  // icon.png (32x32)
  await squareImg.clone().resize(32, 32).png().toFile(path.join(APP_DIR, 'icon.png'));
  console.log('Created app/icon.png (32x32)');

  // apple-icon.png (180x180)
  await squareImg.clone().resize(180, 180).png().toFile(path.join(APP_DIR, 'apple-icon.png'));
  console.log('Created app/apple-icon.png (180x180)');
}

function buildIco(pngBuffer, width, height) {
  // ICO header: 6 bytes
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);      // reserved
  header.writeUInt16LE(1, 2);      // type: 1 = ICO
  header.writeUInt16LE(1, 4);      // 1 image

  // ICO directory entry: 16 bytes
  const entry = Buffer.alloc(16);
  entry.writeUInt8(width >= 256 ? 0 : width, 0);
  entry.writeUInt8(height >= 256 ? 0 : height, 1);
  entry.writeUInt8(0, 2);          // color palette
  entry.writeUInt8(0, 3);          // reserved
  entry.writeUInt16LE(1, 4);       // color planes
  entry.writeUInt16LE(32, 6);      // bits per pixel
  entry.writeUInt32LE(pngBuffer.length, 8);   // size of PNG data
  entry.writeUInt32LE(6 + 16, 12);            // offset to PNG data

  return Buffer.concat([header, entry, pngBuffer]);
}

generate().catch(console.error);
