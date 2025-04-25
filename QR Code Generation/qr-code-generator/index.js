const { generateQRCode } = require("./generateQR");
const { validateInput } = require("./utils");

async function main() {
  try {
    const inquirer = await import("inquirer");

    const responses = await inquirer.default.prompt([
      {
        type: "input",
        name: "name",
        message: "Enter your name:",
        validate: validateInput,
      },
      {
        type: "input",
        name: "email",
        message: "Enter your email:",
        validate: validateInput,
      },
      {
        type: "input",
        name: "phone",
        message: "Enter your phone number:",
        validate: validateInput,
      },
    ]);

    // Combine inputs into a single formatted string
    const combinedData = `Name: ${responses.name}\nEmail: ${responses.email}\nPhone: ${responses.phone}`;

    await generateQRCode(combinedData, responses.name); // use name in file name
  } catch (error) {
    console.error("❌ Error:", error.message);
  }
}

main();
