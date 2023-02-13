//-------teory--------
// const doMath = function (a, b, callback) {
//   const result = callback(a, b);

//   console.log(result);
// };

// const add = function (x, y) {
//   return x + y;
// };

// //---way 1---
// doMath(14, 12, function (c, z) {
//   return c - z;
// });

// //----way 2----
// doMath(2, 3, add);
//---------------------------------------------------------


// const filter = function (arrey, test) {
//   const filtredArrey = [];

//   for (const element of arrey) {
//     // console.log(element);
    
//     const passed = test(element);

//     if (passed) {
//       filtredArrey.push(element);
//     }
//   }

//   return filtredArrey;
// };

// const callback1 = function (value) {
//   return value >= 3;
// };

// const callback2 = function (value) {
//   return value <= 4;
// } 

// const r1 = filter([1, 2, 3, 4, 5], callback1)
// console.log(r1);

// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 9, 8], callback2);
// console.log(r2);

// const fruits = [
//   { name: 'apple', quantity: 200, isFresh: true },
//   { name: 'bananas', quantity: 150, isFresh: false },
//   { name: 'grapes', quantity: 100, isFresh: true },
// ];

// const getFruitsWithQuantity = function (fruit) {
//   return fruit.quantity >= 150;
// };

// const r3 = filter(fruits, getFruitsWithQuantity);
// console.log(r3);
//--------------------------------------------------------


//-----zamukanie-----
// const makeDish = function (sheffName, dish) {
//   console.log(`${sheffName} cooks ${dish}`);
// };

// makeDish('Mango', 'pie');
// makeDish('Mango', 'omelette');
// makeDish('Mango', 'tea');

// makeDish('Poly', 'cutlets');
// makeDish('Poly', 'soup');
// makeDish('Poly', 'coffe');

//--------closure
// const makeSheff = function (name) {
//   const makeDish = function (dish) {
//     console.log((`${name} cooks ${dish}`));
//   };
//   return makeDish;
// };

// const mango = makeSheff('Mango');
// mango('cutlets');
// mango('pie');

// const alex = makeSheff('Alex');
// alex('coffe');
//--------------------------------------------

// const floatingPoint = 3.45787869;
// const someInt = Math.round(floatingPoint);
// const withDecimals = Number(floatingPoint.toFixed(2));


// const rounder = function (places) {
//   return function (number) {
//     return Number(number.toFixed(places))
//   }
// }

// const rounder2 = rounder(2);

// console.log(rounder2(2.3441));
// console.dir(rounder2);
//----------------------------------------------


// const add = function (a, b, c) {
//   console.log(a, b, c);
//   return a + b + c;
// };

// const addArrow = (a, b, c) => a + b + c;

// console.log(add(5, 10, 15));
// console.log(addArrow(6, 11, 16));
//--------------------------------------------------


// const add = (...args) => {
//   console.log(args);
// };

// add( 1, 2, 3, 4, 5, 5);
// const greet = (name) => console.log(`Добро пожаловать ${name}.`);


// // Функция высшего порядка
// const registerGuest = (name, callback) => {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// registerGuest("Mango", greet);


//-------task 2-----
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }
// console.log(makeMessage("Royal Grand", deliverPizza));



//---------- Task 3-------
// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });


//--------task 4----------
// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     if (!this.pizzas.includes(pizzaName)) {
//       return onError(pizzaName);
      
//     }
    
//   return onSuccess(pizzaName);
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! There is no pizza with a name ${error} in the assortment.`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError))


//--------task 5---------
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//   })

//   // Change code above this line
//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));


//---------task 6----------
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   })

//   // Change code above this line
//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));


//---------task 7----------
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   firstArray.forEach((number) => {
//     if (secondArray.includes(number)) {
//       commonElements.push(number);
//     }
//   }) 

//   return commonElements;
//   // Change code above this line
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));



//--------task map-------
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Поли", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Киви", score: 94 },
//   { name: "Хьюстон", score: 64 },
// ];

// const names = students.map((student) => {
//   return {
//     ...student,
//     score: student.score * 1.2
//   }
// });
// console.log(names);

// const toUpdatedStudent = 'Киви';

//--------way 1--------
// const updatedStudents = students.map(student => {
//   if (student.name === toUpdatedStudent) {
//     return {
//       ...student, score: student.score + 100
//     }
//   }
//   return student;
// });

//------way 2------
// const updatedStudents = students.map(student =>
//   student.name === toUpdatedStudent
//     ? {...student, score: student.score + 100,}
//     : student,  
// );

// console.log(updatedStudents);
//-------------------------------------------


