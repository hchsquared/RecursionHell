
/// FACTORIAL COMPUTATION

// Create a function that computes the factorial of a number n. A factorial
// is the product of the integers from 1 through n. For example:

// factorial(5) ==> 120 (1 * 2 * 3 * 4 * 5)

var factorial = function (n) {
  // Termination Case
  if (n <= 1) {
    return 1;
  }
  // Recursive Case
  else {
    return n * factorial(n - 1);
  }

};

// console.log(factorial(5));

/// PALINDROME DETECTOR

// Create a function that detects if the provided string is a palindrome 
// (a word that is identical in the reverse order.) Assume single letters 
// are considered palindromes. The output should be either true or false.

var test1 = "hannah";
var test2 = "a man a plan a canal panama";
var test3 = "a man";
var test4 = "negative";

var palindrome = function(str) {
  
  str = str.replace(/\s/g, '');

  str1 = arguments[1] || str.slice(0, Math.floor(str.length / 2));
  str2 = arguments[2] || str.slice(Math.ceil(str.length / 2), str.length);
  n = arguments[3] || str2.length;

    // Termination Case
    if (n <= 1 ) {
      return true;
    }

    // Recursive Case
    if (str1[str1.length - n] === str2[n - 1]) {
      return palindrome(str, str1, str2, n - 1);
    } else {
      return false;
    }

}

console.log(palindrome(test1));
console.log(palindrome(test2));
console.log(palindrome(test3));
console.log(palindrome(test4));

/*
	/// STRING REVERSE

// Write a function that recursively reverses a string, i.e.:

// 'testing' => 'gnitset'

function stringReverse(str) {
// Your code here
}


	/// RECURSIVE MAP

// Recursively implement a map function. For example:

// map(['a','b','c'],function(value) {
//   return value.toUpperCase();
// }); 
// => [ 'A', 'B', 'C' ]

function map(arr) {
// Your code here
}


	/// GREATEST COMMON DIVISOR

// Write an algorithm to find the greatest common divisor (gcd) 
// of two positive numbers.

function gcd(x, y) {
// Your code here
}


	/// NUMBERS BETWEEN

// Recursively implement a function that returns an array of the 
// numbers in between x and y.

// x = 4, y = 8
// => [5,6,7]

function inBetween(x, y) {
// Your code here
}


	/// ARRAY SUM

// Compute the sum of all of the numbers in an array. Assume there is
// no array depth.

// [5,2,6]
// => 13

function arraySum(arr) {
// Your code here
}



	/// EXPONENT CALCULATOR

// Find the exponent of a number when the power is provided.

// 8^2
// => 64

function exp(base, exp) {
// Your code here
}


	/// FIBONACCI SEQUENCE

// Write a recursive function to find the first n fibonacci numbers.

 /// FIBONACCI SEQUENCE

// Write a recursive function to find the first n fibonacci numbers.

function fib(n) {
// Your code here
}


  /// EVENS CHECKER

// Write a recursive function that determines if a number n is even.

function even(n) {
  
}


  /// MERGE SORT

// Write a merge sort program in JavaScript.

function mergeSort(n) {
// Your code here
}


  /// NUMBERS TO TEXT

// Write a function that takes a string as an imput and transforms
// all single-digit numbers to their respective text forms.

// "I have 5 dollars"
// => "I have five dollars"

function numToText(s) {
// Your code here 
}


  /// RECURSIVE MULTIPLICATION 

// Construct a function that uses only addition and subtraction
// to find the product of two numbers.

// (5,6)
// => 30

function mul(x, y) {
//Your code here
}


  /// RECURSIVE DIVISION

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.

var divide = function(x, y) {
};


  /// POWER OF TWO

// Determine if a number is a power of two.

// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false

var powerOfTwo = function(n) {
};


  /// MODULO

// Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.

// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4

var modulo = function(x, y) {
};


  /// STRING COMPARISON

// Write a function that compares each character of two strings and returns true if
// both are identical.

// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true

var compareStr = function(str1, str2) {
};


  /// ARRAY REVERSE


// Reverse the order of an array.

var reverseArr = function (array) {
};


  /// ARRAY CREATOR

// Create a new array with a given value and length.

// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]

var buildList = function(value, length) {
};


  /// OCCURENCE COUNT

// Count the occurence of a value inside a list.

// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2

var countOccurrence = function(array, value) {
};


  /// KEY IN OBJECT OCCURENCE COUNTER

// Write a function that counts the number of times a key occurs in an object.

// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2

var countKeysInObj = function(obj, key) {
};


  /// VALUE IN OBJECT OCCURENCE COUNTER

// Write a function that counts the number of times a value occurs in an object.

// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};


  /// KEY IN OBJECT RENAMER

// Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};



  /// ARRAY CAPITALIZER 

// Given an array of words, return a new array containing each word capitalized.

// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

var capitalizeWords = function(input) {
};


  /// ARRAY CAPITALIZER PT. II

// Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
};



 /// SUM EVEN IN NESTED OBJECT

// Return the sum of all even numbers in an object containing nested objects.

// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10

var nestedEvenSum = function(obj) {
};



  /// FLATTEN AN ARRAY

// Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]

var flatten = function(arrays) {
};

  /// LETTER TALLY

//Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}

var letterTally = function(str, obj) {
};


  /// ELIMINATE CONSECUTIVE DUPLICATES

// Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.

// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
};


  /// REDUCE ZERO SERIES

// Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};



  /// SIGN ALTERNATION

// Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};








// http://kevvv.in/untitledrecursion-in-javascript/
// http://www.w3resource.com/javascript-exercises/javascript-recursion-functions-exercises.php
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/recursion
https://github.com/JS-Challenges/recursion-prompts/blob/master/src/recursion.js

*/

