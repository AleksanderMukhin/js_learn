//------notes-----
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// const bookTitle = book.title;
// console.log(bookTitle);

// const bookGenres = book.genres[1];
// console.log(bookGenres);

// const bookPrice = book.price;
// console.log(bookPrice);

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   hobbies: ["swiming", "music", "sci-fi"],
// };

// const location = user.location;
// console.log(location); // Объект location

// const country = user.location.country;
// console.log(country);

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// book.rating = 9;
// book.isPublic = false;
// book.genres.push('dram');

// console.log(book.rating); // 9
// console.log(book.isPublic); // false
// console.log(book.genres); // ['historical prose', 'adventures', 'драма']


// const name = "Alex Сибола";
// const age = 25;

// const user = {
//   name: name,
//   age: age,
// };

// console.log(user.name); // "Генри Сибола"
// console.log(user.age);


// const bookShelf = {
//   books: ["The Last Kingdom", "Dream Guardian"],
//   // Это метод объекта
//   getBooks() {
//     console.log("Этот метод будет возвращать все книги - свойство books");
//   },
//   // Это метод объекта
//   addBook(bookName) {
//     console.log("Этот метод будет добавлять новую книгу в свойство books");
//   },
// };

// // Вызовы методов
// bookShelf.getBooks();
// bookShelf.addBook("Новая книга");


// const bookShelf = {
//   books: 'alex',
  
// };
// bookShelf.slider = ['hsdhfg'],
// // Перед точкой стоит объект bookShelf,
// // поэтому при вызове метода, this будет хранить ссылку на него.
// console.log(bookShelf);


// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook("The Mist");
// bookShelf.addBook("Dream Guardian");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
// bookShelf.removeBook("The Mist");
// console.log(bookShelf.getBooks());

// const array = [3, 5, 2, 8, 1];
// let largest = array[0];

// for (let i = 1; i < array.length; i++) {
//   if (array[i] > largest) {
//     largest = array[i];
//   }
// }

// console.log(largest);



//--------TASK REPETA-------
// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },
//   add(product) {
    
//     console.table(this.items);
//     for (const item of this.items) {
//       if (item.name === product.name) {
//         item.quantity += 1;
//         return
//       }
//     }

//     const newProduct = {
//       ...product,
//       quantity: 1,
//     };
//     this.items.push(newProduct);
//   },
//   remove(productName) {
//     const { items } = this;
//     for (let i = 0; i < items.length; i++) {
//       const item = items[i];

//       if (productName === item.name) {
//         console.log(i);

//         items.splice(i, 1);
//       }
//     }
//   },
//   clear() {
//     this.items = [];
//   },
//   countTotalPrice() {
//     let total = 0;
//     const { items } = this;
//     for (const {price, quantity} of items) {
//       total += price * quantity;
//     }
//     return console.log(total);
//   },
// }

// // console.log(cart.getItems());
// cart.add({ name: 'apple', price: 60 });
// cart.add({ name: 'Limon', price: 160 });
// cart.add({ name: 'Frais', price: 30 });
// cart.add({ name: 'Limon', price: 160 });
// cart.add({ name: 'Frais', price: 30 });
// cart.add({ name: 'Frais', price: 30 });
// console.table(cart.getItems());

// // cart.remove('Frais');
// // console.table(cart.getItems());

// cart.countTotalPrice();
// console.table(cart.getItems());

// cart.clear();
// console.table(cart.getItems());
//------- END REPETA-------

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   // console.log(key);
//   // Значение свойства с таким ключом
//   console.log(book[key]);
// }

//-------task 10----
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
  
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for(const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);


//-----task 11-----
// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
// if(apartment.hasOwnProperty(key)) {
//     keys.push(key);
//   values.push(apartment[key]);
// }
//   // Change code above this line
// }


//-----task 12------
// function countProps(object) {
//   let propCount = 0;
//   for (const prop in object) {
//     if (object.hasOwnProperty(prop)) {
//       propCount += 1;
//     }
//   }
//   return propCount;
// }

// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // Output: 3


//-----task 13-----
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for( let key of keys ) {
//   values.push(apartment[key])
// }
// console.log(keys)
// console.log(values);


//-----task 14----
// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
// let keys = Object.keys(object)
//   for (const key of keys) {
//       propCount += 1;
    
//   }

//   return propCount;
//   // Change code above this line
// }

// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));


//-----task 15-----
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);


//------task 16------
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
// const employee = Object.keys(salaries);
//   const salarys = Object.values(salaries);
//   for(let salary of salarys) {
//     totalSalary += salary;
//   }
//   // Change code above this line
//   return totalSalary;
// }
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
// ];

// for (const book of books) {
//   // Объект книги
//   console.log(book);
//   // Название
//   console.log(book.title);
  // Автор
  // console.log(book.author);
  // Рейтинг
  // console.log(book.rating);
// }


//----task17-----
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for(const color of colors) {
//   rgbColors.push(color.rgb);
//   hexColors.push(color.hex);
// }
// console.log(hexColors);
// console.log(rgbColors);


//----task 18----
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//   }
// }

// return null;
//   // Change code above this line
// }
// console.log(getProductPrice("Radar"));


//-----task 19------
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   const values = [];
  
//   for (let product of products) {
//     console.log(product)
//     const key = Object.keys(product);
//     if (key.includes(propName)) {
//     values.push(product[propName])
//     }    
// }  
// return values;
//   // Change code above this line
// }
// console.log(getAllPropValues("name"));


//----way 2 task 19----
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   let values = [];
//     for (const product of products) {
//         if (propName in product) {
//             values.push(product[propName]);
//         }
//     }
//     return values;
//   // Change code above this line
// }
// console.log(getAllPropValues("name"));


//-----task 20----
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
// let total = 0;
//   for (const product of products) {
//     if (product.name === productName) {
//       total = product.price * product.quantity;       
//     }     
//   }  
//   return total;

//   // Пиши код выше этой строки
// }
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Grip"))


//-----task 24-----
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const {hex, rgb} of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }
// console.log(hexColors)


//----task 26----
// function calculateMeanTemperature(forecast) {
  
//     const {today: { low: todayLow, high: todayHigh}, tomorrow: {low: tomorrowLow, high: tomorrowHigh}} = forecast;
  

//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
// console.log(calculateMeanTemperature({ today: { low: 28, high: 32 }, tomorrow: { low: 25, high: 29 } }));


//-----task 27-----
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);


//-----task 28----
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);


// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);


//----task 29------
// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = {...defaultSettings, ...overrideSettings};
// console.log(finalSettings);


//-----task 30----
// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
// return {category: "General", priority: "Normal", ...data, completed: false}
//   // Change code above this line
// }
// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }))


//----task 31----
// function add(...args) {
//   let total = 0;
//   for (let arg of args) {
//     total += arg;
//   }
//   return total;
// }
// console.log(add(12, 4, 11, 48));


//-----task 33-----
// Change code below this line
// function findMatches(arrey1, ...arrey2) {
//   const matches = []; // Don't change this line
// for(let arrey of arrey1) {

//   if (arrey2.includes(arrey)) {
    
//     matches.push(arrey)
//   }
// }
//   // Change code above this line
//   return matches;
// }
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));


//-----task 34-----
// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   }
//   // Change code above this line
// };
// console.log(bookShelf.addBook("Haze"));
// console.log(bookShelf.removeBook("Red sunset"));


//------task 35-----
// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     const index = this.books.indexOf(oldName);
//     return this.books.splice(index, 1, newName)


//     // Change code above this line
//   },
// };
// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
// console.log(bookShelf.books);


//-------task 37------
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
// getPotions() {
//   return this.potions;
// }
//   // Change code above this line
// };
// console.log(atTheOldToad.getPotions());


//-----task 38-----
const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  addPotion(potionName) {
    // Change code below this line
return this.potions.splice(this.potions.length, 0, potionName);


    // Change code above this line
  },
};
console.log(atTheOldToad.addPotion("Invisibility"));
console.log(atTheOldToad.potions)