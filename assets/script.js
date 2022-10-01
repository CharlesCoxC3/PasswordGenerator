// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  console.log("you clicked the button");

  var userChoice = window.prompt("What legnth do you want you password to be? ( 8-128 characters)")

  var passwordLength = parseInt(userChoice)


  if (!userChoice) {
    return;
  }
  
  if (isNaN(passwordLength)){
    window.alert("That is not an accepted value..")
  } 
  else if (passwordLength < 8 || passwordLength > 128){
    window.alert("That is not an accepeted value..")
  }
  else {
    window.alert("The number " + passwordLength + " was accepted")
  }

  var lowerCase = window.confirm("The password must contain lowercase letters, do you wish to continue?")
    if (lowerCase){ var upperCase = window.confirm("The password must contain uppercase letters, do you wish to continue?")
      if (upperCase){var specialChar = window.confirm("The password must contain numeric/special characters, do you wish to continue?")}
    }
  else {
    return;
  };

  var passwordCriteria = {
    lowerCaseList: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    numberList: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    symbolsList: ["!", "@", "#", "$", "%", "^", "&", "*"],
  };

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
