//Rest Operator
function sum(...args) {
    return args.reduce((a, b) => a + b);
  };
console.log(sum(1.5, 2.0, 3.3, 4.1, 5.9));

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
console.log(y);

//Destructuring Assignment to Assign Variables from Nested Objects
const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};
function getMaxOfTmrw(forecast) {
  const { tomorrow : { max : maxOfTomorrow}} = forecast;
  return maxOfTomorrow;
}
console.log(getMaxOfTmrw(LOCAL_FORECAST));

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
console.log(carrot.name);

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
let myRegex = /Hello/;
let result1 = myRegex.test(myString);
console.log(result1);

//.match()
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result2 = extractStr.match(codingRegex);
console.log(result2);

// -i insensitive flag ignores cases, -g global flag gets all instances
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig;
let result3 = twinkleStar.match(starRegex);
console.log(result3);

// . matches any character
let exampleStr = "Let's have a tun of fun with regular expressions!";
let unRegex = /.un/g;
let result4 = unRegex.test(exampleStr);
console.log(result4);

// square brackets match character sets
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig;//will find all vowels
let result5 = quoteSample.match(vowelRegex);
console.log(result5);

// a hyphen matches all characters or numbers in a range
let userName = "MarthaSharpe2020";
let myRegex = /[a-z0-9]/ig;
let result6 = userName.match(myRegex);
console.log(result6);