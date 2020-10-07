var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
/////Don't touch above///////

function generatePassword() {
  var render_next_step = true;
  var password_selections = {
    "lowercase" : "abcdefghijklmnopqrstuvwxyz",
    "uppercase" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "special char" : " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~",
    "integers" : "0123456789",
  }
  var lower_case_array = password_selections["lowercase"].split("");
  var upper_case_array = password_selections["uppercase"].split("");
  var special_char_array = password_selections["special char"].split("");
  var integers_array = password_selections["integers"].split("");  
  var default_password = "";
  var default_array = [];

  while (render_next_step) {
    var password_length = prompt("What password length would you like? You must choose a password length between 8-128 characters.");
    var parsed_password_length = parseInt(password_length);

    // Checking to make sure the character length is not outside of range, that it is not cancelled, and that it is an integer.
    if (parsed_password_length >= 8 && parsed_password_length <= 128) {
      alert("Password Length: " + parsed_password_length + " characters");
      render_next_step;
    } else if (isNaN(password_length)) {
      alert("The answer you provided is not an integer.");
      render_next_step = false;
      return;
    } else if (parsed_password_length > 128) {
      alert("Please pick a number less than or equal to 128.");
      render_next_step = false;
      return;
    } else if (parsed_password_length < 8) {
      alert("Please pick a number that is greater than or equal to 8.");
      render_next_step = false;
      return;
    } else if (password_length === null) {
      alert("You have not chosen your password length.");
      render_next_step = false;
      return;
    }

    var confirm_lower_case = confirm("Do you want the password to contain lowercase letters?");
    var confirm_upper_case = confirm("Do you want the password to contain uppercase letters?");
    var confirm_special_characters = confirm("Do you want the password to contain special characters?");
    var confirm_numbers = confirm("Do you want the password to contain numbers?");

    if (confirm_lower_case === true) {
      var random_lower_case = lower_case_array[Math.floor(Math.random()*lower_case_array.length)];
      document.body.innerHTML = random_lower_case
    } else {
      random_lower_case.filter(lower_case_array === false);
    }

  }
  console.log(password_selections);
  console.log(lower_case_array, upper_case_array, special_char_array, integers_array);
}

// var lower_case = "abcdefghijklmnopqrstuvwxyz";
  // var upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // var special_char = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  // var integers = "0123456789";
  // var lower_case_array = lower_case.split("");
  // var upper_case_array = upper_case.split("");
  // var special_char_array = special_char.split("");
  // var integers_array = integers.split("");


// for (var i=0; i<10; i++) {
//   var random_numbers= Math.floor(Math.random() * 26) +1;
//   console.log(random_numbers);