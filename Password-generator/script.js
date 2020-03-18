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


    let lower = prompt('do you need lower characters?');
    lower = lower.toLowerCase();

    let upper = prompt('do you need upper characters?');
    upper = upper.toLowerCase();

    let numeric = prompt('do you need numeric?');
    numeric = numeric.toLowerCase();

    let special = prompt('do you need special');
    special = special.toLowerCase();


    if (
        lower === 'yes' ||
        upper === 'yes' ||
        special === 'yes' ||
        numeric === 'yes'
    ) {
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
    } else {
        // Ask again
    }
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);