import React from 'react';
import ShelfSelection from '../ShelfSelection/ShelfSelection';

const book = props => {
  const { book, index, handleSelect } = props;
  // console.log('[BOOK] book:', book);
  if(!book.shelf){
    book.shelf = "none"
  }
  let url = book.imageLinks.smallThumbnail
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${url || "http://via.placeholder.com/128x193?text=No%20Cover"})`
          }}
        />
        <div className="book-shelf-changer">
          <ShelfSelection
            book={book}
            index={index}
            handleSelect={handleSelect}
          />
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors? book.authors.join(', '): 'unknown as of now'}</div>
    </div>
  );
};

export default book;
