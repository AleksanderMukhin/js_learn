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


const filter = function (arrey, test) {
  const filtredArrey = [];

  for (const element of arrey) {
    // console.log(element);
    
    const passed = test(element);
    if (passed) {
      filtredArrey.push(element);
    }
  }

  return filtredArrey;
};

const callback1 = function (value) {
  return value >= 3;
};

const callback2 = function (value) {
  return value <= 4;
} 

const r1 = filter([1, 2, 3, 4, 5], callback1)
console.log(r1);

const r2 = filter([1, 2, 3, 4, 5, 6, 7, 9, 8], callback2);
console.log(r2);

const fruits = [
  { name: 'apple', quantity: 200, isFresh: true },
  { name: 'bananas', quantity: 150, isFresh: false },
  { name: 'grapes', quantity: 100, isFresh: true },
];

const getFruitsWithQuantity = function (fruit) {
  return fruit.quantity >= 150;
};

const r3 = filter(fruits, getFruitsWithQuantity);
console.log(r3);