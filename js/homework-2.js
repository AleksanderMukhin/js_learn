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
// const purcheses = [12, 55, 78, 123, 90];
// let total = 0;
// for (let i = 0; i < purcheses.length; i += 1) {
//   purcheses[i] = Math.round(purcheses[i] * 1.1);  
//   total += purcheses[i];
// }
// // for (let purchese of purcheses) {
// //   console.log(purchese);
// //   total += purchese;
// // }
// console.log(purcheses);
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


const arrey1 = [12, 15, 18, 20];
const arrey2 = [15, 25, 20];
let total = 0;

const numbers = arrey1.concat(arrey2);
console.log(numbers);

for (const number of numbers) {
  total += number;
}
console.log(total);
