"use strict";

let personName = true;

if (personName) personName = false;

// if (!personName) console.log("Person Name is Not Defined");

// ! What is Function and Why we need it?
// Function is a block of code that can be called multiple times.
// It helps to perform a specific task and reusable.
// We use function to avoid repetitive code or DRY (Don't Repeat Yourself) Principle

// * Syntax of Function Declaration
// function functionName(parameters) {
// code to be executed
// }

function displayName() {
  console.log("Hello, User Name is Ajay");
}

displayName(); // ! It log the message but We Want function to be reuse

function displayUserNameAndAge(userName, age) {
  console.log(`Hello, User Name is ${userName} and Age is ${age}`);
  const returnMessage = `User Name is ${userName} and Age is ${age}`;
  return returnMessage;
}

displayUserNameAndAge("Ajay", 30); //* This will only log the 26 line which inside the function if we want to display the 27 line we have to store the value of function inside the new variable

const result = displayUserNameAndAge("Ajay", 30);
console.log(result);

// ! Function Declaration and Function Expression

// ! Function Declaration
function calcAge(birthYear) {
  return 2024 - birthYear;
}
console.log(calcAge(2000));

// * We can Call The Function Declaration Before Initialization like the Below

console.log(calcAge(2000));

function calcAge(birthYear) {
  return 2024 - birthYear;
}

// ! Function Expression
// * We can't Call The Function Expression Before Initialization it will throw an error

const calcAge2 = function (birthYear) {
  return 2024 - birthYear;
};

const age = calcAge2(2000);

console.log(age);

// ! Arrow Functions

const calcAge3 = (birthYear) => 2024 - birthYear;
const ageResult = calcAge3(2001);
console.log(ageResult);

const remainYearToRetire = (birthYear, currentYear, userName) => {
  const retireLimit = 65;
  const calcAge = currentYear - birthYear;
  const retireResult = `${userName} Remain ${retireLimit - calcAge} to Retire`;
  return retireResult;
};

const userRetireResult = remainYearToRetire(1990, 2024, "Raju");

console.log(userRetireResult);
