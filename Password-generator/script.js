// Assignment Code
var generateBtn = document.querySelector("#generate");

function getRandomInt(max) {
    max = Math.floor(max);
    return Math.floor(Math.random() * max); //The maximum is exclusive and the minimum is inclusive
}

function generatePassword() {
    let lengthPrompt;
    let length;

    do {
        lengthPrompt = prompt('what length do you want the password to be?');
        length = parseInt(lengthPrompt, 10);
    } while (length !== NaN && length <= 8 && length >= 128);

    /**
     * This section will continue to prompt the user for
     * character sets until they respond yes to at least
     * one of them
     */
    do {
        let lower = prompt('do you need lower characters?');
        lower = lower.toLowerCase();

        let upper = prompt('do you need upper characters?');
        upper = upper.toLowerCase();

        let numeric = prompt('do you need numeric?');
        numeric = numeric.toLowerCase();

        let special = prompt('do you need special');
        special = special.toLowerCase();
    } while (lower && upper && numeric && special = no);
    /* all answers are no */


    /**
     * At this moment, we know the user responded
     * yes to a question so we can begin generating the password
     */
    let lowerDict = 'abcdefghijklmnopqrstuvwxyz';
    let upperDict = 'ABDEFGHIJKLMNOPQRSTUVWXYZ';
    let numericDict = '1235467890';
    let specialDict = '~!@#$%^&*()_+';

    let passwordDict = '';

    if (special === 'yes') {
        passwordDict += specialDict;
    }

    if (numeric === 'yes') {
        passwordDict += numericDict;
    }

    if (lower === 'yes') {
        passwordDict += lowerDict;
    }

    if (upper === 'yes') {
        passwordDict += upperDict;
    }

    let password = '';

    for (let i = 0; i < length; i++) {
        let index = getRandomInt(passwordDict.length);
        password += passwordDict[index];
    }

    return password;
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);