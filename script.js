// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

//Prompt for the length desired
function generatePassword() {
  chosenLength = window.prompt('How many characters would you like your password to contain? Choose a length between 8-128 characters');
//  console.log('user initial chosen length is ' + chosenLength);
  checkLength();
}

// check length parameters
function checkLength() {
  if (chosenLength == null) {
    return;
  } 
  else if (chosenLength < 8 || chosenLength > 128) {
    chosenLength = window.prompt('Please choose between minimum of 8 or maximum of 128 characters');
//    console.log('new chosen length ' + chosenLength);
    checkLength();
  } 
  else {
    characterType();
    }
 }

// Character type options for password 
var specialCharacters = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '^', '`', '{', '|', '}', '~'];
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7 ', '8', '9'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
var UpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
// Final type of characters chosen by user
var charType = '';

//what type of character to include
function characterType() {
  checkSpecial();
  function checkSpecial() {
    useSpecialCharacters = window.confirm('Click OK to confirm using Special Characters');
    if (useSpecialCharacters === false) {
      specialCharacters.length = 0;
      checkNumeric();
    } else {
      specialCharacters = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '^', '`', '{', '|', '}', '~'];
      charType += ' Special';
      checkNumeric();
    }
  }

  function checkNumeric() {
    useNumeric = window.confirm('Click OK to confirm using Numberic Characters');
    if (useNumeric === false) {
      numeric.length = 0;
      checkLower();
    } else {
      numeric = ['0', '1', '2', '3', '4', '5', '6', '7 ', '8', '9'];
      charType += ' Numeric';
      checkLower();
    }
  }

  function checkLower() {
    useLowerCase = window.confirm('Click OK to confirm using Lower Case Characters');
    if (useLowerCase === false) {
      lowerCase.length = 0;
      checkUpper();
    } else {
      lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
      charType += ' Lowercase';
      checkUpper();
    }
  }

  function checkUpper() {
    useUpperCase = window.confirm('Click OK to confirm using Upper Case Characters');
    if (useUpperCase === false) {
      UpperCase.length = 0;
      checkCharactertype();
    } else {
      UpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
      charType += ' Uppercase';
      assignPassword();
    }
  }

    // At least one "type" of character required
  function checkCharactertype(){
    if (useSpecialCharacters === false && useNumeric === false & useLowerCase === false && useUpperCase === false) {
    window.alert ('Select at least One Special, Numeric, Lower case or Upper case character');
    characterType();
    } 
    else {
      assignPassword();
    }
  } 

  function assignPassword(){
    // total possible value of password and it's length
    passwordArray = specialCharacters.concat(numeric, lowerCase, UpperCase);

    // Based on the chosen length generate final password.
    finalPassword = '';
    for(var i = 0; i < chosenLength; i++) {
    var index = Math.floor(Math.random() * passwordArray.length);
    finalPassword += passwordArray[index];
    writePassword();
    }
  }
  // Write password to the #password input along with users choices
  function writePassword() {
  passwordText = document.querySelector("#password");
  passwordText.value = finalPassword + '\n\n your password has ' + chosenLength + ' characters \n including' + charType + ' characters';
  }
}

