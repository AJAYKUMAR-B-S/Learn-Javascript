/*
let js = "amazing";
44 + 23 + 12 - 9;
console.log(44 + 23 + 12 - 9);

let firstName = "Kumar"; //* This is The value that we store inside the firstName Variable.

console.log(firstName);
console.log(firstName);
console.log(firstName);

// * variables Naming Convention

// let 3years =3 // ! it will throw the SyntaxError

//let ajay&kumar = "ajay" // ! it will throw the SyntaxError

let ajay_kumar = "BS"; //* This would be allowed

//let new = 20 // ! this is also not allowed because "new" is Reserved keyword in javascript

//let function ="ajay" // ! this  also not allowed because "function" is Reserved keyword in javascript

let _new = 40; // * this will be allowed

let _function = 50; // * this will be allowed

let $new = 70; // * this will be allowed

let $function = 80; // * this will be allowed

console.log(_new, _function, $new, $function);

let name = "Ajay"; // ! This will work but not recommended because "name" is also reserved keyword in javascript it leads to conflicts

let PersonName = "John"; // ! This will work but not recommended because it is not the convention of variables upperCase is used for Constant values in

let PI = 3.1415; // * This is Correct Conversion of Variables

*/
/*
let jsIsFun = true;

console.log(jsIsFun);
console.log(typeof jsIsFun);
console.log(typeof 34);
console.log(typeof "Ajay");

jsIsFun = "YES";

console.log(jsIsFun); // *  Dynamic typing

let firstName;

console.log(firstName); // * undefined because value is not assigned to the variable

console.log(typeof undefined); // * type of undefined is "undefined"

console.log(typeof null); // * type of null is an "Object" this is a bug but not corrected because of dependency of legacy code
*/

/*
let loggedIn = true;

loggedIn = false;

console.log(loggedIn); // * loggedIn is now false because we changed to the new value of false

const loggedOut = true;

// loggedOut = false; // ! It will give you the TypeError because once the value is assigned to the Const dataType we can't change the value

console.log(loggedOut);

var isPurchased = false;

isPurchased = true;

console.log(isPurchased); // * isPurchased is now true because we changed to the new value of true
*/

// Basic Operators

/*
const num1 = 10 + 20;

console.log(num1);

const num2 = 10 - 20;

console.log(num2);

const firstName = "Ajay";
const lastName = "Kumar";

console.log(firstName, lastName);

//Math operators
const now = 2024;

const ajayAge = now - 1999;
const kumarAge = now - 1998;

console.log(ajayAge, kumarAge);

console.log(ajayAge ** 3); // *  When we expand this one it's like ajayAge * ajayAge * ajayAge but shortly we can write like  ajayAge ** 3

let value1 = 10;

value1 += 20; // * When we expand this  value1 = value1 + 20 but shortly we can write like value1 +=20

value1 *= 30;

console.log(value1);

//Assignment operators
let y = 100;

y++; // * y = y + 1 ;
y--; // * y = y - 1 ;
y--; // * y = y -1
console.log(y);

//Comparison Operators

console.log(10 > 5); // *
console.log(10 >= 10);
console.log(30 <= 20);
console.log(10 < 5); // * false
console.log(10 == 5); // * false because both are different types
console.log(10 != 5); // * true
*/

//Opeartor Precedence

/*
let x, y;

x = y = 10 - 20 - 30;

console.log(x, y); // * x will be -40 and y will be -40 Because "-" have higher precedence than "=" Check this official Link to Check precedence of Opeartor "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence"

const a = 30;

const b = 40;

const averageValue = (a + b) / 2; // * grouping have higher precedence than "/"

console.log(a, b, averageValue);
*/

//String and Template Literals
/*
const firstName = "Ajay";
const lastName = "Kumar";
const job = "Teacher";
const email = "ajay@gmail.com";
const birthYear = 1999;

const details =
  "FirstName is -> " +
  firstName +
  " LastName is -> " +
  lastName +
  " His/her Job is -> " +
  job +
  " Age is -> " +
  (birthYear - 2030) +
  " His /her Email is -> " +
  email;
console.log(details);

const details1 = `FirstName is -> ${firstName} LastName is -> ${lastName} His/her Job is -> ${job} Age is -> ${
  birthYear - 2040
} His /her Email is -> ${email}`;

console.log(details1);

*/

// * Taking Decision  = If Else

/*
const minimumAgeForLicense = 18;
const birthYearOfPerson = 2009;
const currentYear = 2025;

if (currentYear - birthYearOfPerson >= minimumAgeForLicense) {
  console.log(`This Person is Eligible For Driver license, Thank You`);
} else {
  console.log(
    `This Person Should Wait ${
      minimumAgeForLicense - (currentYear - birthYearOfPerson)
    } Years For Driver license, Thank You`
  );
}
  */

//Type Conversion and Type Coercion

// Type Conversion

/*
const inputYear = "2000";

console.log(inputYear + 11);

//COnvert String to Number
console.log(Number(inputYear) + 10); // * Number() Function is used to convert String to Number
console.log(Number("Ajay")); // * IT Returns NaN Output Value
console.log(typeof NaN); //* IT Returns Output as Number meaning that NaN is also a Number

//COnvert Number to String

console.log(typeof String(2000)); // * String() Function is used to convert Number to String

// Type Coercion
console.log("I am " + 30 + " Years Old");

console.log("20" + "30" + 2);

console.log("20" - "30" - 2);

console.log("10" * "30");
console.log("10" / "30");

let n = "1" + 1; // 11

n -= 1; // n= 11-1

console.log(n);

console.log(2 + 3 + 4 + "5");

console.log("10" + "30" + "10" - 10 + "2");

console.log("10" - "3" - "10" - 2 + "5");
*/

//Truthy anf Falsy Value

// * There are 5 Falsy Values they are : 0 , undefined , " " ,null, NaN
/*
console.log(Boolean(0)); //false

console.log(Boolean(undefined)); //false

console.log(Boolean("")); //false

console.log(Boolean(null)); //false

console.log(Boolean(NaN)); //false

console.log(Boolean("Ajay")); //true

console.log(Boolean(true)); //true

console.log(Boolean(false)); //false

const amount = 0;

if (amount) {
  console.log("Amount is greater than 0");
} else {
  console.log("Amount is less than 0");
}
*/

//Equality Operators  == and ===

/*
const age = "19";

if (age == 19) console.log("Wow You became an Adult (loose)"); // * It will Execute Because It allow Type Coercion

if (age === 19) console.log("Wow You became an Adult (Strict)"); //* It will not Execute Because It not allow Type Coercion

const inputNum = Number(prompt("What is Your favorite Number "));

console.log(inputNum, typeof inputNum);

if (inputNum == 20) console.log(inputNum + " is Cool Num");

if (inputNum !== 19) console.log("Why not 19");

*/

//Boolean Logic : And, OR, Not

// Checking if person will get driving license based on condition

/*
const personAge = 17;
const personsHasGoodVision = false;
const personClearExam = true;

// Using && operator to check condition
if (personAge >= 18 && personsHasGoodVision && personClearExam) {
  console.log("You are eligible for Driving License");
} else {
  console.log("You are not eligible for Driving License");
}

// Using || operator to check condition
if (personAge >= 18 || personsHasGoodVision || personClearExam) {
  console.log("You are eligible for Driving License");
} else {
  console.log("You are not eligible for Driving License");
}

// Using (!)Not operator to check condition
if (personAge >= 18 && !personsHasGoodVision && personClearExam) {
  console.log("You are eligible for Driving License");
} else {
  console.log("You are not eligible for Driving License");
}

*/

// switch Statement

const day = "friday";

switch (day) {
  case "sunday":
    console.log("Today is Sunday");
    break;

  case "monday":
    console.log("Today is Monday");
    break;

  case "friday":
    console.log("Friday is Javascript Day");
    break;

  case "tuesday":
    console.log("tuesday is react day");
    break;

  case "wednesday":
    console.log("wednesday is Html day");
    break;

  default:
    console.log("I don't know What day ");
}

// if we write using if else above condition

if (day === "sunday") {
  console.log("Today is Sunday");
} else if (day === "monday") {
  console.log("Today is Monday");
} else if (day === "tuesday") {
  console.log("tuesday is react day");
} else if (day === "wednesday") {
  console.log("wednesday is Html day");
} else if (day === "friday") {
  console.log("Friday is Javascript Day");
} else {
  console.log("I don't know What day ");
}
