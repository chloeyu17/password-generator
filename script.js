//List of all characters separated by type. 
const uc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lc = "abcdefghijklmnopqrstuvwxyz";
const nm = "1234567890";
const sp = "`~!@#$%^&*()-_+=[]{}\'\"\\|;:/?.>,<";

// Assignment Code
var generateBtn = document.querySelector("#generate");

//Functions give random character depending on type
function generateUC(){
    return uc[Math.floor(Math.random()*26)];
}

function generateLC(){
    return lc[Math.floor(Math.random()*26)];
}

function generateNM(){
    return Math.floor(Math.random()*10).toString();
}

function generateSP(){
    return sp[Math.floor(Math.random()*33)];
}

// Write password to the #password input
function writePassword() {

    //Prompts for password length
    var pLength = prompt("How many characters would you like the password to be? Choose a number between 8 and 128.", "50");

    //If the user doesn't input a length the function ends.  If the input is the wrong length, the user is re-prompted
    if(pLength === null){
        return;
    } 
    while (pLength<8 || pLength>128){
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

    //password is an array that will be pushed to depending on which character types are required.  charType is an array that holds the bool inputs on which charTypes are desired.
    //charNum will be used to determine which types of characters should be generated depending on the case.
    var password = [];
    var charType = [upper, lower, number, special];
    var charNum;

    if(!upper && !lower && !number && !special){
        window.alert("Please confirm at least one type of character");
    } else {
        switch(charType.join(' ')){
            //Uppercase only
            case("true false false false"):
                for(var i=0; i<length; i++){
                    password.push(generateUC());
                }
                break;

            //Lowercase only
            case("false true false false"):
                for(var i=0; i<length; i++){
                    password.push(generateLC());
                }
                break;

            //Numbers only
            case("false false true false"):
                for(var i=0; i<length; i++){
                    password.push(generateNM());
                }
                break;

            //Special Characters only
            case("false false false true"):
                for(var i=0; i<length; i++){
                    password.push(generateSP());
                }
                break;

            //Uppercase and Lowercase 
            case("true true false false"):
                for(var i=0; i<length; i++){
                    charNum = Math.floor(Math.random()*2);
                    if(charNum == 0){
                        password.push(generateUC());
                    } else{
                        password.push(generateLC());
                    }
                }
                break;

            //Uppercase and Numbers
            case("true false true false"):
                for(var i=0; i<length; i++){
                    charNum = Math.floor(Math.random()*2);
                    if(charNum == 0){
                        password.push(generateUC());
                    } else{
                        password.push(generateNM());
                    }
                }
                break;

            //Uppercase and Special
            case("true false false true"):
                for(var i=0; i<length; i++){
                    charNum = Math.floor(Math.random()*2);
                    if(charNum == 0){
                        password.push(generateUC());
                    } else{
                        password.push(generateSP());
                    }
                }
                break;

            //Lowercase and Numbers
            case("false true true false"):
                for(var i=0; i<length; i++){
                    charNum = Math.floor(Math.random()*2);
                    if(charNum == 0){
                        password.push(generateLC());
                    } else{
                        password.push(generateNM());
                    }
                }
                break;

            //Lowercase and Special
            case("false true false true"):
                for(var i=0; i<length; i++){
                    charNum = Math.floor(Math.random()*2);
                    if(charNum == 0){
                        password.push(generateLC());
                    } else{
                        password.push(generateSP());
                    }
                }
                break;

            //Numbers and Special
            case("false false true true"):
                for(var i=0; i<length; i++){
                    charNum = Math.floor(Math.random()*2);
                    if(charNum == 0){
                        password.push(generateNM());
                    } else{
                        password.push(generateSP());
                    }
                }
                break;

            //Uppercase Lowercase Numbers
            case("true true true false"):
                for(var i=0; i<length; i++){
                    charNum = Math.floor(Math.random()*3);
                    if(charNum == 0){
                        password.push(generateUC());
                    } else if (charNum == 1){
                        password.push(generateLC());
                    } else {
                        password.push(generateNM());
                    }
                }
                break;

            //Uppercase Lowercase Special
            case("true true false true"):
                for(var i=0; i<length; i++){
                    charNum = Math.floor(Math.random()*3);
                    if(charNum == 0){
                        password.push(generateUC());
                    } else if (charNum == 1){
                        password.push(generateLC());
                    } else {
                        password.push(generateSP());
                    }
                }
                break;

            //Uppercase Numbers Special
            case("true false true true"):
                for(var i=0; i<length; i++){
                    charNum = Math.floor(Math.random()*3);
                    if(charNum == 0){
                        password.push(generateUC());
                    } else if (charNum == 1){
                        password.push(generateNM());
                    } else {
                        password.push(generateSP());
                    }
                }
                break;

            //Lowercase Numbers Special
            case("false true true true"):
                for(var i=0; i<length; i++){
                    charNum = Math.floor(Math.random()*3);
                    if(charNum == 0){
                        password.push(generateLC());
                    } else if (charNum == 1){
                        password.push(generateNM());
                    } else {
                        password.push(generateSP());
                    }
                }
                break;
            
            //Uppercase Lowercase Numbers and Special
            case("true true true true"):
                for(var i=0; i<length; i++){
                    charNum = Math.floor(Math.random()*4);
                    if(charNum == 0){
                        password.push(generateUC());
                    } else if(charNum == 1){
                        password.push(generateLC());
                    } else if (charNum == 2){
                        password.push(generateNM());
                    } else {
                        password.push(generateSP());
                    }
                }
                break;
        }
    }

//    console.log(checkLC(password));
//   console.log(checkUC(password));
//    console.log(checkNM(password));
//    console.log(checkSP(password));
    return password.join('');
}

function checkUC(password1){
    var i = 0;
    while (!uc.includes(password1[i])){
        i++;
    }
    if(i < password1.length){
        return false;
    } else {
        return true;
    }
}


function checkLC(password1){
    var i = 0;
    while (!lc.includes(password1[i])){
        i++;
    }
    if(i < password1.length){
        return false;
    } else {
        return true;
    }
}



function checkNM(password1){
    var i = 0;
    while (!nm.includes(password1[i])){
        i++;
    }
    if(i < password1.length){
        return false;
    } else {
        return true;
    }
}

function checkSP(password1){
    var i = 0;
    while (!sp.includes(password1[i])){
        i++;
    }
    if(i < password1.length){
        return false;
    } else {
        return true;
    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//console.log(checkUC(["9","=","+","}","0","d","e"]));