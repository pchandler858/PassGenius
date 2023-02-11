// Define character sets
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numeric = "0123456789";
const special = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = generatePassword();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generate the password
function generatePassword() {
  // Initialize password as an empty string
  let password = "";
  // Prompt the user for desired password length and convert the response to a integer
  let passwordLength = parseInt(
    prompt(
      "Enter the desired length of you password (min. 8 characters, max 128 characters)"
    )
  );

  // Prompt the user to meet length parameters if parameters not met
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert(
      "Your password length must be between 8 and 128 characters. Please try again."
    );
    return "";
  }

  // Prompt the user for the character types to include in the password
  let includeLowercase = confirm(
    "Include lowercase characters in the password?"
  );
  let includeUppercase = confirm(
    "Include uppercase characters in the password?"
  );
  let includeNumeric = confirm("Include numeric characters in the password?");
  let includeSpecial = confirm("Include special characters in the password?");

  // Validate: at least one character type has been selected
  if (
    !includeLowercase &&
    !includeUppercase &&
    !includeNumeric &&
    !includeSpecial
  ) {
    alert("You must select at least one character type. Please try again. ");
    return "";
  }

  // Concatenate all the selected character sets and initialize the string "characters" with an empty sting. Also, add a randomly select character from each selected character set to the "password" string.
  let characters = "";

  if (includeLowercase) {
    characters += lowercase;
    password += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
  }
  if (includeUppercase) {
    characters += uppercase;
    password += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
  }
  if (includeNumeric) {
    characters += numeric;
    password += numeric.charAt(Math.floor(Math.random() * numeric.length));
  }
  if (includeSpecial) {
    characters += special;
    password += special.charAt(Math.floor(Math.random() * special.length));
  }

  // Generate the password by randomly selecting characters from the selected sets
  for (let i = password.length; i < passwordLength; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  // Return the generated password
  return password;
}
