class Book {
  constructor(title, author, year, isActive) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.isActive = isActive;
  }
}

const books = [
  new Book('Java', 'AAA', 2013, true),
  new Book('Python', 'BBB', 2011, false),
  new Book('Javascript', 'CCC', 2020, true),
  new Book('Flutter', 'DDD', 2023, true),
  new Book('Software', 'EEE', 2000, false),
];

class Library {
  constructor(books) {
    this.books = books;
  }

  searchBook(title) {
    return this.books.find((book) => book.title === title);
  }

  lendBook(title) {
    const book = this.searchBook(title);
    if (book && book.isActive === true) {
      book.isActive = false;
      console.log(`The book ${book.title} has been lend.`);
    } else {
      console.log(`The book not found.`);
    }
  }

  returnBook(title) {
    const book = this.searchBook(title);
    if (book && book.isActive === true) {
      book.isActive = true;
      console.log(`The book ${book.title} has been returned.`);
    } else {
      console.log(`The book not found.`);
    }
  }

  showAllBooks() {
    console.log('** Show All Books **');
    this.books.forEach((book) => {
      console.log(
        `- ${book.title} (${book.author}) ${book.year} - ${
          book.isActive ? 'Active' : 'Not active'
        }`
      );
    });
  }

  showStatusBook(isActive) {
    console.log('** Show Status Books **');
    this.books
      .filter((item) => item.isActive === isActive)
      .forEach((book) => {
        console.log(
          `- ${book.title} (${book.author}) ${book.year} - ${
            book.isActive ? 'Active' : 'Not active'
          }`
        );
      });
  }
}

const libraryA = new Library(books);

console.log(libraryA.searchBook('sdhfgs'));
console.log(libraryA.searchBook('Javascript'));

libraryA.lendBook('dhfgaj');
libraryA.lendBook('Flutter');

libraryA.returnBook('dsvjfhas');
libraryA.returnBook('Flutter');

libraryA.showAllBooks();

libraryA.showStatusBook(true);
libraryA.showStatusBook(false);