import React from 'react';
import Books from '../../Books/Books';
import propTypes from 'prop-types';

class BookShelve extends React.Component {

  render() {
    const { shelfName, shelfBooks, handleSelect } = this.props;

      return (
        <div
          className="bookshelf"
        >
          <h2 className="bookshelf-title">{shelfName}</h2>
          <div className="bookshelf-books">
            <Books books={shelfBooks} handleSelect={handleSelect} />
          </div>
        </div>
      );
    }
  }

BookShelve.propTypes = {
  shelfBooks: propTypes.array
};

export default BookShelve;
