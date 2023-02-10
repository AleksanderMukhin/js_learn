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