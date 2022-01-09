// Assignment code here
var leng;
const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numberCase = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const specialCase = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '=', '`', '~'];

//Ask for length, parse answer, return value
function lengthResponse() {
  leng = "";

  //Validate entry, re-run if invalid
  while (leng === "" || leng === null) {
    leng = prompt("How many characters (Between 8-128)");
    if (leng < 8 || leng > 128) {
      leng = "";
    }
  }

  //Parse and set leng value
  leng = parseInt(leng);
  return leng;
}


//Prompts storage object
var prompts = {

  upper: "",
  lower: "",
  numeric: "",
  special: "",
}
function charPrompts() {
  prompts.upper = window.confirm("Upper case letters?");
  prompts.lower = window.confirm("Lower case letters?");
  prompts.numeric = window.confirm("Numbers?");
  prompts.special = window.confirm("Special characters?");
}

//Random 1-4
function switchSelector() {
  switchValue = Math.floor(Math.random() * 4 + 1);
  return switchValue;
}

function randomFill() {

  //Set a = to random 1-4 with switchSelector()
  a = switchSelector();
  console.log("Switch Selector: " + a);

  switch (a) {

    //Upper Case
    case 1:
      //If prompts.upper (from inital response) true
      if (prompts.upper) {
        //retVar equal to randomly selected value from upperCase array
        retVar = randomCase(upperCase);
        break;
      }

      //Else, re-run function
      else {
        randomFill();
        break;
      }
    //Lower Case
    case 2:
      if (prompts.lower) {
        retVar = randomCase(lowerCase);
        break;
      } else {
        randomFill();
        break;
      }
    //Numbers
    case 3:
      if (prompts.numeric) {
        retVar = randomCase(numberCase);
        break;
      } else {
        randomFill();
        break;
      }
    //Special Characters
    case 4:
      if (prompts.special) {
        retVar = randomCase(specialCase);
        break;
      } else {
        randomFill();
        break;
      }
    default:
      debugger;
      randomFill();
      break;
  }
  //Return selected array value to generatePassword()
  return retVar;
}

//Take array of either upper, lower, number, character
function randomCase(caseArray) {

  //Choose random number based on length of array
  b = Math.floor(Math.random() * caseArray.length);
  console.log("Array number: " + b);

  //Set caseSelect equal to random number in array
  caseSelect = caseArray[b];
  console.log("Array choice: " + caseSelect);

  //Return chosen value to randomFill()
  return caseSelect;
}

function generatePassword() {
  //debugger;
  //Reset array for additional actions
  pwdArray = [];
  i = 0;

  lengthResponse();
  charPrompts();

  //Iterate though array based on length, push from randomFill function
  while (i < leng) {
    var pushVar;
    //Set pushVar = to return from randomFill() switch
    pushVar = randomFill();
    //Push var into array
    pwdArray.push(pushVar);
    //Add one to counter
    i++;
  }
  //Condense array into single string, no quotes commas 
  let finalString = pwdArray.join("");
  return finalString;
}

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
