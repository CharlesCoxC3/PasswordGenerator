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
  else if (passwordLength < 8, passwordLength > 128){
    window.alert("That is not an accepeted value..")
  }
  else{
    window.alert("This value was accepted")
  }
  return;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
