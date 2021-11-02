function findAuthorById(authors, id) {
  //find first author id that matches the given id
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  //find first book id that matches the book
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  //creat two arrays for return and not return
  const booksNotBorrowed = books.filter((book) => book.borrows[0].returned === true);
  const bookBorrowed = books.filter((book) => book.borrows[0].returned === false);
  return [bookBorrowed, booksNotBorrowed];
}



function getBorrowersForBook(book, accounts) {
  //make an empty array that we will add too
  let borrowersForBooks = [];
  book.borrows.forEach((borrow) => {
    const result = accounts.find((account) => account.id === borrow.id);
    result.returned = borrow.returned
    borrowersForBooks.push(result);
  })
  return borrowersForBooks.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
