// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
//   // Getter
//   get area() {
//     return this.calcArea();
//   }
//   // Method
//   calcArea() {
//     return this.height * this.width;
//   }
// }
//
// const square = new Rectangle(10, 10);
//

export default class Library {
  constructor(books = []){
    this.books = books;
  }

  bookCount() {
    return this.books.length;
  }

  addBook(newBook) {
     this.books.push(newBook);
  }

  addBooks(newBooks) {
     newBooks.forEach(book => this.books.push(book));
  }

  printInventory() {
    this.books.forEach((book) => {
        const x = {title: book.title, author: book.author};
        const {title, author} = x;
        console.log(title);
        console.log(author);
        // console.log(`${book.title} by ${book.author}`);
      })
  }




}


// console.log(square.area); // 100

// const Library = function (books = []) {
//   this.books = books;
// };
//
// Library.prototype.bookCount = function () {
//   return this.books.length;
// };
//
// Library.prototype.addBook = function (newBook) {
//   this.books.push(newBook);
// };
//
// Library.prototype.addBooks = function (newBooks) {
//   newBooks.forEach(book => this.books.push(book));
// };
//
// Library.prototype.printInventory = function () {
//   this.books.forEach((book) => {
//     console.log(`${book.title} by ${book.author}`);
//   });
// };



// module.exports = Library;
