// Assignment code here
var charLength = 8;
var charArr = [];

var symbolArr = ['!', '@', '#', '$', '%', '&', '*'];
var lowerArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var rightPrompt = getPrompt();

  if(rightPrompt) {

  var newPass = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = newPass;
  }

  else {
    passwordText.value = "";
  }

}

function generatePassword() {

  var password = "";
  for(var i = 0; i < charLength; i++) {
    var randomChar = Math.floor(Math.random() * charArr.length);
    password = password + charArr[randomChar];
  }

  return password;

}

function getPrompt() {
  charArr = [];
   
  charLength = parseInt(prompt("How many characters would you like in your password?"));
  if(isNaN(charLength) || charLength < 8 || charLength > 128) {
    alert("Password length has to be a number between 8 and 128. Try again.");
    return false;
  }

  if (confirm("Would you like to add lowercase letters to your password?")) {
    charArr = charArr.concat(lowerArr);
  }

  if (confirm("Would you like to add uppercase letters to your password?")) {
    charArr = charArr.concat(upperArr);
  }

  if (confirm("Would you like to add special characters to your password?")) {
    charArr = charArr.concat(symbolArr);
  }

  if (confirm("Would you like to add numbers to your password?")) {
    charArr = charArr.concat(numberArr);
  }

  return true;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);