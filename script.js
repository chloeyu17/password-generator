//List of all characters separated by type. 
//UC = 0-25
//LC = 26-52
//NM = 53-62
//SP = 63-95
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890`~!@#$%^&*()-_+=[]{}\'\"\\|;:/?.>,<";


//Arrays containing possible characters
var lc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uc = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var nm = ["1","2","3","4","5","6","7","8","9","0"];
var sp = [" ","!","\"","#","$","%,","&","\'","(",")", "*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","\\", "^","_","`","{","|","}","~"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

    //Prompts for password length
    var pLength = prompt("How many characters would you like the password to be?", "50");

    //If the user doesn't input a length, or if the length is shorter than 8 or longer than 128 chars, the function ends
    if(pLength === null){
        return;
    } else if (pLength<8 || pLength>128){
        pLength = prompt("Please input a number between 8 and 128.");
        //do while loop to re-prompt?
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

    var password = [];
    var charType = [upper, lower, number, special];
    console.log(charType);

    if(!upper && !lower && !number && !special){
        window.alert("Please confirm at least one type of character");
    } else {
        switch(charType){
            case():
                console.log("what's up");
                password.push(generateChar("1"));
                break;
        }
        console.log(password);
    }
    console.log(password);
    return password.join('');
}

//Give random character
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


console.log(generateChar("1"));

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




//generateBtn.onclick = writePassword();

//function(){myfunction()};

//function myfunction(){
//    document.getElementById("password").innerHTML = "yo";
//}


//function generateChar(charType){
//    if(charType == "1"){
//        return chars[Math.floor(Math.random()*95)];
//    }
//}