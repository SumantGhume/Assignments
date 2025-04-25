// Validate non-empty input
function validateInput(input) {
    if (!input || input.trim() === "") {
      return "Input cannot be empty!";
    }
    return true;
  }
  
  module.exports = { validateInput };
  