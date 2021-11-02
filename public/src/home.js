function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  const booksBorrowed = books.filter((book) => book.borrows[0].returned === false);
  return booksBorrowed.length;
}


function topFive(listOfFavs) {
  listOfFavs.sort((itemA, itemB) => itemB.count - itemA.count);
  if( listOfFavs.length > 5) {
    for (let i = listOfFavs.length - 1; i > 4; i--) {
      listOfFavs.pop();
    }
  }
  return listOfFavs;
}
function getMostCommonGenres(books) {
  const bookGenres = books.reduce((acc, book) => {
    const name = book.genre;
    const genreName = acc.find((bookGenre) => bookGenre.name === name);
    genreName === undefined ? acc.push({name, count: 1}) : genreName.count++;
    return acc;
  }, [])
  return topFive(bookGenres);
}

function getMostPopularBooks(books) {
  const nameAndCount = books.map((book) => {return{name: book.title, count: book.borrows.length}});
  return topFive(nameAndCount);
}

function getMostPopularAuthors(books, authors) {
  const popularAuthors = [];
  authors.forEach((author) => {
    let count = 0;
    books.reduce((acc, book) => {
      if( book.authorId === author.id) acc +=book.borrows.length;
      count = acc;
      return acc;
    }, count);
    //shorthand
    popularAuthors.push({name: `${author.name.first} ${author.name.last}`, count});
  })
  return topFive(popularAuthors);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
