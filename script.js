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
  password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generate the password
function generatePassword() {
  // Prompt the user for desired password length
  let passwordLength = parseFloat(
    prompt(
      "Enter the desired length of you password (min. 8 characters, max 128 characters"
    )
  );
  console.log("passwordLength: ", passwordLength);

  // Prompt the user to meet length parameters if parameters not met
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert(
      "Your password length must be between 8 and 128 characters. Please try again."
    );
    console.log("password doesn't meet param guidelines");
    return;
  }

  // Prompt the user for the character types to include in the password
  let includeLowercase = confirm(
    "Include lowercase characters in the password?"
  );
  console.log("include lowercase: ", includeLowercase);

  let includeUppercase = confirm(
    "Include uppercase characters in the password?"
  );
  console.log("include uppercase: ", includeUppercase);

  let includeNumeric = confirm("Include numeric characters in the password?");
  console.log("include numeric: ", includeNumeric);

  let includeSpecial = confirm("Include special characters in the password?");
  console.log("include special: ", includeSpecial);

  // Validate that at least one character type has been selected
  if (
    !includeLowercase &&
    !includeUppercase &&
    !includeNumeric &&
    !includeSpecial
  ) {
    alert("You must select at least one character type. Please try again. ");
    return;
  }

  // initialize characters with an empty string and then create a string of all the selected character sets.
  let characters = "";

  if (includeLowercase) {
    characters += lowercase;
  }
  if (includeUppercase) {
    characters += uppercase;
  }
  if (includeNumeric) {
    characters += numeric;
  }
  if (includeSpecial) {
    characters += special;
  }
  console.log(characters);

  // Generate the password by randomly selecting characters from the selected sets
  for (let i = 0; i < passwordLength; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  // Return the generated password
  console.log("password length: ", password.length, "password: ", password);
  return password;
}
