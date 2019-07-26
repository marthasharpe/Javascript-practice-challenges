//Rest Operator
function sum(...args) {
    return args.reduce((a, b) => a + b);
  };
console.log(sum(1.5, 2.0, 3.3, 4.1, 5.9));//16.8

//Spread Operator
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  arr2 = [...arr1];
})();
console.log(arr2);

//Destructuring Assignment to Assign Variables from Objects
const scotchSoda = {
  Glass: 'Highball',
  Spirit: 'Scotch',
  Mixer: 'Soda',
}
const {Glass : x, Spirit : y, Mixer : z} = scotchSoda;
console.log(y);//'Scotch'

//Destructuring Assignment to Assign Variables from Nested Objects
const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};
function getMaxOfTmrw(forecast) {
  const { tomorrow : { max : maxOfTomorrow}} = forecast;
  return maxOfTomorrow;
}
console.log(getMaxOfTmrw(LOCAL_FORECAST));//84.6

//Destructuring with Rest Operator
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  const [a, b, ...rest] = list;
  return rest;
}
const rest = removeFirstTwo(source);
console.log(rest);
console.log(source);

//Destructuring to pass an object as function parameters
const stats = {
  max: 56.78,
  median: 34.54,
  min: -0.75,
  average: 35.85
};
const half = (function() {
  return function half({max, min}) {
    return (max + min) / 2.0;
  };
})();
console.log(stats);
console.log(half(stats));

//Class Constructor Functions
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}
const carrot = new Vegetable('carrot');
console.log(carrot.name);//'carrot'

//Getters and Setters
let user = {
  name: "John",
  surname: "Smith",
  get fullName() {
    return `${this.name} ${this.surname}`;
  },
  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
};
console.log(user.fullName);
user.fullName = "Alice Cooper";
console.log(user.name);
console.log(user.surname);


//Regular Expressions


//.test()
let myString = "Hello, World!";
let stringRegex = /Hello/;
console.log(stringRegex.test(myString));//true

//.match()
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
console.log(extractStr.match(codingRegex));//'coding'

// -i insensitive flag ignores cases, -g global flag gets all instances
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig;
console.log(twinkleStar.match(starRegex).length);//2

// . matches any character
let exampleStr = "Let's have a tun of fun with regular expressions!";
let unRegex = /.un/g;
console.log(unRegex.test(exampleStr));//true

// square brackets match character sets
let bugQuote = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig;//will find all vowels
console.log(bugQuote.match(vowelRegex).length);//25

// a hyphen matches all characters or numbers in a range
let userName = "MarthaSharpe2020";
let rangeRegex = /[a-z0-9]/ig;
console.log(rangeRegex.test(userName));//true

// a caret designates the characters NOT to match
let miceQuote = "3 blind mice.";
let caretRegex = /[^aeiou0-9]/ig;
console.log(miceQuote.match(caretRegex));

// + finds characters that occur one or more times
let difficultSpelling = "Mississippi Sisters";
let manyRegex = /s+/gi;
console.log(difficultSpelling.match(manyRegex).length);//5

// * finds characers that occur zero or more times
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
console.log(soccerWord.match(goRegex));//"goooooooo"
console.log(gPhrase.match(goRegex));//"g"
console.log(oPhrase.match(goRegex));//null

//greedy vs. lazy quantifiers
let greedy = /".+"/g;
let lazy = /".+?"/g;
let str = 'a "witch" and her "broom" is one';
console.log(str.match(greedy));//"witch" and her "broom"
console.log(str.match(lazy));//"witch" "broom"

// caret searches for a match at the beginning of strings
// dollar sign searches at the end of strings
let train = "engine or caboose";
let start = /^engine/;
let end = /caboose$/;
console.log(start.test(train));//true
console.log(end.test(train));//true

// \w is short for [A-Za-z0-9_], all alphanumeric characters
let userSearch = "Figaro_1990";
let alphabetRegexV2 = /\w/g;
console.log(userSearch.match(alphabetRegexV2).length);//11

// \W is short for [^A-Za-z0-9_], all non-alphanumeric characters
let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
console.log(numbers.match(shortHand));//%
console.log(sentence.match(shortHand));//!

// \d is short for [0-9], a single digit
// \D is short for [^0-9], a single non-digit
let numString = "The Magnificent 7";
let numRegex = /\d/g;
let noNumRegex = /\D/g;
console.log(numString.match(numRegex).length);//16
console.log(numString.match(noNumRegex).length);//1

// quatity specifiers are denoted by curly braces to indicate the number of repetitions
// {3,5} no less than 3 and no more than 5
// {3,} no less than three and no upper limit
// {3} exactly three
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
console.log(multipleA.test(A4));//true
console.log(multipleA.test(A2));//false

//case-insensitive, letters at the beginning, no fewer than 2, zero or more numbers at the end
let username = "JackOfAllTrades";
let userCheck = /^[a-z]{2,}\d*$/i;
console.log(userCheck.test(username));//true

// \s matches white space including \r (return), \t (tab), \f (form-feed), \n (new-line), \v (vertical tab)
// \S matches non white space or [^\r\t\f\n\v]
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
let countNonWhiteSpace = /\S/g;
console.log(sample.match(countWhiteSpace).length);//5
console.log(sample.match(countNonWhiteSpace).length);//38

// ? makes the character optional
let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
console.log(rainbowRegex.test(american)); //true
console.log(rainbowRegex.test(british)); //true

//Lookaheads: (?= looks ahead to see if the pattern is there) (?! looks ahead to see if the pattern is not there)
let password = "abc123";
let checkPass = /(?=\w{4,8})(?=\D*\d{1,})/;
console.log(checkPass.test(password)); //true

//Capturing groups in parentheses: \1 denotes the first capture group, \2 the second, etc.
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; //^ and $ denote the beginning and end
console.log(repeatNum.match(reRegex)); //["42 42 42", "42"]

//Use capture groups to search and replace
let huhText = "This sandwich is good.";
let fixRegex = /good/;
let replaceText = "okey-dokey";
console.log(huhText.replace(fixRegex, replaceText));//This sandwich is okey-dokey.
//access capture groups with dollar signs
console.log("Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1'));//"Camp Code"

// remove whitespace without .trim() using | in regular expressions
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/;
console.log(hello.replace(wsRegex, ""));


//Debugging


//console.clear() clears the console of any previous code
//typeof tells what datatype a variable is: Boolean, Number, Null, Undefined, String, Symbol, Object
let seven = 7;
let three = "3";
console.log(seven + three);//73
console.log(typeof seven);//number
console.log(typeof three);//string


//Basic Data Structures


//Creating and modifying Arrays
let myArray = ["Martha", 34, { married: true, children: ["Abraham", "Elsa", "Elanor", "Eowyn"] }, "female"];
let myName = myArray[0];
  console.log(myName);//Martha
myArray[1] = 35;
  console.log(myArray[1]);//35

// .push() .unshift() .pop() .shift()
let haircolor = "blonde";
myArray.push(haircolor);
myArray.unshift("web developer");
  console.log(myArray);//["web developer", "Martha", 35, {…}, "female", "blonde"]
myArray.pop()
let occupation = myArray.shift();
  console.log(occupation);//web developer
  console.log(myArray);//["Martha", 35, {…}, "female"]

// .splice(starting index, how many items to remove, optional value(s) to add)
let family = myArray.splice(2, 1, "married");
  console.log(family);//[{…}]
  myArray.splice(1, 0, "Sharpe")
  console.log(myArray);//["Martha", "Sharpe", 35, "married", "female"]
// .slice(starting index, stopping index) doesn't modify original array
let nameArray = myArray.slice(0, 2);
  console.log(nameArray); //["Martha", "Sharpe"];

// spread operator [...] copies an entire array without modifying the original
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr]);
    num--;
  }
  return newArr;
}
console.log(copyMachine([true, false, true], 2));//[[true, false, true],[true, false, true]]

// use spread operator to spread one array into another
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun']; // change this line
  return sentence;
}
console.log(spreadOut());//['learning', 'to', 'code', 'is', 'fun']

// indexOf(some element) returns the index of the element or -1 if it doesn't exist
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];
fruits.indexOf('dates') // returns -1
fruits.indexOf('oranges') // returns 2
fruits.indexOf('pears') // returns 1

// use for loops to iterate through an array
function filterHighNumbers(numberArray) {
  let greaterThanTen = [];
  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] > 10) {
      greaterThanTen.push(numberArray[i]);
    }
  }
  return greaterThanTen;
}
console.log(filterHighNumbers([2, 12, 8, 14, 80, 0, 1]));//[12, 14, 80]

//Create Objects with key-value pairs or properties
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
};

//delete keyword removes a property
delete foods.plums;

//add properties using dot or bracket notation
foods.grapes = 35;
foods['strawberries'] = 27;
console.log(foods);//adds grapes: 35 and strawberries: 27

//access property names with bracket notation
function checkInventory(scannedItem) {
  return foods[scannedItem];
}
console.log(checkInventory("apples"));//25

//check if an object has a property
console.log(foods.hasOwnProperty('oranges'));//true
console.log('oranges' in foods);//true
console.clear();
//Iterate through objects using for...in
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};
function countOnline(obj) {
  let counter = 0;
  for (let user in obj) {
    if (obj[user].online === true) {
      counter++;
    }
  }
  return counter;
}
console.log(countOnline(users));

//Object.keys() returns an array of the keys in an object
console.log(Object.keys(users));//["Alan", "Jeff", "Sarah", "Ryan"]
for (let user in users) {
  console.log(user);
}