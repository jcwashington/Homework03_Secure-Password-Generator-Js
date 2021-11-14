// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  // Establish character variables
  var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specChar = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
  // Prompt user for an apporpriate password length
  var passwordLength = prompt("How long would you like your password to be?" , "!must be a number between 8 and 128!");

  var choices = '';
  var choiceArray = [];
  // Come back and add number verification !!!!
  // Verify input is in the correct range
  while (parseInt(passwordLength) < 8 || parseInt(passwordLength) > 128) {
    console.log("length :" + passwordLength)
    alert("Sorry your length must be between 8 and 128");
    var passwordLength = prompt("How long would you like your password to be?" , "!must be a number between 8 and 128!");
  }
  console.log("length :" + passwordLength)
  alert("Excellent! Your password will have " + passwordLength + " characters");

  // Have user confirm character choices
  numberConfirm = confirm("Select 'Okay' if you would like password to contain numbers. For NO select 'Cancel'");
  specialCharConfirm = confirm("Select 'Okay' if you would like password to contain special chatacters. For NO select 'Cancel'");
  upperConfirm = confirm("Select 'Okay' if you would like password to contain UPPERCASE letters. For NO select 'Cancel'");
  lowercaseConfirm = confirm("Select 'Okay' if you would like password to contain lowercase letters. For NO select 'Cancel'");

  // switch through all 16 combinations
  if (!numberConfirm && !specialCharConfirm && !upperConfirm && !lowercaseConfirm) { // f f f f
    alert("Silly Goose! You need to have some criteria\nPlease begin again")
  }
  else if (numberConfirm && specialCharConfirm && upperConfirm && lowercaseConfirm){ // t t t t
    console.log(numberConfirm, specialCharConfirm, upperConfirm, lowercaseConfirm);
    choices = (numbers+specChar+upperLetters+lowerLetters);
    console.log(choiceArray);
  }
  else if (numberConfirm && !specialCharConfirm && upperConfirm && lowercaseConfirm){ // t f t t
    console.log(numberConfirm, specialCharConfirm, upperConfirm, lowercaseConfirm);
    choices = (numbers+upperLetters+lowerLetters);
    console.log(choices);
  }
  else if (numberConfirm && specialCharConfirm && !upperConfirm && lowercaseConfirm){ //t t f t
    console.log(numberConfirm, specialCharConfirm, upperConfirm, lowercaseConfirm);
    choices = (numbers+specChar+lowerLetters);
    console.log(choices);
  }
  else if (numberConfirm && !specialCharConfirm && !upperConfirm && lowercaseConfirm){ //t f f t
    console.log(numberConfirm, specialCharConfirm, upperConfirm, lowercaseConfirm);
    choices = (numbers+lowerLetters);
    console.log(choices);
  }
  else if (numberConfirm && specialCharConfirm && upperConfirm && !lowercaseConfirm){ //t t t f
    console.log(numberConfirm, specialCharConfirm, upperConfirm, lowercaseConfirm);
    choices = (numbers+specChar+upperLetters);
    console.log(choices);
  }
  else if (numberConfirm && !specialCharConfirm && upperConfirm && !lowercaseConfirm){ //t f t f
    console.log(numberConfirm, specialCharConfirm, upperConfirm, lowercaseConfirm);
    choices = (numbers+upperLetters);
    console.log(choices);
  }
  else if (numberConfirm && specialCharConfirm && !upperConfirm && !lowercaseConfirm){ //t t f f
    console.log(numberConfirm, specialCharConfirm, upperConfirm, lowercaseConfirm);
    choices = (numbers+specChar);
    console.log(choices);
  }
  else if (numberConfirm && !specialCharConfirm && !upperConfirm && !lowercaseConfirm){ //t f f f
    console.log(numberConfirm, specialCharConfirm, upperConfirm, lowercaseConfirm);
    choices = numbers;
    console.log(choices);
  }
  else if (!numberConfirm && specialCharConfirm && upperConfirm && lowercaseConfirm){ //f t t t
    console.log(numberConfirm, specialCharConfirm, upperConfirm, lowercaseConfirm);
    choices = (specChar+upperLetters+lowerLetters);
  }
  else if (!numberConfirm && !specialCharConfirm && upperConfirm && lowercaseConfirm){ //f f t t
    console.log(numberConfirm, specialCharConfirm, upperConfirm, lowercaseConfirm);
    choices = (upperLetters+lowerLetters);
    console.log(choices);
  }
  else if (!numberConfirm && specialCharConfirm && !upperConfirm && lowercaseConfirm){ //f t f t
    console.log(numberConfirm, specialCharConfirm, upperConfirm, lowercaseConfirm);
    choices = (specChar+lowerLetters);
    console.log(choices);
  }
  else if (!numberConfirm && !specialCharConfirm && !upperConfirm && lowercaseConfirm){ //f f f t
    console.log(numberConfirm, specialCharConfirm, upperConfirm, lowercaseConfirm);
    choices = lowerLetters;
    console.log(choices);
  }
  else if (!numberConfirm && specialCharConfirm && upperConfirm && !lowercaseConfirm){ //f t t f
    console.log(numberConfirm, specialCharConfirm, upperConfirm, lowercaseConfirm);
    choices = (specChar+upperLetters);
    console.log(choices);
  }
  else if (!numberConfirm && !specialCharConfirm && upperConfirm && !lowercaseConfirm){ //f f t f
    console.log(numberConfirm, specialCharConfirm, upperConfirm, lowercaseConfirm);
    choices = upperLetters;
    console.log(choices);
  }
  else if (!numberConfirm && specialCharConfirm && !upperConfirm && !lowercaseConfirm){ //f t f f
    console.log(numberConfirm, specialCharConfirm, upperConfirm, lowercaseConfirm);
    choices = specChar;
    console.log(choices);
  }

  choiceArray = choices.split('');
  console.log(choiceArray);
  var password = generatePassword(choices);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  return
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

