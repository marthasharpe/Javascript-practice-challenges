
// //Basic Algorithm Scripting

// //Convert Celcius to Fahrenheit
// function convertToF(celsius) {
//   let fahrenheit = (celsius * 9/5) + 32;
//   return fahrenheit;
// }
// console.log(convertToF(30));//86

// //Reverse a String
// function reverseString(str) {
//   return str.split("").reverse().join("");//splits into array, reverses it, then joins it again
// }
// console.log(reverseString("hello"));//olleh

// //Factorialize a number
// function factorialize(num) {
//   if (num === 0 || num === 1) {
//     num = 1;
//   } else {
//   for (let i = num - 1; i >= 1; i--) {
//   num *= i;
//   }
// }
//   return num;
// }
// console.log(factorialize(5));//120

// //Find longest word in a string
// function findLongestWordLength(str) {
//   let wordArray = str.split(/\s/);
//   let longestWord = wordArray.reduce((a, b) => a.length > b.length ? a : b);
//   return longestWord.length;
// }
// console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));//6

// //Return largest numbers in Arrays
// function largestOfFour(arr) {
//   return arr.map(subArr => {
//     return subArr.reduce((a, b) => a > b ? a : b)}
//   )}
// console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));//[5, 27, 39, 1001]

// //Check string ending
// // .substring(start index, end index) returns part of the string
// function confirmEnding(str, target) {
//  return str.substring(str.length - target.length) === target ? true : false;
// }
// console.log(confirmEnding("He has to give me a new name", "name"));//true

// //Repeat a string any number of times
// // str.repeat(num) would work
// function repeatStringNumTimes(str, num) {
//   let repeatString = '';
//   while (num > 0) {
//     repeatString += str;
//     num--;
//   }
//   return repeatString;
// }
// console.log(repeatStringNumTimes("abc", 3));//abcabcabc

// //Truncate a string with ...
// function truncateString(str, num) {
//   if (str.length > num) {
//     return `${str.substring(0, num)}...`;
//   } else if (str.length <= num) {
//     return str;
//   }
// }
// console.log(truncateString("Martha Dawn Sharpe", 8));//Martha D...

// //.find() returns the first element in an array that satisfies a function
// function findElement(arr, func) {
//   return arr.find(func);
// }
// console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));//2

// //Check if typeof input is a boolean
// function booWho(bool) {
//   return typeof bool === 'boolean' ? true : false;
// }
// console.log(booWho(true));//true

// //Capitalize each word in a string
// function titleCase(str) {
//   let wordArray = str.toLowerCase().split(' ');
//   let title = wordArray.map(word => {
//     return word.charAt(0).toUpperCase() + word.slice(1);
//   });
//   return title.join(' ');
// }
// console.log(titleCase("I'm a little tea pot"));

// //Insert one array into another at a given index
// function frankenSplice(arr1, arr2, n) {
//   let insideArray = arr1.slice(0); //or [...arr1] to clone array
//   let endArray = arr2.slice(0); //or [...arr2] to clone array
//   insideArray.forEach(element => {
//     endArray.splice(n++, 0, element);
//   });
//   return endArray;
// }
// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));//[4, 1, 2, 3, 5, 6]

// //Remove all falsy values from an array
// function bouncer(arr) {
//   let truthyArray = arr.filter(elem => elem ? true : false)
//   return truthyArray;
// }
// console.log(bouncer([7, "ate", "", false, 9]));//[7, "ate", 9]

// //Find the index where a number should go in a sorted array
// function getIndexToIns(arr, num) {
// let orderedArray = arr.sort((a, b) => a - b);
// let lowestIndex = orderedArray.findIndex(element => element >= num);
// return lowestIndex === -1 ? arr.length : lowestIndex;
// }
// console.log(getIndexToIns([40, 60], 50));//1

// //Compare the letters in two strings
// function mutation(arr) {
//   let str1 = arr[0].toLowerCase();
//   let str2 = arr[1].toLowerCase();
//   for (let i=0; i<str2.length; i++) {
//     if (str1.indexOf(str2[i]) === -1) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(mutation(["hEllo", "hell"]));//true

// //Split array into 2-dimensional array
// function chunkArrayInGroups(arr, size) {
//   let splitArray = [];
//   let index = 0;
//   while (arr.length > index) {
//     splitArray.push(arr.slice(index, index + size));
//     index += size;
//   }
//   // for (let i=0; i < arr.length; i += size) {
//   //   splitArray.push(arr.slice(i, i + size));
//   // }
//   return splitArray;
// }
// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));//[["a", "b"], ["c", "d"]]


