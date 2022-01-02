// Assignment code here
/*debugger;*/


var lengthResponse = function() {
  leng = "";

  while (leng === "" || leng === null) {
    leng = prompt("How many characters (Between 8-128");
  }

  leng = parseInt(leng);
  return leng;
}


var prompts = {
  
  passLength: lengthResponse(),

  upper: window.confirm("Upper Case Characters?"),
  lower: window.confirm("Lower Case Characters?"),
  numeric: window.confirm("Numbers?"),
  special: window.confirm("Special Characters?"),

}


//Random 1-4
function switchSelector() {
  switchValue = Math.floor(Math.random() * 4 + 1);
  return switchValue;
}

let password = Array(leng);


var randomFill = function() {
  a = switchSelector();
  switch(a) {
    case 1:
      console.log("A");
      break;
    case 2:
      console.log("B");
      break;
    case 3:
      console.log("C");
      break;
    case 4:
      console.log("D");
      break;
    default:
      debugger;
      break;
  }
}

console.log(switchSelector());
console.log(switchSelector());
console.log(switchSelector());
console.log(randomFill());

/*for (let i = 0; i < password.length; i++) {
  randomFill() = password[i];

}*/
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
