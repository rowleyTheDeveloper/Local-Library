function findAccountById(accounts, id) {
  //using find method
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
 // using sort methods
 return accounts.sort((accountA, accountB) => {
   const lastNameA = accountA.name.last;
   const lastNameB = accountB.name.last;
   return lastNameA.toLowerCase() < lastNameB.toLowerCase() ? -1: 1;
 });
}

function getTotalNumberOfBorrows(account, books) {
const result = books.reduce((acc, book) => {
  let count = book.borrows.filter((b) => b.id === account.id).length
  acc += count;
  return acc;
}, 0) 
return result;
}

function getBooksPossessedByAccount(account, books, authors) {
 const accountId = account.id;
 const booksBorrowed  = books.filter((book) => {
   return book.borrows[0].id === accountId && !book.borrows[0].returned
 });
 booksBorrowed.forEach((book) => {
   const foundAuthor = authors.find((author) => author.id === book.authorId);
   book.author = foundAuthor;
 })
 return booksBorrowed;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
