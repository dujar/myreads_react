import React from 'react';
import Books from '../../Books/Books';
import propTypes from 'prop-types';

class BookShelve extends React.Component {
  state = {
    show: true
  };

  render() {
    const { shelfName, shelfBooks, handleSelect } = this.props;

    if (this.state.show) {
      return (
        <div
          className="bookshelf"
          onClick={() => this.setState({ show: false })}
        >
          <h2 className="bookshelf-title">{shelfName}</h2>
          <div className="bookshelf-books">
            <Books books={shelfBooks} handleSelect={handleSelect} />
          </div>
        </div>
      );
    } else {
      return (
        <div
          className="bookshelf"
          onClick={() => this.setState({ show: true })}
        >
          <h2 className="bookshelf-title">{shelfName}</h2>
          <div className="bookshelf-books">
            <Books books={shelfBooks} handleSelect={handleSelect} />
          </div>
        </div>
      );
    }
  }
}

BookShelve.propTypes = {
  shelfBooks: propTypes.array
};

export default BookShelve;
