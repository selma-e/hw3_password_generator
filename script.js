///////////////////////////////////////////////////////////////////////
// PASSWORD GENERATOR
//
// * For this assignment, you will not be changing the HTML and CSS at all.
//
// * You will need a generatePassword function is called when the user
//   clicks the Generate Password button.
//
// * You can create other functions that are called from within
//   generatePassword
//
// * Gather user input with prompt's and confirm's

///////////////////////////////////////////////////////////////////////
// DO NOT TOUCH THIS CODE
//
// This code handles:
// * clicking the Generate Password
// * writing the password to the screen
//

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//////////////////////////////////////////////////////////////////////

// Creating the function to generate password on click event
function generatePassword() {
  var hasPasswordLength = false;
  var lower_case = "abcdefghijklmnopqrstuvwxyz";
  var upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var special_char = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  var integers = "0123456789";
  var pool = "";
  var password_length = "";
  var parsed_password_length;
  var final_password = "";

  // Checking to make sure the character length is not outside of range, that it is not cancelled, and that it is an integer.

  while (!hasPasswordLength) {
    password_length = prompt("What password length would you like? You must choose a password length between 8-128 characters.");
    parsed_password_length = parseInt(password_length);
    if (parsed_password_length >= 8 && parsed_password_length <= 128) {
      alert("Password Length: " + parsed_password_length + " characters");
      hasPasswordLength = true;
    } else if (isNaN(password_length)) {
      alert("The answer you provided is not an integer.");
    } else if (parsed_password_length > 128) {
      alert("Please pick a number less than or equal to 128.");
    } else if (parsed_password_length < 8) {
      alert("Please pick a number that is greater than or equal to 8.");
    } else if (password_length === null) {
      alert("You have not chosen your password length.");
    }
  }

  var confirm_lower_case = confirm("Do you want the password to contain lowercase letters?");
  var confirm_upper_case = confirm("Do you want the password to contain uppercase letters?");
  var confirm_special_characters = confirm("Do you want the password to contain special characters?");
  var confirm_numbers = confirm("Do you want the password to contain numbers?");

  while (confirm_lower_case === false && confirm_upper_case === false && confirm_special_characters === false && confirm_numbers === false) {
    alert("Please pick at least one password criteria.");
    confirm_lower_case = confirm("Do you want the password to contain lowercase letters?");
    confirm_upper_case = confirm("Do you want the password to contain uppercase letters?");
    confirm_special_characters = confirm("Do you want the password to contain special characters?");
    confirm_numbers = confirm("Do you want the password to contain numbers?");
  }

  if (confirm_lower_case) {
    pool += lower_case;
  }
  if (confirm_upper_case) {
    pool += upper_case;
  }
  if (confirm_special_characters) {
    pool += special_char;
  }
  if (confirm_numbers) {
    pool += integers;
  }


  // Creating a master pool string that will randomize a charAt selection 
  for (i = 0; i < password_length; i++) {
    var totalPool = Math.floor(Math.random() * pool.length);
    final_password += pool.charAt(totalPool);
  }
  return final_password
}