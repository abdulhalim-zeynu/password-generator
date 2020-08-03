// Assignment Code
var generateBtn = document.querySelector("#generate");
//Creating a string of all the values then using the split function to turn each character into its own value in an array by passing just quotes with no space
var lowerCaseLettersArr = "abcdefghijklmnopqrstuvwxyz".split('');
var upperCaseLettersArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
var specialCharactersArr = "~!@#$%^&*()_+<>?".split('');
var numbersArr = "1234567890".split('');

// Function for getting a random element from an array by passing the array to the function like getRandom(upperCaseLetters) will return a random letter from that array
function getRandom(arr) {
  //Generate a random number based on the arrays length so it doesnt pick a value not in the array
  var randIndex
  //Then it stores the element at the spot that matches the random generated number in an element
  var randElement = arr[randIndex];
  //returns that element, so if we did use getRandom(upperCaseLetters) and the random number was 2 it will return "C", as "A"=0,"B"=1,"C"=3
  return randElement;
}


// Function to prompt user for password options
function getPasswordOptions() {
  // Variable to store length of password from user input
var characterLength = prompt("How many characters would you like your password to be?");
  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
if(isNaN(characterLength)){
    return("You must input a number!");
}
  // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
if(characterLength < 8){
    return("Password must be at least 8 characters!");
}
  // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
if(characterLength > 128){
    return("Password must be no longer than 128 characters!");
}
  // Variable to store boolean regarding the inclusion of special characters
var specialCharacters = confirm(
    'Click OK to confirm including special characters.'
  );

  // Variable to store boolean regarding the inclusion of numeric characters
var numbers = confirm(
    'Click OK to confirm including numbers.'
);

  // Variable to store boolean regarding the inclusion of lowercase characters
var lowerCaseLetters = confirm(
    'Click OK to confirm including lowercase letters.'
);

  // Variable to store boolean regarding the inclusion of uppercase characters
var upperCaseLetters = confirm(
    'Click OK to confirm including uppercase letters.'
);
  // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
if(specialCharacters, numbers, lowerCaseLetters, upperCaseLetters === false){
    return;
}
  // Object to store user input
  var passwordOptions = {
    specialCharacters: specialCharacters
  };

  return passwordOptions;
}


//Create the function to return the password
function generatePassword(){
  var options = getPasswordOptions();
  // Variable to store password as it's being concatenated
  var result = [];

  // Array to store types of characters to include in password
  var possibleCharacters = [];

  // Array to contain one of each type of chosen character to ensure each will be used
  var guaranteedCharacters = [];

  // Conditional statement that adds array of special characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters
  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }
  // Conditional statement that adds array of numeric characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters
if(options.hasNumbers) {
    possibleCharacters = possibleCharacters.concat(numbers);
    guaranteedCharacters.push(getRandom(numbers));
}
  // Conditional statement that adds array of lowercase characters into array of possible characters based on user input
  // Push new random lower-cased character to guaranteedCharacters
if(options.hasLowercaseCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCaseLetters);
    guaranteedCharacters.push(getRandom(lowerCaseLetters));
}
  // Conditional statement that adds array of uppercase characters into array of possible characters based on user input
  // Push new random upper-cased character to guaranteedCharacters
if(options.hasUppercaseLetters) {
    possibleCharacters = possibleCharacters.concat(upperCaseLetters);
    guaranteedCharacters.push(getRandom(upperCaseLetters));
}
  // For loop to iterate over the password length from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable
    var i;
    for (i = 0; i < possibleCharacters.length; i++) {
    text += possibleCharacters[i] + "<br>";
  }  
  // Mix in at least one of each guaranteed character in the result
  
  // Transform the result into a string and return
}

// Write password to the #password input
function writePassword() {
  //generatePassword is called and expected to return the value being stored in var password.
  var password = generatePassword();
  //Selecting the html element that is designated to show the password with the id password
  var passwordText = document.querySelector("#password");
  //using the variable holding the html elements value property show the generated password 
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
