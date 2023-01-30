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

const friends = ['Kiwi', 'Ajax', 'Poly', 'Paul'];
// for (let friend of friends) {
//   friend += '-1'
//   console.log(friend)
// }
for (let i = 0; i < friends.length; i += 1) {
  friends[i] += ' - 1';
  console.log(friends[i]);
}