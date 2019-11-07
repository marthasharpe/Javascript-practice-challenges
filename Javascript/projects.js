//JavaScript Projects//


// //Palindrome Checker
// //see if the given string is the same in reverse without any special characters, spaces, or capital letters
// function palindrome(str) {
//   let strippedStr = str.replace(/[\W\s|_]/ig, '').toLowerCase();
//   let reversedStr = strippedStr.split('').reverse().join('');
//   console.log(strippedStr);
//   console.log(reversedStr);
//   return strippedStr === reversedStr ? true : false;
// }
// console.log(palindrome(" Cye_Eye!"));

// //Roman Numeral Converter
// function convertToRoman(num) {
//   let romanNum = "";
//   const romanNumerals = { 'M':1000, 'CM':900, 'D':500, 'CD':400, 'C':100, 'XC':90, 'L':50, 'XL':40, 'X':10, 'IX':9, 'V':5, 'IV':4, 'I':1 }
//   for (let i in romanNumerals){
//     while (num >= romanNumerals[i]) {
//       romanNum += i;
//       num -= romanNumerals[i];
//     }
//   }
//   return romanNum;
// }
//  console.log(convertToRoman(891));

// //Caesars Cipher
// //translate the given string using the ROT13 cipher, which slides each letter back 13 places
// //ASCII A-Z === 65-90
// function rot13(str) {
//   let newStr = "";
//   newStr = str.replace(/[A-Z]/g, (x) => {
//     let newCode = x.charCodeAt(0) - 13;
//     if (newCode < 65) {
//       return String.fromCharCode(newCode += 26);
//     } else {
//       return String.fromCharCode(newCode);
//     }
//   });
//   return newStr;
// }
// console.log(rot13("SERR PBQR PNZC!"));

// //Telephone Number Validator
// function telephoneCheck(str) {
//   let regex =  /^(1[\-\s]?)?(\(\d{3}\)|\d{3})[\-\s]?\d{3}[\-\s]?\d{4}$/;
//   //return str.match(regex);
//   return regex.test(str);
// }
// console.log(telephoneCheck("15555555555"));

// //Cash Register
// checkCashRegister = (price, cash, cid) => {
//     let output = { status: "", change: []}
//     let changeDue = (cash - price);
//   console.log(`ChangeDue: ${changeDue}`);
  
//     const currency = [
//       {name: "ONE HUNDRED", value: 100.00},
//       {name: "TWENTY", value: 20.00},
//       {name: "TEN", value: 10.00},
//       {name: "FIVE", value: 5.00},
//       {name: "ONE", value: 1.00},
//       {name: "QUARTER", value: 0.25},
//       {name: "DIME", value: 0.10},
//       {name: "NICKEL", value: 0.05},
//       {name: "PENNY", value: 0.01},
//     ]
  
//     const register = cid.reduce((accumulator, current) => {
//           accumulator.total += current[1];
//           accumulator[current[0]] = current[1];
//           return accumulator;
//         }, {total: 0});
//   console.log(register.total);
    
//     if (changeDue > register.total) {
//       output.status = "INSUFFICIENT_FUNDS";
//       output.change = [];
//       return output;
//     }
      
//     if (changeDue === register.total) {
//       output.status = "CLOSED";
//       output.change = cid;
//       return output;
//     }
  
//       let changeArr = currency.reduce((accumulator, current) => {
//       let changeGiven = 0;
//       while (register[current.name] > 0 && changeDue >= current.value) {
//         changeDue -= current.value;
//       console.log(`Due: ${changeDue}`);
//         register[current.name] -= current.value;
//         changeGiven += current.value;
//         changeGiven = Math.round(changeGiven * 100)/100;
//         changeDue = Math.round(changeDue * 100)/100;
//     }
//       if (changeGiven > 0) {
//         accumulator.push([current.name, changeGiven]);
//       }
//       return accumulator;
//     }, []);
    
//       if (changeArr.length < 1 || changeDue > 0){
//         output.status = "INSUFFICIENT_FUNDS";
//         output.change = [];
//         return output;
//       } else {
//         output.status = "OPEN";
//         output.change = changeArr;
//         return output;
//       }
//   }
  
//   console.log(checkCashRegister(5.99, 10, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));//{status: "INSUFFICIENT_FUNDS", change: []}
  
//   console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));//{status: "INSUFFICIENT_FUNDS", change: []}
  
//   console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));//{status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}
  
//   console.log(checkCashRegister(19.99, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));//{status: "OPEN", change: [["QUARTER", 0.5]]}