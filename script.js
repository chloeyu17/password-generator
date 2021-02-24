// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Prompts for password criteria: length 8<x<128, UC, lc, num, spchar

var pLength = prompt("How many characters would you like the password to be?", "50");
var pUpChar = confirm("Would you like to include uppercase characters?");
var pLoChar = confirm("Would you like to include lowercase characters?");
var pNuChar = confirm("Would you like to include numerical characters?");
var pSpChar = confirm("Would you like to include special characters?");