# **Password Generator**
[Overview](#overview) ||
[Web Address](#overview) || 
[Usage Tips](#overview) || 
[Collaborators](#overview) || 
[Images](#images)

# 1. Overview
The Password Generator Application generates a randomized string of characters to be used as a secure password. Users can indicate how many characters the password should be and whether the password should contain uppercase, lowercase, numeric, and/or special characters.

Javascript is used to prompt the user for the desired criteria and generate a password that is guaranteed to contain at least one of each of the desired characters.  The characters chosen are randomized, which will increase security of the password.  The password can be selected and copy-pasted for use. 

One strong motivation to build this project was to ensure that passwords I use in the future are secure.  Many people can fall into the habit of using the same password for multiple accounts.  Often, these passwords are easily guessed and contain names or words that are significant to the user.  By using a randomly generated password with a combination of uppercase, lowercase, numeric, and special characters, users can improve the security of their accounts.

One challenge that I encountered was in generating the password.  My first response to this problem was to figure out the 16 possible combinations of types of characters used and write out a switch case for each possibility.  After speaking with a classmate, I realized that this problem could be solved much more elegantly by pushing an array of characters of the desired type into a larger array of types of characters to be used in the password.  

# 2. Web Address
Deployed Application:
https://chloeyu17.github.io/password-generator/

Github Repository:
https://github.com/chloeyu17/password-generator/

# 3. Usage Tips
Clicking the button "generate password" will lead the user to a series of prompts.  The entered number for the first prompt will be parsed into an integer.  If the number does not meet the requirements, the user will be prompted to enter a correct value.  Similarly, if the user does not indicate any desired character types, the program will end.

# 4. Collaborators
Clifford Morin: https://github.com/cliffordmorin

# 5. Images
[!alt text](./images/home.png)
[!alt text](./images/prompt.png)
[!alt text](./images/generated.png)