// Define character sets
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numeric = "0123456789";
const special = "!@#$%^&*()_+-=[]{}|;':,.<>/\"?";

// Initialize password as an empty string
let password = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// TODO: Generate the password

// TODO: Prompt the user for password length

// TODO: Prompt the user for password length

// TODO: Prompt the user for the character types to include in the password

// TODO: Validate that at least one character type has been selected

// TODO: Create a string of all the selected character sets

// TODO: Generate the password by randomly selecting characters from the selected sets

// TODO: Return the generated password
