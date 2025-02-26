function Book(
  title,
  numOfChapters,
  author,
  numOfPages,
  publisher,
  numOfCopies
) {
  this.title = title;
  this.numOfChapters = numOfChapters;
  this.author = author;
  this.numOfPages = numOfPages;
  this.publisher = publisher;
  this.numOfCopies = numOfCopies;

  Book.CreatedBooksCount++;
}

Book.CreatedBooksCount = 0;

Book.getCreatedBooksCount = function () {
  return this.CreatedBooksCount;
};

function Box(height, width, length, material) {
  this.height = height;
  this.width = width;
  this.length = length;
  this.material = material;

  this.content = [];
}

Box.prototype.addBook = function (newBook) {
  this.content.push(newBook);
};

Box.prototype.countBooks = function () {
  let booksCount = 0;
  for (const book of this.content) {
    booksCount += book.numOfCopies;
  }
  return booksCount;
};

Box.prototype.deleteBook = function (bookTitle) {
  const foundIndex = this.content.findIndex((book) => book.title === bookTitle);
  if (foundIndex !== -1) {
    this.content.splice(foundIndex, 1);
  }
};
