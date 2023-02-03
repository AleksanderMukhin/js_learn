// //----theory---
// const words = ["JavaScript", "это", "интересно"];
// console.log(words.join("")); // "JavaScriptэтоинтересно"
// console.log(words.join(" ")); // "JavaScript это интересно"
// console.log(words.join("-")); 


// // const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// // console.log(clients.indexOf("Poly")); // 2
// // console.log(clients.indexOf("Mango"))


// // const fruit = "apple";
// // if (fruit === "apple" || fruit === "strawberry") {
// //   console.log("It is a red fruit!");
// // }


// // Выносим варианты в массив
// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherry";
// // Проверяем наличие элемента
// const hasFruit = redFruits.includes(fruit);
// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }


// // const numbers = [];

// // numbers.push(1);
// // console.log(numbers); // [1]

// // numbers.push('R');
// // console.log(numbers); // [1, 2]

// // numbers.push(3);
// // console.log(numbers); // [1, 2, 3]

// // numbers.push(4);
// // console.log(numbers); // [1, 2, 3, 4]

// // numbers.push(5);
// // console.log(numbers); 


// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.pop()); //  5
// console.log(numbers); // [1, 2, 3, 4]

// console.log(numbers.pop()); //  4
// console.log(numbers); // [1, 2, 3]

// console.log(numbers.pop()); //  3
// console.log(numbers); // [1, 2]

// console.log(numbers.pop()); //  2
// console.log(numbers); // [1]

// console.log(numbers.pop()); //  1
// console.log(numbers); 


// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(0, 4));


// const scores = [1, 2, 3, 4, 5];
// // Удаляем три элемента массива, начиная с первого элемента (индекс 0)
// const deletedScores = scores.splice(0, 3);
// // Теперь массив scores содержит два элемента
// console.log(scores); // [4, 5]
// // А массив deletedScores содержит три удаленных элемента
// console.log(deletedScores);
// const colors = ["red", "green", "blue"];
// colors.splice(3, 0, "purple", "pink");
// console.log(colors);


// const languages = ["C", "C++", "Java", "JavaScript"];
// // Заменяем элемент с индексом 1 на новый
// languages.splice(1, 1, "Python");
// console.log(languages); // ["C", "Python", "Java", "JavaScript"]
// // Заменяем один элемент (с индексом 2) на несколько
// languages.splice(2, 1, "C#", "Swift", "Go");
// console.log(languages);


// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Monkong", "Singu"];
// const allClientsWithOldFirst = oldClients.concat(newClients);
// console.log(allClientsWithOldFirst); // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]
// const allClientsWithNewFirst = newClients.concat(oldClients);
// console.log(allClientsWithNewFirst); // ["Monkong", "Singu", "Mango", "Ajax", "Poly", "Kiwi"]
// console.log(oldClients); // ["Mango", "Ajax", "Poly", "Kiwi"]
// console.log(newClients); 


// // function multiply() {
// //   // Тело функции
// //   console.log("Это лог при вызове функции multiply");
// // }
// // multiply();
// // multiply(); 
// // multiply(); 


// function multiply(x, y, z) {
//   console.log(`Результат умножения равен ${x * y * z}`);
// }
// multiply(1, 2, 3);


// const friends = ['Kiwi', 'Ajax', 'Poly', 'Paul'];
// friends[1] = 'Joi';
// console.log(friends[1]);
// console.log(friends);


// const a = [1, 2, 3];
// const b = a;

// console.log(a);
// console.log(b);

// a[0] = 500;
// console.log('a', a);
// console.log('b', b);

// const friends = ['Kiwi', 'Ajax', 'Poly', 'Paul'];
// // for (let friend of friends) {
// //   friend += '-1'
// //   console.log(friend)
// // }
// for (let i = 0; i < friends.length; i += 1) {
//   friends[i] += ' - 1';
//   console.log(friends[i]);
// }

//------task practice-----
// const purcheses = function (items) {
//   let total = 0;
//   for (const item of items) {
//     total += item;
//   }
//   return total;
// }
// console.log()

// for (let i = 0; i < purcheses.length; i += 1) {
//   purcheses[i] = Math.round(purcheses[i] * 1.1);  
//   total += purcheses[i];
// }
// for (let purchese of purcheses) {
//   console.log(purchese);
//   total += purchese;
// }
// let items = [12, 55, 78, 123, 90];
// console.log(purcheses(items));
// console.log(total);


// EVEN NUMBERS-----
// const numbers = [1, 2, 3, 8, 11, 9, 12, 55, 78, 123, 90];
// let totalEven = 0;

// //first way
// // for (let i = 0; i < numbers.length; i += 1) {
// //   console.log(numbers[i])
// //   if (numbers[i] % 2 === 0) {
// //     console.log('Even : ')
// //     totalEven += numbers[i]
// //     console.log(totalEven)
// //   }
// // }
// // console.log('Total:', totalEven);

// //second way
// for (const number of numbers) {
  
   
//   if (number % 2 === 0) {
//     console.log(number);
//     totalEven += number;    
//   }
  
// }
// console.log('total: ', totalEven);


//task find login
// const logins = ['svsdkjkdj', 'hjdhkisdnz', 'jdjhfjhgbb', 'jhdfjhjh'];
// const loginToFind = 'hjdhkisdnz';
// let message = `Login: ${loginToFind} is not finded`;

// // for (let i = 0; i < logins.length; i += 1) {
// //   const login = logins[i];
// //   // console.log(login);
// //   if (login === loginToFind) {
// //     message = `Login "${loginToFind}" is finded`;
// //     break;
// //   }
// //   message = 'Login is not finded';  
// // }
// //----seconde way---
// // for (const login of logins) {
// //   if (login === loginToFind) {
// //     message = `Login: "${loginToFind}" is finded`;
// //   }
// // }
// // console.log(message);
// //third way
// message = logins.includes(loginToFind) ? `Login: ${loginToFind} is finded` : `Login is not find`;
// console.log(message)


//task min number---
// const numbers = [12, 34, 55, 81, 22, 33];
// let minNumber = numbers[0];

// for (const number of numbers) {
//   if (number < minNumber) {
//     minNumber = number;
//   }
// }
// console.log("Min number: ", minNumber);


// const friends = ['Kiwi', 'Ajax', 'Troja', 'Ahiles'];
// // let string = '';
// // for (const friend of friends) {
// //   string += friend + ',';
// // }
// // string = string.slice(0, string.length - 1);

// const string = friends.join(", ")
// console.log(string);
// const title = "Rdhjhd hfhjf hsdfhsk";
// const preTitle = title.split(' ').join('-');
// console.log(preTitle)


// const arrey1 = [12, 15, 18, 20];
// const arrey2 = [15, 25, 20];
// let total = 0;

// const numbers = arrey1.concat(arrey2);
// console.log(numbers);

// for (const number of numbers) {
//   total += number;
// }
// console.log(total);


// function multiply() {
//   let total = 1;

//   for (const argument of arguments) {
//     total *= argument;
//   }

//   return total;
// }

// console.log(multiply(1, 2, 3)); //  6
// console.log(multiply(1, 2, 3, 4)); //  24
// console.log(multiply(1, 2, 3, 4, 5));



//------DELETE AND DO AND RENAME CARDS------
// const cards = ['Card-1', 'Card-2', 'Card-3', 'Card-4'];
// console.table(cards);
// //--DELETE ON INDEX
// const cardToRemove = 'Card-2';
// let index = cards.indexOf(cardToRemove);
// console.log(index);
// cards.splice(index, 1);
// console.table(cards);

// //-------insert card----
// const cardToInsert = 'Card-6';
// cards.splice(index, 0, cardToInsert);
// console.table(cards);

// //------- update card---
// const cardToUpdate = 'Card-4';
// index = cards.indexOf(cardToUpdate);
// console.log(index);
// cards.splice(index, 1, 'New card-4');
// console.table(cards);


// const add = function (x, y) {
//   console.log('Show the function');
//   return x + y;
// }
// console.log(add(1, 5));


//--------HOMEWORK MODULE 2-----
// //TASK--1
// function checkAge(age) {

//   if (age >= 18) { // Change this line
//     return "You are an adult";
//   }

//   return "You are a minor";
// }
// checkAge(20);


// //task--2
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line
//   if (password === ADMIN_PASSWORD) {
    
//     return "Welcome!";
//   }  

//   return "Access denied, wrong password!";
//   // Change code above this line
// }
// console.log(checkPassword("mangohackzor"));


// //-------task 3------
// function checkStorage(available, ordered) {
//   // Change code below this line
//   if (ordered === 0) {
//     return "Your order is empty!";
//   } 
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
//     return "The order is accepted, our manager will contact you";
//   // Change code above this line
// }
// console.log(checkStorage(100, 50));


// //-----task 4----
// // Change code below this line
// // const fruits = ['apple', 'plum', 'pear', 'orange'];



// //------task 5----
// const fruits = ["apple", "plum", "pear", "orange"];

// // Change code below this line
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];


// //------task 6-----
// // const fruits = ["apple", "plum", "pear", "orange"];

// // Write your code under this line
// fruits[1] = "peach";
// fruits[3] = "banana";


// //---task 7----
// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const fruitsArrayLength = fruits.length;


// //------task 8----
// const fruits = ["apple", "peach", "pear", "banana"];
// // Change code below this line
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];


// //------task 9-----
// function getExtremeElements(array) {
//   // Change code below this line
  
// return [array[0], array[array.length - 1]];
//   // Change code above this line
// }
// getExtremeElements([1, 2, 3, 4, 5]);


//------task 10----
// function splitMessage(message, delimiter) {
//   let words;
//   // Change code below this line
//   return words = message.split(delimiter);
//   // Change code above this line
  
// }
// splitMessage("Mango hurries to the train", " ")
// console.log(splitMessage("Mango hurries to the train", " "));
// console.log(splitMessage("Mango", ""));
// console.log(splitMessage("best_for_week", "_"));


// //----task 11----
// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
// // const price =  message.split(' ').length * pricePerWord;

//   return message.split(' ').length * pricePerWord;;
//    // Change code above this line
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));


// //-----task 12------
// function makeStringFromArray(array, delimiter) {
//   let string;
//   // Change code below this line
// string = array.join(delimiter);
//   // Change code above this line
//   return string;
// }
// console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));

// console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));


//------task 13-----
// function slugify(title) {
//   // Change code below this line

//   return title.split(' ').join('-').toLowerCase();

//   // Change code above this line
// }
// console.log(slugify("Arrays for begginers"));


// //-----task 14 -------
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);
// console.log(firstTwoEls);
// console.log(lastThreeEls);

// //-----task 15----
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line


//-----task 16----
// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
  
//   return firstArray.concat(secondArray).slice(0, maxLength);


//     // Change code above this line
//   }

// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));


// //---task 17----
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Change this line
//   console.log(i);
// }


//----task 18----
// function calculateTotal(number) {
//  // Change code below this line
//   let total = 0;
//   for (let i = 0; i <= number; i += 1) {
//     total += i;
    
//   }
//   return total;
  
//   // Change code above this line
// }
// console.log(calculateTotal(3));
// calculateTotal(3);


// //-----task 19----
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }


// //----task 20-----
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
// for(let item of order) {
//   total += item;
// }
//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));


//----task 21---
//----way 1----
// function findLongestWord(string) {
//   // Change code below this line
// return string.split(' ').reduce((a, b) => 
// (b.length > a.length) ? b : a);    
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
  // Change code above this line
//----way 2----
// function findLongestWord(string) {
//   // Change code below this line
//   const array = string.split(" ");
//   let longer = array[0];
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i].length > longer.length) {
//       longer = array[i]
//     }
//   }
//   return longer;

//   // Change code above this line
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));


//----task 22----
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
// for(let i = min; i <= max; i += 1) {
//   numbers.push(i);
// }
  
//   // Change code above this line
//   return numbers;
// }
// console.log(createArrayOfNumbers(1, 3))


//----task 23----
// function filterArray(numbers, value) {
//    // Change code below this line
//   const bigNumbers = [];
//   for (let number of numbers) {
//     if (number > value) {
//       bigNumbers.push(number)
//     }     
//   }
// return bigNumbers;
//   // Change code above this line
// }
// // console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([12, 24, 8, 41, 76], 38));


// //-----task 24-----
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit); // Change this line
// }


// //-----task 25-----
// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const result = [];
//   for (let element of array1) {
//     if (array2.includes(element)) {
//       result.push(element)
//     }
//   }
//   return result;


//  // Change code above this line
// }
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));


// //-----task 26------
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (const i of order) {
//     total += i;
//   }

//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));


// //----task 27----
// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (let i of numbers) {
//     const number = i;

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }
// console.log(filterArray([12, 24, 8, 41, 76], 38));


// //-----task 29------
// function getEvenNumbers(start, end) {
//    // Change code below this line
//   const number = [];
//   for(let i = start; i <= end; i += 1) {
//     if(i % 2 === 0) {      
//       number.push(i)
//     }    
//   }
// return number;

//     // Change code above this line
//   }
// console.log(getEvenNumbers(3, 11));


// //------task 30-----
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }



// //-----task 31---
// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
      
//     }
//   }
//   return number;
//   // Change code above this line
// }


// //-----task 32-----
// function includes(array, value) {
//   // Change code below this line
// for(let word of array) {
//   if (word === value) {
//     return true;
//   }
// }
//   return false;
//   // Change code above this line
// }
// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17))