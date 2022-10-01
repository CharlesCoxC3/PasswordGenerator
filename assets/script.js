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
    return;
  } 
  else if (passwordLength < 8 || passwordLength > 128){
    window.alert("That is not an accepeted value..")
    return;
  }
  else {
    window.alert("The number " + passwordLength + " was accepted")
  } 

  var confirm1 = window.confirm("The password may contain lowercase letters, do you wish to continue?");
  var confirm2 = window.confirm("The password may contain uppercase letters, do you wish to continue?");
  var confirm3 = window.confirm("The password may contain numbers, do you wish to continue?");
  var confirm4 = window.confirm("The password may contain special characters, do you wish to continue?");
  

  var lowerCaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var symbolsList = ["!", "@", "#", "$", "%", "^", "&", "*"];
  var upperCaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var passwordOptions = [];
      
      if (confirm1 === true) {
        var passwordOptions = passwordOptions.concat(lowerCaseList)
      }
      if (confirm2 === true) {
        var passwordOptions = passwordOptions.concat(upperCaseList)
      }
      if (confirm3 === true) {
        var passwordOptions = passwordOptions.concat(numberList)
      }
      if (confirm4 === true) {
        var passwordOptions = passwordOptions.concat(symbolsList)
      }

      console.log(passwordOptions)

  var generatedPassword = ""
  
    for (var i = 0; i < passwordLength; i++){
      var result = passwordOptions[Math.floor(Math.random()*passwordOptions.length)];
      console.log(result)
      generatedPassword += result
    };

    if(passwordOptions < 1){
      return "No selections were made"
    };

return generatedPassword
}; 





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



