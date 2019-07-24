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

// curly braces indicate number of repetitions allowed: e.g. {2,4} no fewer than 2 no more than 4
let username = "JackOfAllTrades";
let userCheck = /^[a-z]{2,}\d*$/i;
//case-insensitive, letters at the beginning, no fewer than 2, zero or more numbers at the end
console.log(userCheck.test(username));//true

// \s matches white space including \r (return), \t (tab), \f (form-feed), \n (new-line), \v (vertical tab)
// \S matches non white space or [^\r\t\f\n\v]
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
let countNonWhiteSpace = /\S/g;
console.log(sample.match(countWhiteSpace).length);//5
console.log(sample.match(countNonWhiteSpace).length);//38