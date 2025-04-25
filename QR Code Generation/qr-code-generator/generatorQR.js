const QRCode = require("qrcode");
const fs = require("fs");
const path = require("path");

// Generate QR Code and save as image
async function generateQRCode(text) {
  const fileName = text.replace(/\s+/g, "_") + ".png";
  const filePath = path.join(__dirname, fileName);

  try {
    await QRCode.toFile(filePath, text);
    console.log(`✅ QR Code generated and saved as ${fileName}`);
  } catch (err) {
    throw new Error("Failed to generate QR Code.");
  }
}

module.exports = { generateQRCode };
