// Entry point of the app
const inquirer = require("inquirer");
const { generateQRCode } = require("./generateQR");
const { validateInput } = require("./utils");

// Ask user for input
async function main() {
  try {
    const { userInput } = await inquirer.prompt([
      {
        type: "input",
        name: "userInput",
        message: "Enter data for QR code generation:",
        validate: validateInput,
      },
    ]);

    await generateQRCode(userInput);
  } catch (error) {
    console.error("❌ Error:", error.message);
  }
}

main();
