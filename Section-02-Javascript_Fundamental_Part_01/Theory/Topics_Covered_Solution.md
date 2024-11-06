# The Complete JavaScript Course

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

# Primitive Data Types 
`Primitive data types` are `immutable` (`Immutable means something that cannot be changed after it has been created`. In programming, an `immutable value` is one that, `once set`, `cannot be modified`. For example, in JavaScript, `strings` are `immutable`—if we try to change a string, a `new string` is created instead of `modifying the original`.) and represent simple values. 
 
There are `seven` primitive data types in JavaScript: 
1. `Number` 
2. `string` 
3. `Boolean` 
4. `Undefined` 
5. `Null` 
6. `symbol` 
7. `bigint`

# Non-primitive Data Types 
`Non-primitive data types` in JavaScript are `complex data types` that can hold `multiple values` and more complex entities. Non-primitive data types, also known as `reference types`. Unlike primitive data types, non-primitive types are `mutable` and are passed by `reference`. The two key non-primitive data types in JavaScript are: 
- Object
- Array

