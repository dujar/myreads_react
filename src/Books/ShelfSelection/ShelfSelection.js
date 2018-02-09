import React from 'react';

const shelfSelection = props => {
    const {book, index, handleSelect}= props
    // if(!book.shelf){
    //   book.shelf = "none"
    //   console.log("bookshelf-selection:",book)
    // }
  return (
    <select
      value={book.shelf}
      onChange={(event) => handleSelect(event, book, index)}
    >
      <option value="none" disabled>
        Move to...
      </option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  );
};

export default shelfSelection
