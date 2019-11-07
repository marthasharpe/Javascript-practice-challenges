// //Regular Expressions


// //.test()
// let myString = "Hello, World!";
// let stringRegex = /Hello/;
// console.log(stringRegex.test(myString));//true

// //.match()
// let extractStr = "Extract the word 'coding' from this string.";
// let codingRegex = /coding/;
// console.log(extractStr.match(codingRegex));//'coding'

// // -i insensitive flag ignores cases, -g global flag gets all instances
// let twinkleStar = "Twinkle, twinkle, little star";
// let starRegex = /twinkle/ig;
// console.log(twinkleStar.match(starRegex).length);//2

// // . matches any character
// let exampleStr = "Let's have a tun of fun with regular expressions!";
// let unRegex = /.un/g;
// console.log(unRegex.test(exampleStr));//true

// // square brackets match character sets
// let bugQuote = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
// let vowelRegex = /[aeiou]/ig;//will find all vowels
// console.log(bugQuote.match(vowelRegex).length);//25

// // a hyphen matches all characters or numbers in a range
// let userName = "MarthaSharpe2020";
// let rangeRegex = /[a-z0-9]/ig;
// console.log(rangeRegex.test(userName));//true

// // a caret designates the characters NOT to match
// let miceQuote = "3 blind mice.";
// let caretRegex = /[^aeiou0-9]/ig;
// console.log(miceQuote.match(caretRegex));

// // + finds characters that occur one or more times
// let difficultSpelling = "Mississippi Sisters";
// let manyRegex = /s+/gi;
// console.log(difficultSpelling.match(manyRegex).length);//5

// // * finds characers that occur zero or more times
// let soccerWord = "gooooooooal!";
// let gPhrase = "gut feeling";
// let oPhrase = "over the moon";
// let goRegex = /go*/;
// console.log(soccerWord.match(goRegex));//"goooooooo"
// console.log(gPhrase.match(goRegex));//"g"
// console.log(oPhrase.match(goRegex));//null

// //greedy vs. lazy quantifiers
// let greedy = /".+"/g;
// let lazy = /".+?"/g;
// let str = 'a "witch" and her "broom" is one';
// console.log(str.match(greedy));//"witch" and her "broom"
// console.log(str.match(lazy));//"witch" "broom"

// // caret searches for a match at the beginning of strings
// // dollar sign searches at the end of strings
// let train = "engine or caboose";
// let start = /^engine/;
// let end = /caboose$/;
// console.log(start.test(train));//true
// console.log(end.test(train));//true

// // \w is short for [A-Za-z0-9_], all alphanumeric characters
// let userSearch = "Figaro_1990";
// let alphabetRegexV2 = /\w/g;
// console.log(userSearch.match(alphabetRegexV2).length);//11

// // \W is short for [^A-Za-z0-9_], all non-alphanumeric characters
// let shortHand = /\W/;
// let numbers = "42%";
// let sentence = "Coding!";
// console.log(numbers.match(shortHand));//%
// console.log(sentence.match(shortHand));//!

// // \d is short for [0-9], a single digit
// // \D is short for [^0-9], a single non-digit
// let numString = "The Magnificent 7";
// let numRegex = /\d/g;
// let noNumRegex = /\D/g;
// console.log(numString.match(numRegex).length);//16
// console.log(numString.match(noNumRegex).length);//1

// // quatity specifiers are denoted by curly braces to indicate the number of repetitions
// // {3,5} no less than 3 and no more than 5
// // {3,} no less than three and no upper limit
// // {3} exactly three
// let A4 = "aaaah";
// let A2 = "aah";
// let multipleA = /a{3,5}h/;
// console.log(multipleA.test(A4));//true
// console.log(multipleA.test(A2));//false

// //case-insensitive, letters at the beginning, no fewer than 2, zero or more numbers at the end
// let username = "JackOfAllTrades";
// let userCheck = /^[a-z]{2,}\d*$/i;
// console.log(userCheck.test(username));//true

// // \s matches white space including \r (return), \t (tab), \f (form-feed), \n (new-line), \v (vertical tab)
// // \S matches non white space or [^\r\t\f\n\v]
// let sample = "Whitespace is important in separating words";
// let countWhiteSpace = /\s/g;
// let countNonWhiteSpace = /\S/g;
// console.log(sample.match(countWhiteSpace).length);//5
// console.log(sample.match(countNonWhiteSpace).length);//38

// // ? makes the character optional
// let american = "color";
// let british = "colour";
// let rainbowRegex= /colou?r/;
// console.log(rainbowRegex.test(american)); //true
// console.log(rainbowRegex.test(british)); //true

// //Lookaheads: (?= looks ahead to see if the pattern is there) (?! looks ahead to see if the pattern is not there)
// let password = "abc123";
// let checkPass = /(?=\w{4,8})(?=\D*\d{1,})/;
// console.log(checkPass.test(password)); //true

// //Capturing groups in parentheses: \1 denotes the first capture group, \2 the second, etc.
// let repeatNum = "42 42 42";
// let reRegex = /^(\d+)\s\1\s\1$/; //^ and $ denote the beginning and end
// console.log(repeatNum.match(reRegex)); //["42 42 42", "42"]

// //Use capture groups to search and replace
// let huhText = "This sandwich is good.";
// let fixRegex = /good/;
// let replaceText = "okey-dokey";
// console.log(huhText.replace(fixRegex, replaceText));//This sandwich is okey-dokey.
// //access capture groups with dollar signs
// console.log("Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1'));//"Camp Code"

// // remove whitespace without .trim() using | in regular expressions
// let hello = "   Hello, World!  ";
// let wsRegex = /^\s+|\s+$/;
// console.log(hello.replace(wsRegex, ""));