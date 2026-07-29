const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const sources = [
  "C:/Users/joaoh/.cursor/projects/c-Users-joaoh-OneDrive-Desktop-maxmobile/assets/c__Users_joaoh_AppData_Roaming_Cursor_User_workspaceStorage_24db2d45a551c5959e519b4d1980014b_images_da1a4765-04aa-4c9d-b867-03737e40a4d0-d5baa679-67a8-4e42-9bc4-092e8245ab3e.png",
  path.join(__dirname, "../public/logo.png"),
];

const output = path.join(__dirname, "../public/logo-processed.png");

async function removeBlackBackground(input) {
  const image = sharp(input);
  const { width, height } = await image.metadata();

  const { data, info } = await image
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += info.channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    // Remove near-black pixels more aggressively for mobile rendering
    if (r < 80 && g < 80 && b < 80) {
      data[i + 3] = 0;
      continue;
    }

    // Soften dark edge pixels to avoid visible box on #090909 backgrounds
    if (r < 120 && g < 120 && b < 120) {
      const maxChannel = Math.max(r, g, b);
      const alpha = Math.round(((maxChannel - 80) / 40) * 255);
      data[i + 3] = Math.min(data[i + 3], Math.max(0, alpha));
    }
  }

  await sharp(data, {
    raw: { width, height, channels: info.channels },
  })
    .trim({ threshold: 15 })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(output);

  console.log(`Saved transparent logo to ${output}`);
}

async function main() {
  for (const source of sources) {
    if (fs.existsSync(source)) {
      await removeBlackBackground(source);
      return;
    }
  }
  throw new Error("Logo source not found");
}

main().catch(console.error);
