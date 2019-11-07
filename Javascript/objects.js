// //Class Constructor Functions
// class Vegetable {
//   constructor(name) {
//     this.name = name;
//   }
// }
// const carrot = new Vegetable('carrot');
// console.log(carrot.name);//'carrot'

// //Getters and Setters
// let user = {
//   name: "John",
//   surname: "Smith",
//   get fullName() {
//     return `${this.name} ${this.surname}`;
//   },
//   set fullName(value) {
//     [this.name, this.surname] = value.split(" ");
//   }
// };
// console.log(user.fullName);
// user.fullName = "Alice Cooper";
// console.log(user.name);
// console.log(user.surname);


// //Create Objects with key-value pairs or properties
// let foods = {
//   apples: 25,
//   oranges: 32,
//   plums: 28,
//   bananas: 13,
// };

// //delete keyword removes a property
// delete foods.plums;

// //add properties using dot or bracket notation
// foods.grapes = 35;
// foods['strawberries'] = 27;
// console.log(foods);//adds grapes: 35 and strawberries: 27

// //access property names with bracket notation
// function checkInventory(scannedItem) {
//   return foods[scannedItem];
// }
// console.log(checkInventory("apples"));//25

// //check if an object has a property
// console.log(foods.hasOwnProperty('oranges'));//true
// console.log('oranges' in foods);//true

// //Iterate through objects using for...in
// let users = {
//   Alan: {
//     age: 27,
//     online: false
//   },
//   Jeff: {
//     age: 32,
//     online: true
//   },
//   Sarah: {
//     age: 48,
//     online: false
//   },
//   Ryan: {
//     age: 19,
//     online: true
//   }
// };
// function countOnline(obj) {
//   let counter = 0;
//   for (let user in obj) {
//     if (obj[user].online === true) {
//       counter++;
//     }
//   }
//   return counter;
// }
// console.log(countOnline(users));

// //Object.keys() returns an array of the keys in an object
// console.log(Object.keys(users));//["Alan", "Jeff", "Sarah", "Ryan"]
// for (let user in users) {
//   console.log(user);
// }

// // Object Oriented Programming


// //Create object with properties and methods
// let teacher1 = {
//   name: "Kyle",
//   beltDegree: 2,
//   sayName: function() {return `I am Sensei ${this.name}.`}
// }
// console.log(teacher1.sayName());//I am Sensei Kyle.

// //Constructor function for creating new instances of objects
// function KarateTeacher(name, beltDegree) {
//   this.name = name;
//   this.beltDegree = beltDegree;
//   this.sayName = function() {return `I am Sensei ${this.name}.`};
// }
// let teacher2 = new KarateTeacher("Dan", 1);

// //instanceof checks whether an object is the instance of a constructor function
// console.log(teacher1 instanceof KarateTeacher);
// console.log(teacher2 instanceof KarateTeacher);

// //Push properties of an object into an array using .hasOwnProperty
// let teacher2Props =[];
// for (let property in teacher2) {
//   if (teacher2.hasOwnProperty(property)) {
//     teacher2Props.push(property);
//   }
// }
// console.log(teacher2Props)//["name", "beltDegree", "sayName"]

// //prototype creates properties on the prototype object, different than "own" properties
// KarateTeacher.prototype.beltColor = "black";
// console.log(teacher2.beltColor);//black

// //ownProps v.s prototypeProps
// function Dog(name) {
//   this.name = name;
// }
// Dog.prototype.numLegs = 4;
// let beagle = new Dog("Snoopy");
// let ownProps = [];
// let prototypeProps = [];
// for (let property in beagle) {
//   if (beagle.hasOwnProperty(property)) {
//     ownProps.push(property);
//   } else {
//     prototypeProps.push(property);
//   };
// }
// console.log(ownProps);
// console.log(prototypeProps);

// //add many properties to a prototype at once
// Dog.prototype = {
//   constructor: Dog,//define the constructor property or it will be erased
//   eat: () => console.log("snarf"),
//   describe: () => console.log(`I have ${this.numLegs}.`)
// };

// //create instance of prototype using .create
// beagle = Object.create(Dog.prototype);
// beagle.eat();//snarf

// //use .isPropertyOf instead of instanceof when not using a constructor function
// console.log(Dog.prototype.isPrototypeOf(beagle));//true
// console.log(beagle instanceof Dog);//true

// //Create parent objects for inheritance
// function Pet() {};
// Dog.prototype = Object.create(Pet.prototype);
// Dog.prototype.constructor = Dog;

// //Immediately Invoked Function Expression (IIFE)
// (function () {
//   console.log("Hey, there!");
// })(); //parentheses call the anonymous function immediately

// //Mixins let unrelated objects share a method
// function glideMixin(obj) {
//   obj.glide = function() {
//     console.log("Gliding on the water");
//   }
// }//obj could be a bug or a boat
// function flyMixin(obj) {
//   obj.fly = function() {
//     console.log("Flying, wooosh!");
//   }
// }//obj could be a bird or a plane

// //Mixins can be grouped into modules
// let motionModule = (function () {
//   return {
//     glideMixin: function (obj) {
//       obj.glide = function() {
//         console.log("Gliding on the water");
//       };
//     },
//     flyMixin: function(obj) {
//       obj.fly = function() {
//         console.log("Flying, wooosh!");
//       };
//     }
//   }
// }) ();//this module could be used by a duck object


