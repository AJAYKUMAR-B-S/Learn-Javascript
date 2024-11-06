# The Complete JavaScript Course 👨‍💻

## Javascript_Fundamental_Part_01

## Q: Introduction to `Javascript`?
A : JavaScript is a `high-level`, `dynamic`, `multi-paradigm` programming language primarily used for creating interactive `web pages`. It supports `object-oriented`, `functional`, and `event-driven` programming styles. <br>

## JavaScript vs. Java 
▪ The choice of using the name `“JavaScript”` has always caused some confusion that the language is directly related to `Java`. However, except for `syntactic` resemblance, JavaScript has almost nothing to do with the `Java` programming language. They are both completely different languages.  <br>

▪ When `JavaScript` was initially introduced, `Java` was being heavily marketed and was the most talked-about `language` at the time. So `Netscape` thought it would be a good idea to capitalize on this success by creating the name `"JavaScript."` Basically, the name similarity between the two languages was a simple marketing 
ploy for JavaScript to easily gain acceptance. 

## What Is ECMAScript? 
▪ When `JavaScript` was first introduced by `Netscape`, there was a war going on between all the browser vendors on the market at the time. `Microsoft` and several other browser vendors implemented their own versions of `JavaScript` (with different names and syntax) in their respective browsers. This created a `huge headache` for developers, as code that worked fine on one browser was a total waste on another. This went on for a while till they all agreed to use the same language (JavaScript) in their browsers. As a result, `Netscape` submitted `JavaScript` to the `European Computer Manufacturers Association (ECMA)` for `standardization` in order to ensure proper maintenance and support of the language. Since JavaScript was standardized by `ECMA`, it was officially named `ECMAScript`.  <br>

▪ `ECMA is an international standards organization`. Its purpose is to create and maintain standards for information and communication technology. It ensures that technologies are consistent, interoperable, and well-documented, benefiting industries and users by promoting compatibility and innovation.  <br>

▪ Every time there’s something new to set standards for, `ECMA` gives out a standard guide (or specification) and puts together a group of experts called a committee.  <br>

▪ Though they are closely linked to each other, the terms `“JavaScript”` and `“ECMAScript”` do not mean the same thing.  <br>

▪ JavaScript has `two major host environments`: `browsers` and `Node.js`. These environments add some APIs to the language. If we strip all the external APIs from these environments, we get ECMAScript. In simple words, we can think of ECMAScript as JavaScript without a host environment.

## Q: What are variables?  
A: A `variable` is like a `container` where we can store `information (values)` that we want to use later in our code. Imagine it as a `labeled box` where we can put something (like a `number`, `word`, or `data`), and whenever we need it, we can refer to that box by its `name` to get the value inside it.

## Q: What are Data Types? 
A: `Data types` in JavaScript `describe the various kinds of data we can work with and store in variables`. <br>

JavaScript data types are divided into primitive and non-primitive types. 
- `Primitive Data Types`
- `Non-Primitive Data Types`

## Primitive Data Types 
`Primitive data types` are `immutable` (`Immutable means something that cannot be changed after it has been created`. In programming, an `immutable value` is one that, `once set`, `cannot be modified`. For example, in JavaScript, `strings` are `immutable`—if we try to change a string, a `new string` is created instead of `modifying the original`.) and represent simple values. 
 
There are `seven` primitive data types in JavaScript: 
1. `Number` 
2. `string` 
3. `Boolean` 
4. `Undefined` 
5. `Null` 
6. `symbol` 
7. `bigint`

## Non-primitive Data Types 
`Non-primitive data types` in JavaScript are `complex data types` that can hold `multiple values` and more complex entities. Non-primitive data types, also known as `reference types`. Unlike primitive data types, non-primitive types are `mutable` and are passed by `reference`. The two key non-primitive data types in JavaScript are: 
- `Object`
- `Array`

## Q: var, let and const keywords?
A: In JavaScript, `const`, `let`, and `var` are keywords used to `declare variables`. 
## `Var` 
The `var is the oldest keyword to declare a variable` in JavaScript. 
## `Const` 
`Used for variables that won't be reassigned`. Must be initialized when declared.
## `let`
Used for variables that may be `reassigned`. Can be declared without initialization. 

## What is Operators? 
A: `Operators` in JavaScript are `symbols` or `keywords` used to perform `operations on values` (operands). They allow us to `manipulate data`, `perform calculations`, `compare values`, and make `decisions` based on `conditions`.Here are the main types
 1. `Arithmetic Operators`
 2. `Assignment Operators`
 3. `Comparison Operators`
 4. `Logical Operators`

## Q: Template Literals? 
A: `Template literals` are a feature in JavaScript that provide an `improved way to work with strings`. They are enclosed by backticks (`) instead of single (') or double (") quotes.  They offer more flexibility and readability compared to traditional string concatenation. This lets us embed variables and expressions within our strings.

## Q: Decision Making Statements? 
A: `Decision making statements` in JavaScript are used to `execute different blocks of code based on specified conditions`. Here are the main types of decision making statements in JavaScript:
1. if statement: <br>
 `if statement` is the most `simple decision making statement`. The `if statement executes a block of code only if a specified condition is true otherwise not`.

2. if-else statement: <br>
 The `if-else statement` has two parts `if block` and `else block`. If the condition is `true` then `if block` (true block) will get executed and if the condition is false then `else block` (false block) will get executed.

3. If-else-if statement: <br>
 The `if-else-if statement` is an advanced form of `if…else` that allows JavaScript to make a correct decision out of `several conditions`. All the `if conditions` will be checked one by one. If any condition is `true` out of given then that `block will get executed` and other blocks are `skipped`.

4. Nested if Statements: <br>
 `Nested if statements` are a way to create more `complex decision-making structures` by placing one or more `if statements` inside another `if` statement. This allows for more granular control flow and decision-making in our code.

5. Switch statement: <br>
 The `switch statement evaluates an expression and matches its value against multiple case labels`. If a match is found, the corresponding `block of code is executed`. It’s useful when we want to compare a value against many possible options.

## Q: Type Conversion?
A: In programming, `type conversion` is the process of `converting data of one type to another`. For example, 
converting `string data` to `number`. Values in JavaScript can be of different types. We could have a `number`, `string`, `object`, `boolean` – we name 
it. Sometimes, we may want to convert `data from one type to another` to fit a certain operation. 
There are two types of type conversion in JavaScript: 
- `Implicit Conversion` (Coercion) - automatically done during code execution.
- `Explicit Conversion` (Type Casting) - Manual type conversion (done by us the developer).

## Q: Truthy & Falsy Values?
A: In JavaScript, the concepts of `truthy` and `falsy` values refer to how different values are evaluated in a boolean context, such as in `conditions for if statements` or `loops`. 

## Truthy Values: 
 `Truthy values` are `values that evaluate to true` in a boolean context. In JavaScript, any value that is not `falsy` is considered truthy. This includes: 
1. `True` - The boolean true itself.
2. `Non-zero numbers` - Any number other than 0 (e.g., 1, -1, 3.14).
3. `Non-empty strings` - Any string that is not empty (e.g., "hello").
4. `Objects` - All objects are considered truthy, including arrays and functions.
5. `Dates` - Instances of Date are also truthy.
 
## Falsy Values: 
 `Falsy values` are values that evaluate to `false` when coerced into a `Boolean context`. Falsy values in JavaScript are unique because there are only `six` of them. Apart from these six, all other values are `truthy values`. Here are the six falsy values in JavaScript: 
 
1. `False`: The Boolean value false. 
2. `0`: The number zero. 
3. `""` or `''` or ````: An `empty string`. 
4. `Null`: The null keyword, representing the absence of any object value. 
5. `Undefined`: The undefined keyword, representing an uninitialized value. 
6. `NaN`: Stands for `"Not a Number"`. It represents a special value returned from an operation that should return a numeric value but doesn't.

## Q:Double Equality?
A: In JavaScript, there's both the `double equality operator`. We can use both operators to compare values equality. 
- `“==”` which is called the `loose equality operator`:  Compares `values after converting them to a common type`.
- `“===”` which is called the `strict equality operator`. `Compares both value and type without conversion`.

## Q : Ternary Operator? 
A: The `ternary operator` is a concise way to execute `one of two expressions based on a condition`. It is often used as a shorter alternative to an `if-else statement`. 
    
 

