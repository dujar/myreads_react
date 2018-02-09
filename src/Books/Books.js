import React from 'react';
import Book from './Book/Book';

const book = props => {
  const { books, handleSelect } = props;
  // console.log("[BOOKS] books:",books, books.length)
  let mappedBooks = null;
  if (books.length > 0) {
    mappedBooks = [...books].map((book, index) => {
      return (
        <li key={book.id}>
          <Book book={book} index={index} handleSelect={handleSelect} />
        </li>
      );
    });
  } else {
    mappedBooks = <div> No books added to this shelf!! </div>;
  }
  // console.log("[BOOKS] mappedbooks:",mappedBooks)
  return <ol className="books-grid">{mappedBooks}</ol>;
};

export default book;
