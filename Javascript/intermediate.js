
// //Intermediate Algorithm Scripting


// //Find the sum of all the numbers in-between two given numbers
// sumAll = (arr) => {
// let sorted = arr.sort((a, b) => a - b);
// let first = sorted[0];//or Math.min(...arr)
// let last = sorted[1];//or Math.max(...arr)
// let sum = 0;
// for (let i = first; i <= last; i++) {
//   sum += i;
// }
// return sum;
// }
// console.log(sumAll([1, 4]));//10

// //return elements in two arrays that don't repeat
// diffArray = (arr1, arr2) => {
//   var newArr = [];
//   let firstArr = arr1.filter(num => !arr2.includes(num));
//   let secondArr = arr2.filter(num => !arr1.includes(num));
//   newArr = firstArr.concat(secondArr);
//   return newArr;
// }
// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));//[4]

// //use arguments function
// function destroyer(arr) {
//   let args = [...arguments];//convert arguments into true array
//   args.splice(0, 1);//args = [2, 3]
//   let remainingValues = arr.filter(value => args.indexOf(value) === -1);
//   return remainingValues;
// }
// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));//[1, 1]

// //use Object.keys to filter objects
// function whatIsInAName(collection, source) {
//   var arr = [];
//   let sourceKey = Object.keys(source);
//   arr = collection.filter(collectionItem => {
//     return sourceKey.every(objectKey => {
//       return collectionItem[objectKey] === source[objectKey];
//   })
// })
//   return arr;
// }
// console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));

// //convert to spinal case, all lowercase with hyphens
// spinalCase = (str) => str.replace(/([a-z])([A-Z])|\s+|_+/g, '$1-$2').toLowerCase();
// console.log(spinalCase('This Is Spinal Tap'));

// //Translate string into Pig Latin
// translatePigLatin = (str) => {
//   // use str.replace(replaceThis, withThis);
//   let startVowel = /^[aeiou]/
//   if (startVowel.test(str)) {  //if beginning of str is a vowel, add "way" to the end of str 
//     return `${str}way`;
//   } else if (str.match(/[aeiou]/g) === null) { //if there are no vowels in str
//     return `${str}ay`;
//   } else {  //if it's not a vowel, then add the starting consonants and "ay" to the end
//     return str.replace(/^([^aeiouy]+)(.*)/, '$2$1ay')
//   }
// }
// console.log(translatePigLatin("california"));

// //search and replace a word in a sentence
// function myReplace(str, before, after) {
//   if (before[0] === before[0].toUpperCase()){
//     after = after[0].toUpperCase() + after.slice(1);
//   }
//   let regFunc = new RegExp(before); //RegExp class constructor
//   return str.replace(regFunc, after);
// }
// console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));

// //DNA pairing
// pairElement = (str) => {
//   let splitArray = str.split("");
//   let miniArray = [];
//   let pair = '';
//   splitArray.map(letter => {
//     switch(letter) {
//       case 'A':
//         pair = 'T';
//         break;
//       case 'T':
//         pair = 'A';
//         break;
//       case 'G':
//         pair = 'C';
//         break;
//       case 'C':
//         pair = 'G';
//         break;  
//     }
//       miniArray.push([letter, pair]);
//   });
//     return miniArray;
// }
// console.log(pairElement("ATGCG"));

// //return the missing letter in a given range
// //.charCodeAt() returns the integer value of a given character in UTF-16 code
// //String.fromCharCode() returns the character string of a given UTF-16 code
// fearNotLetter = (str) => {
//   let strCode = str.charCodeAt();
//   for (let i = 0; i < str.length; i++) {
//     if (str.charCodeAt(i) !== strCode) {
//       return String.fromCharCode(strCode);
//     } else {
//       strCode++;
//     }
//   }
// }
// console.log(fearNotLetter("abce"));//d

// //unite arrays into a single array with no repeating numbers in their original order
// function uniteUnique(arr) {
//   let uniqueArr = [];
//   let args = [...arguments];
//   for (let i = 0; i < args.length; i++) {
//     for (let j = 0; j < args[i].length; j++) {
//       if (!uniqueArr.includes(args[i][j])) {
//         uniqueArr.push(args[i][j]);
//       }
//     }
//   }
//   return uniqueArr;
// }
// console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));//[1, 3, 2, 5, 4]

// //Convert to HTML entities
// function convertHTML(str) {
//   str = str.replace(/&/g, '&amp;')
//           .replace(/</g, '&lt;')
//           .replace(/>/g, '&gt;')
//           .replace(/'/g, '&apos;')
//           .replace(/"/g, '&quot;');
// return str;
// }
// console.log(convertHTML("Hamburgers < Pizza < Tacos"));

// //create an array of Fibonacci numbers less than num
// //.filter that array for the odd numbers
// //.reduce the array to find the sum
// sumFibs = (num) => {
//   let fib = [1, 1];
//   const findNextNum = (a, b) => a + b;
//   let nextNum = findNextNum(1, 1);
//   while (nextNum <= num) {
//     fib.push(nextNum);
//     nextNum = findNextNum(fib[fib.length-1], fib[fib.length-2]);
//   }
//   return fib.filter(number => number % 2 === 1).reduce((a, b) => a + b);
// }
// console.log(sumFibs(1000));

// //Sum all prime numbers
// sumPrimes = (num) => {
//   let primeArray = [2];
//   const isPrime = (n) => {
//     for (let i = 2; i < n; i++) {
//       if ( n % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   }
//   for (let i = 3; i <= num; i += 2) {
//     if (isPrime(i)) {
//       primeArray.push(i);
//     }
//   }
// let primeSum = primeArray.reduce((a, b) => a + b);
// return primeSum;
// }
// console.log(sumPrimes(10));//17

// //Find the smallest common multiple shared by numbers in a range
// function smallestCommons(arr) {
//   arr.sort((a, b) => b - a);
//   let fullArray = [];
//   for (let i = arr[0]; i >= arr[1]; i--) {
//     fullArray.push(i);
//   }
//   let lcm = fullArray[0];
//   const gcd = (x, y) => y === 0 ? x : gcd(y, x % y);
//   for (let i = 1; i < fullArray.length; i++) {
//     let GCD = gcd(lcm, fullArray[i]);
//     lcm = (lcm * fullArray[i]) /GCD;
//    }
//   return lcm;
// }
// console.log(smallestCommons([5,1]));

// //.find returns the value of the first element that satisfies condition or undefined if none pass
// //.findIndex returns the first element's index or -1 if none pass
// function dropElements(arr, func) {
//   let lastArr = [];
//   let firstNum = arr.findIndex(func);
//   if (firstNum === -1) {
//     return lastArr;
//   } else {
//     return arr.slice(firstNum);
//   }
// }
// console.log(dropElements([1, 2, 3], function(n) {return n < 4; }));

// //flatten a multi-dimensional array into a single-dimension
// function steamrollArray(arr) {
//   let flatArray = [];
//   const flatten = (elem) => {
//     if (!Array.isArray(elem)) {
//       flatArray.push(elem);
//     } else {
//       elem.forEach(flatten);
//     }
//   }
//   arr.forEach(flatten);
//   return flatArray;
// }
// console.log(steamrollArray([1, [2], [3, [[4]]]]));//[1, 2, 3, 4]

// //Convert binary into English
// function binaryAgent(str) {
//   let binaryArray = str.split(' ');
//   let wordArray = [];
//   binaryArray.forEach(element => {
//      wordArray.push(String.fromCharCode(parseInt(element, 2)));
//   });
//   return wordArray.join('');
// }
// console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));

// //check if all objects have truthy values using Boolean function
// function truthCheck(collection, pre) {
//   return collection.every(object => object.hasOwnProperty(pre) && Boolean(object[pre]));
// }
// console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": null}], "sex"));

// //Find the sum of an unspecified number of arguments
// function addTogether() {
// const isNum = (arg) => typeof arg !== "number" ? undefined : arg;
// if (arguments.length > 1) {
//   let a = isNum(arguments[0]);
//   let b = isNum(arguments[1]);
//   if (a === undefined || b === undefined) {
//     return undefined;
//   } else {
//     return a + b;
//   }
// } else {
//   let c = arguments[0];
//   if (isNum(c)) {
//     return function(arg2) {
//       if (c === undefined || isNum(arg2) === undefined) {
//         return undefined
//       } else {
//         return c + arg2;
//       }
//     }
//   }
// }
// }
// console.log(addTogether(2));

// //Create a person object with setters and getters
// const Person = function(firstAndLast) {
//   let fullName = firstAndLast.split(' ');

//   this.setFullName = (newFull) => {
//     fullName = newFull.split(' ');
//     return fullName;
//   }
//   this.setFirstName = (newFirst) => {
//     fullName[0] = newFirst;
//     return newFirst;
//   }
//   this.setLastName = (newLast) => {
//     fullName[1] = newLast;
//     return newLast;
//   }
//   this.getFullName = () => {
//     return fullName.join(' ');
//   }
//   this.getFirstName = () => {
//     return fullName[0];
//   }
//   this.getLastName = () => {
//     return fullName[1];
//   }
// }
// let bob = new Person('Bob Ross');
// console.log(bob.getFullName());

// //Replace object key/value with new property using a conversion formula 
// function orbitalPeriod(arr) {
//   const GM = 398600.4418;
//   const earthRadius = 6367.4447;
//   const findOrbitalPeriod = (avgAltValue) => {
//     let axis = earthRadius + avgAltValue;
//     let orbitalPeriodValue = Math.round(2 * Math.PI * Math.sqrt(Math.pow(axis, 3)/GM));
//     return orbitalPeriodValue;
//   }
//   for (let i=0; i<arr.length; i++) {
//     arr[i].orbitalPeriod = findOrbitalPeriod(arr[i].avgAlt);
//     delete arr[i].avgAlt;
//   }
//   return arr;
// }
// console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));


