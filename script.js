// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

//Prompt for the length desired
function generatePassword() {
  chosenLength = window.prompt('How many characters would you like your password to contain? Choose a length between 8-128 characters');
  console.log('user initial chosen length is ' + chosenLength);
  checkLength();
}

// check length parameters
function checkLength() {
  if (chosenLength == null) {
    return;
  } 

  else if (chosenLength < 8 || chosenLength > 128) {
    chosenLength = window.prompt('Please choose between minimum of 8 or maximum of 128 characters');
    console.log('new chosen length ' + chosenLength);
    checkLength();
  } 
  
  else {
    characterType();
    }
 }

// Characters options for password 
var specialCharacters = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '^', '`', '{', '|', '}', '~'];
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7 ', '8', '9'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
var UpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];

//what type of character to include
function characterType() {
  checkSpecial();
  function checkSpecial() {
    useSpecialCharacters = window.confirm('Click OK to confirm using Special Characters');
    console.log('special char ' + useSpecialCharacters);
    if (!useSpecialCharacters){
      specialCharacters.length = 0;
      console.log('length ' + specialCharacters.length);
      checkNumeric();
    } else {
      console.log('runnig true checkspecial');
      checkNumeric();
    }
  }

  function checkNumeric() {
    useNumeric = window.confirm('Click OK to confirm using Numberic Characters');
    console.log ('numeric ' + useNumeric);
    if (!useNumeric) {
      numeric.length = 0;
      console.log('length ' + numeric.length);
      checkLower();
    } else {
      console.log('runnig true numeric');
      checkLower();
    }
  }

  function checkLower() {
    useLowerCase = window.confirm('Click OK to confirm using Lower Case Characters');
    console.log ('lowercase ' + useLowerCase);
    if (!useLowerCase) {
      lowerCase.length = 0;
      console.log('length ' + lowerCase.length);
      checkUpper();
    } else {
      console.log('runnig true lower');
      checkUpper();
    }
  }

  function checkUpper() {
    useUpperCase = window.confirm('Click OK to confirm using Upper Case Characters');
    console.log ('uppercase ' + useUpperCase);
    if (!useUpperCase) {
      UpperCase.length = 0;
      console.log('length ' + UpperCase.length);
      checkCharatertype();
    } else {
      console.log('runnig true upper');
      assignPassword();
    }
  }

    // At least one "type" of character required
  function checkCharatertype(){
    console.log ('arrived at checkcharactertype');
    if ((!useSpecialCharacters) && (!useNumeric) && (!useLowerCase) && (!useUpperCase)) {
    // if (specialCharacters.length == 0 && numeric.length == 0 && lowerCase.length == 0 && UpperCase.length == 0) {
    window.alert ('Select at least One Special, Numeric, Lower case or Upper case character');
    characterType();
    } 
    else {
      console.log('arrived at checkchar is ok go to assign password');
      assignPassword();
    }
  } 

  function assignPassword(){
    // total possible value of password and it's length
    passwordArray = specialCharacters.concat(numeric, lowerCase, UpperCase);
    console.log(passwordArray); 

    // Based on the chosen length generate final password.
    finalPassword = '';
    console.log('chosen length = '+ chosenLength);
    for(var i = 0; i < chosenLength; i++) {
    var index = Math.floor(Math.random() * passwordArray.length);
    finalPassword += passwordArray[index];
    console.log(finalPassword);
    writePassword();
    }
  }
  // Write password to the #password input
  function writePassword() {
  passwordText = document.querySelector("#password");
  passwordText.value = finalPassword + 'above text includes:';
  }
}

