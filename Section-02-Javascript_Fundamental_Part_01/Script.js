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
