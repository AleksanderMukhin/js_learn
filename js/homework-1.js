// -------1------
// const employees = 8;
// const minSalary = 500;
// const maxSalary = 5000;
// let totalSalary = 1;

// for (let i = 1; i <= employees; i += 1) {
//   const salary = Math.round(
//     Math.random() * (maxSalary - minSalary) + minSalary,
//   )
//   console.log(`Salary employee - ${i} : ${salary}`);

//   totalSalary += salary;
  
// }

// console.log(`Total: `, totalSalary)

// ----------2-------
// const min = 6;
// const max = 13;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//   console.log(i);

//   if (i % 2 !== 0) {
//     console.log('odd: ', i)
//     continue;
//   }  
//       console.log('even: ', i)
//     total += i;
// }

// console.log('total: ', total);

// -------3-------
// let balans = 10000;
// const payment = 2000;

// console.log(`cost: , ${payment}`);

// if (balans > payment) {
//   balans -= payment;
//   console.log('Payment ok')
//   console.log(`Left on the account: ${balans}`)
// } else {
//   console.log('No monye')
// }

// ------4-----

// const totalSpent = 200;
// let payment = 500;
// let discount = 0;

// if (totalSpent < 1000 && totalSpent >= 100) {
//   discount = payment * 0.02;
//   console.log('total:', payment - discount, 'discount 2%')

//   console.log(100 + '30' + 2)
// }

// const text = 'Never forget what you are, for surely the world will not';
// const firstIndex = 'First:' + ' ' + text[0];
// const lastIndex = text[55]
// console.log(firstIndex + '\n' + "Last" + ":" + " " + lastIndex );

// -------task 5-----

// BEGIN (write your solution here)
// let text = 'Never forget what you are, for surely the world will not';

// console.log('First: ',text[0], '\n','Last: ',text[55]);

// const one = 'Naharis';
// const two = 'Mormont';
// const three = 'Sand';

// // BEGIN (write your solution here)
// console.log(one[2] + two[1] + three[3] + two[4] + two[2])

// const number = 10.1234;

// // BEGIN (write your solution here)
// console.log(Math.round(number, 2))

// function sayHi() {
//   console.log("Hello, this is my first function!")
// }
// sayHi();

// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   // Change code below this line
//   const totalPrice = orderedQuantity * pricePerItem;

//   // Change code above this line
//   return totalPrice;
  
// };

// calculateTotalPrice(5, 100);
// calculateTotalPrice(8, 60);

//------task 6-----

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
// if(ordered >= available) {
//   message = "Not enough goods in stock!";
// } else {
//   message = "Order is processed, our manager will contact you.";
// }
//   // Change code above this line
//   return message;
// }
// checkStorage(100, 50);
// checkStorage(100, 130)


//------task 7------

// // function add(a, b, c) {
// //   // Change code below this line
// // return a + b + c;


//   // Change code above this line
// }

// add(2, 5, 8); // 15



// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//   let totalPrice = pricePerDroid * orderedQuantity;
//   if(customerCredits < totalPrice) {
//     message = "Insufficient funds!";
//   } else {
//     customerCredits -= totalPrice;
//     message = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left`
//   }
//   // Change code above this line
//   return message;
// }
// console.log(makeTransaction(3000, 5, 23000));
// makeTransaction(1000, 3, 15000);
// makeTransaction(5000, 10, 8000);

// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end; // Change this line

//   return isInRange;
// }

// console.log (isNumberInRange(10, 30, 17))

// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === "pro" || subType === "vip"; // Change this line
  
//   return canAccessContent;
// }
// console.log(checkIfCanAccessContent("pro"))

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
// if(totalSpent >= 50000) {
//   discount = GOLD_DISCOUNT;
// } else if(totalSpent >= 20000 && totalSpent < 50000) {
//   discount = SILVER_DISCOUNT;
// } else if(totalSpent >= 5000 && totalSpent < 20000) {
//   discount = BRONZE_DISCOUNT;
// } else {
//   discount = BASE_DISCOUNT
// }
//   // Change code above this line
//   return discount;
// }
// console.log(getDiscount(137000))

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line

 
//   message = ordered < available ? "The order is accepted, our manager will contact you" : "Not enough goods in stock!";
//   // Change code above this line
//   return message;
// }
// console.log(checkStorage(100, 50))

// function getShippingCost(country) {
//   let message;
//   // Change code below this line
//   let price;
//   switch(country) {
//     case "China":
//       country = "China";
//       price = 100;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;
//   }
//   // Change code above this line
//   return message;
// }
// console.log(getShippingCost("China"))

// function getSubstring(string, length) {
//   const substring = string.slice(string, length); // Change this line

//   return substring;
// }
// console.log(getSubstring("Hello world", 3))




// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
// if (message.length >= maxLength) {
//   result = `${message.slice(0, maxLength)}...`;
// } else {
//   result = message;
// }
//   /// Change code above this line
//   return result;  
// }
// formatMessage("Curabitur ligula sapien", 16)
// console.log(formatMessage("Curabitur ligula sapien", 16))

// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
// if (message.length > maxLength) {
//   result = `${message.slice(0, maxLength)}...`;
// } else {
//   result = 'message';
// }
//     /// Change code above this line
//   return result;  
// }

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "10";

// for (const character of string) {
//   console.log(Number(character));
// }

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message;

// for (const client of clients) {
//   // На каждой итерации будем проверять совпадает ли элемент массива с
//   // именем клиента. Если совпадает то мы записываем в message сообщение
//   // об успехе и делаем break чтобы не искать дальше
//   if (client === clientNameToFind) {
//     message = "Клиент с таким именем есть в базе данных!";
//     break;
//   }

//   // Если они не совпадают то запишем в message сообщение об отсутствии имени
//   message = "Клиента с таким именем нету в базе данных!";
// }

// console.log(message);



// console.log()
  // console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34

 ////-----task 12----
//   const a = ["Mango"];
//   const b = a;
// console.log(a); // ["Mango"]
// console.log(b); // ["Mango"]

// // Изменим массив, добавив еще один элемент, используя указатель из a
// a.push("Poly");
// console.log(a);
// console.log(b);

// Результат повторяется
// b.push("Ajax");
// console.log(a); // ["Mango", "Poly", "Ajax"]
// console.log(b); 
// //-------task 13-----

// const name = "Mango";
// console.log(name.split(""));
// const message = "JavaScript это интересно";
// console.log(message.split(" "));