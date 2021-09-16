// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
  var passLength;
  var lowC = ['a']
  var upC  = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var spC  = "z!#$%&'()*+,-./:;<=>?@^_`{|}~";
  var num = "1234567890";


  function getrandomlowc() {
    return lowC[Math.floor(Math.random() * lowC.length)];
  }
  function getrandomupC() {
    return upC[Math.floor(Math.random() * upC.length)];
  }
  function getrandomspC() {
    return spC[Math.floor(Math.random() * spC.length)];
  }
 function passwordLength() {
 var numStr = window.prompt('how many characters for your password');
 var number = Number(numStr);
console.log(number);
if (number >= 8 && number<=128) {
    alert('next query coming up');
    passLength = number;
    setOptions();
} else {
    'atleast 8 digits and not more than 128 digits.';
    return;
}
 }

 
function setOptions() {
var lowNeed = window.confirm('do you want lowercase character for your password?');

let message1 = lowNeed ? 'lowercase confirmed and next question..' :
    'lowercase not needed and next question..';

alert(message1);

  
let upNeed = window.confirm('Do you want uppercase character for your password?');
console.log(upNeed);

let message2 = upNeed ? 'Uppercase confirmed and next question..' :
    'lowercase not needed and next question..';

alert(message2);

let speNeed = window.confirm('Do you want special character for your password?');

let message3 = speNeed ? 'special character confirmed and next question..' :
    'special character not needed. here is your password..';

alert(message3);
}

let allPossible = [];
let generatedpass = '';

if(lowNeed) {
  allPossible.concat(lowC)
};
if(lowNeed) {
  allPossible.concat(lowC)
};
if(lowNeed) {
  allPossible.concat(lowC)
};
if(lowNeed) {
  allPossible.concat(lowC)
};


for (let index = 0; index < passLength; index++) {
  generatedpass += allPossible[index];
  
}

// const typescount = lowNeed + upNeed + speNeed;
// const typesarr = [{lowNeed}, {upNeed}, {speNeed}].filter(item=> Object.values(item)[0]);

// if (typescount === 0){
//   return '';
// }

// for (let i=0; i <length; i+= typescount){
//   typesarr.forEach(type=> {
//     const funcName = Object.keys(type)[0];
//     generatedpass += randomFunc[funcName]();
//   }
//     );
// }
// let generatePassword = generatedpass;
// return generatePassword;
// console.log(generatePassword);
     
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
