import React from 'react';
import Books from '../../Books/Books';
import propTypes from 'prop-types'

const bookShelve = props => {
  const { shelfName, shelfBooks, handleSelect } = props;

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfName}</h2>
      <div className="bookshelf-books">
          <Books books={shelfBooks} handleSelect={handleSelect}/>
      </div>
    </div>
  );
};

bookShelve.propTypes = {
  shelfBooks: propTypes.array
}

export default bookShelve
