"use strict";
/*

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

//! Function calling other Function
//* This is Arrow Function with multiple ternary conditions

const totalBalance = (amount, accountNum) =>
  amount > 0 && amount < 500
    ? `You have ${amount} in your ${accountNum} Account and you have a low balance, 🙏 please maintain minimum balance to avoid any charges `
    : amount > 500
    ? `You have ${amount} in your ${accountNum} Account, 😊 congratulation you have maintain minimum balance`
    : `You don't have amount in your ${accountNum} account`;

const userDetailsAndBalanceDetails = (userName, userAccountNum, amount) => {
  return `${userName} ${totalBalance(amount, userAccountNum)}`;
};

console.log(userDetailsAndBalanceDetails("Ajay", "BIR12000876", 200));
console.log(userDetailsAndBalanceDetails("Raaju", "RIR120008986", 2000));
console.log(userDetailsAndBalanceDetails("Kumar", "NIR120008643", 0));

*/

// * Array Data Structure

/*

const friendsName = ["Raju", "Ajay", "Vijay"];

console.log(friendsName);

const friendsBirthYears = new Array(2000, 1999, 1998);

console.log(friendsBirthYears);

console.log(friendsBirthYears.length);

console.log(friendsBirthYears[friendsBirthYears.length - 1]);

friendsName[2] = "Sujay";

console.log(friendsName);

// friendsName = ["Ravi", "Raju", "Ajay"];

console.log(friendsBirthYears + 10);

console.log(friendsBirthYears - 10);

*/

// * Array Methods
// * Push Method

/*
const friendsName = ["Raju", "Ajay", "Vijay"];

const newLength = friendsName.push("Rama");

console.log(newLength);

console.log(friendsName);

*/
/*
// * Unshift Method

const friendsName1 = ["Raju", "Ajay", "Vijay"];

const newLength1 = friendsName1.unshift("sitha");

console.log(newLength1);
console.log(friendsName1);

// * Pop Method

const friendsName2 = ["Raju", "Ajay", "Vijay"];

const lastFriend = friendsName2.pop();

console.log(friendsName2);
console.log(lastFriend);

// * Shift Method

const friendsName3 = ["sitha", "Raju", "Ajay", "Vijay"];

const firstFriend = friendsName3.shift();

console.log(firstFriend);
console.log(friendsName3);

// * indexOf Method

const friendsName4 = ["Raju", "Ajay", "Vijay", "Ajay"];

console.log(friendsName4.indexOf("Ajay"));

console.log(friendsName4.indexOf("Ravi"));

// * Includes Method

const friendsName5 = ["Raju", "Ajay", "Vijay", "Ajay"];

if (friendsName5.includes("Raju")) console.log("You have friend called Raju");

*/

// * Object

/*
const personDetails = [
  "Ajay",
  "kumar",
  2024 - 1999,
  "Coder",
  ["Raju", "Ajay", "Vijay", "Ajay"],
];

console.log(personDetails);

const personDetailsObject = {
  firstName: "Ajay",
  lastName: "Kumar",
  age: 2024 - 1999,
  profession: "Coder",
  friends: ["Raju", "Ajay", "Vijay", "Ajay"],
};

console.log(personDetailsObject);

*/

/*
const personDetailsObject = {
  firstName: "Ajay",
  lastName: "Kumar",
  age: 2024 - 1999,
  profession: "Coder",
  friends: ["Raju", "Ajay", "Vijay", "Ajay"],
};

console.log(personDetailsObject);

console.log(personDetailsObject.firstName);

console.log(personDetailsObject.lastName);

// * dot and Bracket Notation

console.log(personDetailsObject["firstName"]);

const nameKey = "Name";

console.log(personDetailsObject["first" + nameKey]);

console.log(personDetailsObject["last" + nameKey]);

const personInput = prompt(
  "What do you want to know about the Person? choose between firstName , LastName , age, proffession and Friends"
);

if (personDetailsObject[personInput]) {
  console.log(personDetailsObject[personInput]);
} else {
  console.log("No such Key is Available");
}

console.log(
  `${personDetailsObject.firstName} has ${personDetailsObject.friends.length} and his best friend is ${personDetailsObject.friends[0]}`
);

*/
/*
const personDetailsObject = {
  firstName: "Ajay",
  lastName: "Kumar",
  birthYear: 1997,
  profession: "Coder",
  friends: ["Raju", "Ajay", "Vijay", "Ajay"],

  // calcAge: function (birthYearInput) {
  //   return 2024 - birthYearInput;
  // },
  // * we can Create same key name twice inside the object. js engine will mot throw the error
  // * Learning About this keyword . this keyword will point to the current object
  calcAge: function () {
    this.insideFunctionVaribale = true;
    console.log(this);
    return 2024 - this.birthYear;
  },
  getPersonAllDetails: function () {
    return `Name is ${(this.firstName, this.lastName)} and person age is ${
      2024 - this.birthYear
    } job is ${this.profession} and has ${
      this.friends.length > 0 ? "a" : "no"
    } friends ${this.friends.length > 0 ? `name are ${this.friends}` : ""}`;
  },
};


console.log(personDetailsObject.calcAge());
console.log(personDetailsObject["calcAge"]());
console.log(personDetailsObject.getPersonAllDetails());
*/

/*
// ! For loop

// console.log("person logged 1 time");
// console.log("person logged 2 time");
// console.log("person logged 3 time");
// console.log("person logged 4 time");
// console.log("person logged 5 time");
// console.log("person logged 6 time");
// console.log("person logged 7 time");
// console.log("person logged 8 time");
// console.log("person logged 9 time");
// console.log("person logged 10 time");

for (let rep = 1; rep <= 10; rep++) {
  console.log(`person logged ${rep} time`);
}

//
*/
/*
//! Looping the Array

const personDetailsObject = [
  "Ajay",
  "Kumar",
  2024 - 1999,
  "Coder",
  ["Raju", "Ajay", "Vijay", "Ajay"],
];

// ! If we Declare the CONST keyword it will throw an error
// for (const rep = 0; rep < personDetailsObject.length; rep++) {
//   console.log(personDetailsObject[rep]);
// }

const typeOfArray = [];

for (let rep = 0; rep < personDetailsObject.length; rep++) {
  console.log(personDetailsObject[rep]);
  typeOfArray[rep] = typeof personDetailsObject[rep];
}
console.log(typeOfArray);

const years = [1998, 1878, 2001, 2013];
const listOfAgeArray = [];

for (let i = 0; i < years.length; i++) {
  listOfAgeArray.push(2024 - years[i]);
}

console.log(listOfAgeArray);
*/

// ! Continue and Break

const personDetailsObject = [
  "Ajay",
  "Kumar",
  2024 - 1999,
  "Coder",
  ["Raju", "Ajay", "Vijay", "Ajay"],
];

const typeOfArray = [];

for (let rep = 0; rep < personDetailsObject.length; rep++) {
  if (typeof personDetailsObject[rep] !== "string") continue;

  typeOfArray.push(typeof personDetailsObject[rep]);
}

console.log(typeOfArray);
