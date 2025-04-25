const QRCode = require("qrcode");
const fs = require("fs");
const path = require("path");

async function generateQRCode(data, fileNameHint = "qr_output") {
  const fileName = fileNameHint.replace(/\s+/g, "_") + ".png";
  const filePath = path.join(__dirname, fileName);

  try {
    await QRCode.toFile(filePath, data);
    console.log(`✅ QR Code generated and saved as ${fileName}`);
  } catch (err) {
    throw new Error("Failed to generate QR Code.");
  }
}

module.exports = { generateQRCode };
