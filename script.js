//List of all characters separated by type. 
const uc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lc = "abcdefghijklmnopqrstuvwxyz";
const nm = "1234567890";
const sp = " `~!@#$%^&*()-_+=[]{}\'\"\\|;:/?.>,<";

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    //Prompts for password length
    var pLength = prompt("How many characters would you like the password to be? Choose a number between 8 and 128.", "50");

    //If the user doesn't input a length the function ends.  If the input is the wrong length, the user is re-prompted
    if(pLength === null){
        return;
    } 
    while (pLength<8 || pLength>128 || Number.isNaN(parseInt(pLength))){
        pLength = prompt("Please input a number between 8 and 128.");
    }
    
    //Prompts for password criteria: Uppercase chars, lowercase chars, numerical chars, and special chars
    var pUpChar = confirm("Would you like to include uppercase characters?");
    var pLoChar = confirm("Would you like to include lowercase characters?");
    var pNuChar = confirm("Would you like to include numerical characters?");
    var pSpChar = confirm("Would you like to include special characters?");

    //Password and password text run generatePassword with the criteria and set the textarea with #password to the generated password
    var password = generatePassword(pLength, pUpChar, pLoChar, pNuChar, pSpChar);
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

//Generate password with given criteria
function generatePassword(length, upper, lower, number, special){
    //password is an array that will be pushed to depending on which character types are required.  
    //charType is an array that will hold the desired charTypes based on the response to confirm
    var password = [];
    var charType = [];
    var numCharTypes = 0;

    //We add the types of desired characters to an array containing all desired charTypes
    //We will also add one of that desired character to the password array and increase the number of chartypes
    if(!upper && !lower && !number && !special){
        window.alert("Please confirm at least one type of character");
    } else {
        if (upper === true){
            charType = charType.concat(uc.split(''));
            password.push(uc.split('')[Math.floor(Math.random()*uc.split('').length)]);
            numCharTypes++;
        } 
        if (lower === true){
            charType = charType.concat(lc.split(''));
            password.push(lc.split('')[Math.floor(Math.random()*lc.split('').length)]);
            numCharTypes++;
        }
        if (number === true){
            charType = charType.concat(nm.split(''));
            password.push(nm.split('')[Math.floor(Math.random()*nm.split('').length)]);
            numCharTypes++;
        }
        if (special === true){
            charType = charType.concat(sp.split(''));
            password.push(sp.split('')[Math.floor(Math.random()*sp.split('').length)]);
            numCharTypes++;
        }
    }
    //We now fill in the rest of the desired password length randomly and return a string of the shuffled array
    for(var j = 0; j<(length-numCharTypes); j++){
        password.push(charType[Math.floor(Math.random()*(charType.length))]);
    }
    return password.sort(() => Math.random()-0.5).join('');
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);