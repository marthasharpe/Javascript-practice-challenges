// //Creating and modifying Arrays
// let myArray = ["Martha", 34, { married: true, children: ["Abraham", "Elsa", "Elanor", "Eowyn"] }, "female"];
// let myName = myArray[0];
//   console.log(myName);//Martha
// myArray[1] = 35;
//   console.log(myArray[1]);//35

// // .push() .unshift() .pop() .shift()
// let haircolor = "blonde";
// myArray.push(haircolor);
// myArray.unshift("web developer");
//   console.log(myArray);//["web developer", "Martha", 35, {…}, "female", "blonde"]
// myArray.pop()
// let occupation = myArray.shift();
//   console.log(occupation);//web developer
//   console.log(myArray);//["Martha", 35, {…}, "female"]

// // .splice(starting index, how many items to remove, optional value(s) to add)
// let family = myArray.splice(2, 1, "married");
//   console.log(family);//[{…}]
//   myArray.splice(1, 0, "Sharpe")
//   console.log(myArray);//["Martha", "Sharpe", 35, "married", "female"]
// // .slice(starting index, stopping index) doesn't modify original array
// let nameArray = myArray.slice(0, 2);
//   console.log(nameArray); //["Martha", "Sharpe"];

// // spread operator [...] copies an entire array without modifying the original
// function copyMachine(arr, num) {
//   let newArr = [];
//   while (num >= 1) {
//     newArr.push([...arr]);
//     num--;
//   }
//   return newArr;
// }
// console.log(copyMachine([true, false, true], 2));//[[true, false, true],[true, false, true]]

// // use spread operator to spread one array into another
// function spreadOut() {
//   let fragment = ['to', 'code'];
//   let sentence = ['learning', ...fragment, 'is', 'fun']; // change this line
//   return sentence;
// }
// console.log(spreadOut());//['learning', 'to', 'code', 'is', 'fun']

// // indexOf(some element) returns the index of the element or -1 if it doesn't exist
// let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];
// fruits.indexOf('dates') // returns -1
// fruits.indexOf('oranges') // returns 2
// fruits.indexOf('pears') // returns 1

// // use for loops to iterate through an array
// function filterHighNumbers(numberArray) {
//   let greaterThanTen = [];
//   for (let i = 0; i < numberArray.length; i++) {
//     if (numberArray[i] > 10) {
//       greaterThanTen.push(numberArray[i]);
//     }
//   }
//   return greaterThanTen;
// }
// console.log(filterHighNumbers([2, 12, 8, 14, 80, 0, 1]));//[12, 14, 80]

// //Functional Programming


// var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// function add(arr, bookName) {
//   let newArr = [...arr];
//   newArr.push(bookName);
//   return newArr;
// }

// function remove(arr, bookName) {
//   let newArr = [...arr];
//   if (newArr.indexOf(bookName) >= 0) {
//     newArr.splice(newArr.indexOf(bookName), 1);
//   }
//   return newArr;
// }

// var newBookList = add(bookList, 'A Brief History of Time');
// var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
// var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

// console.log(bookList);

// var watchList = [
//   {  
//     "Title": "Inception",
//     "Year": "2010",
//     "Rated": "PG-13",
//     "Director": "Christopher Nolan",
//     "Writer": "Christopher Nolan",
//     "imdbRating": "8.8",
//   },
//   {  
//     "Title": "Interstellar",
//     "Year": "2014",
//     "Rated": "PG-13",
//     "Director": "Christopher Nolan",
//     "Writer": "Jonathan Nolan, Christopher Nolan",
//     "imdbRating": "8.6",
//   },
//   {
//     "Title": "Avatar",
//     "Year": "2009",
//     "Rated": "PG-13",
//     "Director": "James Cameron",
//     "Writer": "James Cameron",
//     "imdbRating": "7.9",
//   }
// ];

// //use .map to return title and rating
// let movieRating = watchList.map(movie => {return {"title":movie["Title"], "rating":movie["imdbRating"]}});
// console.log(movieRating);

// //use .filter to find ratings above 8.0
// let highRating = movieRating.filter(movie => movie.rating >= 8.0);
// console.log(highRating);

// //use .reduce to find average ratings of Christopher Nolan movies
// let nolanFilms = watchList.filter(movie => movie.Director === "Christopher Nolan");
// let nolanRatings = nolanFilms.map(movie => Number(movie.imdbRating));
// let averageRating = nolanRatings.reduce((a, b) => a + b) / nolanFilms.length;
// console.log(averageRating); 

// //make .forEach behave like .map or .filter
// var s = [23, 65, 98, 5];
// Array.prototype.myMap = (callback) => {
//   var newArray = [];
//   s.forEach(input => newArray.push(callback(input)));
//   return newArray;
// }
// Array.prototype.myFilter = (callback) => {
//   var newArray = [];
//   s.forEach(input => {
//     if (callback(input) === true) {
//       newArray.push(input)
//     }
// })
// return newArray;
// }

// var map_s = s.myMap(item => item * 2);
// console.log(map_s);
// var filter_s = s.myFilter(item => item % 2 === 1);
// console.log(filter_s);

// //use .slice
// sliceArray = (anim, beginSlice, endSlice) => {
//   let animArray = anim.slice(beginSlice, endSlice)
//   return animArray;
// }
// var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
// console.log(sliceArray(inputAnim, 1, 3));//["Dog", "Tiger"]

// //use .concat
// nonMutatingConcat = (original, attach) => {
//  let concatenated = original.concat(attach);
//  return concatenated;
// }
// var first = [1, 2, 3];
// var second = [4, 5];
// console.log(nonMutatingConcat(first, second));//[1, 2, 3, 4, 5]

// //use .sort
// var globalArray = [5, 6, 3, 2, 9];
// nonMutatingSort = (arr) => {
//   let sorted = arr.concat().sort((a, b) => a - b);//.concat can be used to clone an array
//   return sorted;
// }
// console.log(nonMutatingSort(globalArray));//[2, 3, 5, 6, 9]

// //use .split with regex
// splitify = (str) => str.split(/\W/);
// console.log(splitify("Hello World,I-am code"));//["Hello", "World", "I", "am", "code"]

// //use .join to create a sentence
// sentensify = (str) => str.split(/\W/).join(' ');
// console.log(sentensify("May-the-force-be-with-you"));//May the force be with you

// //make a title into url format
// var globalTitle = " Winter Is  Coming";
// urlSlug = (title) => title.toLowerCase().trim().split(/\s+/).join('-');
// var winterComing = urlSlug(globalTitle);
// console.log(winterComing);//winter-is-coming

// //use .every to see if every element meets a criteria
// checkPositive = (arr) => arr.every(num => num > 0);
// console.log(checkPositive([1, 2, 3, -4, 5]));//false

// //use .some to see if any element meets a criteria
// checkPositive = (arr) => arr.some(num => num > 0);
// console.log(checkPositive([1, 2, 3, -4, 5]));//false

