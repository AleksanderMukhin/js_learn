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
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = [];
// Change code below this line
const keys = Object.keys(apartment);
for( let key of keys ) {
  values.push(apartment[key])
}
console.log(keys)
console.log(values)