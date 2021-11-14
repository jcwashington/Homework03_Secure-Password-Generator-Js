// Assignment Code
var generateBtn = document.querySelector("#generate");

// Establish character variables
var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specChar = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

var choices = '';
var choiceArray = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  // Print generated password to the text box
  passwordText.value = password;
  return
}
function generatePassword(passwordLength, choiceArray){

  //Using regex /^[0-9.,]+$/ to validate that only numbers are accepted : 
  // https://stackoverflow.com/questions/46552085/javascript-force-specific-data-type-input-or-accept-only-digits-in-input/46552674
  // https://stackoverflow.com/questions/7217766/regex-letters-only-validation-for-javascript-prompt

  // Prompt user for an apporpriate password length
  var passwordLength = prompt("How long would you like your password to be? Must be a number between 8 and 128");
  // Verify input is in the correct range and not empty
  while (parseInt(passwordLength) < 8 || parseInt(passwordLength) > 128 || passwordLength == "" || !passwordLength.match(/[0-9]/) ) {
    var passwordLength = prompt("Hey, you must choose a length between 8 and 128");
  }

  alert("Excellent! Your password will have " + passwordLength + " characters");

  // -------------------------
  // Have user confirm character choices
  numberConfirm = confirm("Select 'Okay' if you would like password to contain numbers. For NO select 'Cancel'");
  specialCharConfirm = confirm("Select 'Okay' if you would like password to contain special chatacters. For NO select 'Cancel'");
  upperConfirm = confirm("Select 'Okay' if you would like password to contain UPPERCASE letters. For NO select 'Cancel'");
  lowercaseConfirm = confirm("Select 'Okay' if you would like password to contain lowercase letters. For NO select 'Cancel'");

  // -------------------------
  // If else through all 16 combinations
  if (!numberConfirm && !specialCharConfirm && !upperConfirm && !lowercaseConfirm) { // f f f f
    alert("Silly Goose! You need to have some criteria\nPlease begin again")
  }
  else if (numberConfirm && specialCharConfirm && upperConfirm && lowercaseConfirm){ // t t t t
    choices = (numbers+ ',' + specChar+ ',' +upperLetters+ ','+ lowerLetters);
    choiceArray = choices.split(',');
  }
  else if (numberConfirm && !specialCharConfirm && upperConfirm && lowercaseConfirm){ // t f t t
    choices = (numbers+ ',' +upperLetters+ ',' +lowerLetters);
    choiceArray = choices.split(',');
  }
  else if (numberConfirm && specialCharConfirm && !upperConfirm && lowercaseConfirm){ //t t f t
    choices = (numbers+ ',' +specChar+ ',' +lowerLetters);
    choiceArray = choices.split(',');
  }
  else if (numberConfirm && !specialCharConfirm && !upperConfirm && lowercaseConfirm){ //t f f t
    choices = (numbers+ ',' +lowerLetters);
    choiceArray = choices.split(',');
  }
  else if (numberConfirm && specialCharConfirm && upperConfirm && !lowercaseConfirm){ //t t t f
    choices = (numbers+ ',' +specChar+ ',' +upperLetters);
    choiceArray = choices.split(',');
  }
  else if (numberConfirm && !specialCharConfirm && upperConfirm && !lowercaseConfirm){ //t f t f
    choices = (numbers+ ',' +upperLetters);
    choiceArray = choices.split(',');
  }
  else if (numberConfirm && specialCharConfirm && !upperConfirm && !lowercaseConfirm){ //t t f f
    choices = (numbers+ ',' +specChar);
    choiceArray = choices.split(',');
  }
  else if (numberConfirm && !specialCharConfirm && !upperConfirm && !lowercaseConfirm){ //t f f f
    choiceArray = numbers;
  }
  else if (!numberConfirm && specialCharConfirm && upperConfirm && lowercaseConfirm){ //f t t t
    choices = (specChar+ ',' +upperLetters+ ',' +lowerLetters);
    choiceArray = choices.split(',');
  }
  else if (!numberConfirm && !specialCharConfirm && upperConfirm && lowercaseConfirm){ //f f t t
    choices = (upperLetters+ ',' +lowerLetters);
    choiceArray = choices.split(',');
  }
  else if (!numberConfirm && specialCharConfirm && !upperConfirm && lowercaseConfirm){ //f t f t
    choices = (specChar+ ',' +lowerLetters);
    choiceArray = choices.split(',');
  }
  else if (!numberConfirm && !specialCharConfirm && !upperConfirm && lowercaseConfirm){ //f f f t
    choiceArray = lowerLetters;
  }
  else if (!numberConfirm && specialCharConfirm && upperConfirm && !lowercaseConfirm){ //f t t f
    choices = (specChar+ ',' +upperLetters);
    choiceArray = choices.split(',');
  }
  else if (!numberConfirm && !specialCharConfirm && upperConfirm && !lowercaseConfirm){ //f f t f
    choiceArray = upperLetters;
  }
  else if (!numberConfirm && specialCharConfirm && !upperConfirm && !lowercaseConfirm){ //f t f f
    choiceArray = specChar;
  }


  var password=[];
  for(var i=0; i < parseInt(passwordLength); i++) {
    password += choiceArray[Math.floor(Math.random() * choiceArray.length)];
  }

  return password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);