import React, { Component } from 'react';
import * as BooksAPI from '../Books/BooksAPI';
import GoHome from '../components/GoHome/GoHome'
import InputSearch from '../components/Input/InputSearch'
import BookShelve from '../BookShelves/BookShelve/BookShelve';
// import Link from 'react-router-dom'

class Search extends Component {
  state = {
    query: '',
    books: []
  };
  updateQuery = e => {
    e.preventDefault();
    let booksInit = [];
    this.setState({ query: e.target.value });
    BooksAPI.search(e.target.value).then(books => {
      if (books) {
        booksInit = books.map(book => {
          if (!book.shelf) {
            book.shelf = 'none';
          }
          return book;
        });
        this.setState({ books: booksInit });
      }
    });
    console.log('updating query');
  };

  updateBookShelf = (e, book, index) => {
    e.preventDefault();
    const books = this.state.books.slice();
    book.shelf = e.target.value;
    books.splice(index, 1, book);
    this.setState({ books: book });
    console.log('updating bookshelf');
    // BooksAPI.update(book,e.target.value);
  };

  render() {
    const { books } = this.state;
    const { handleSelect } = this.props
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <GoHome/>
          <div className="search-books-input-wrapper">
          <InputSearch changeHandler={e => this.updateQuery(e)}/>
          </div>
        </div>
        <div className="search-books-results">
          {books.length === 0 && (
            <ul>
              <li> Sorry mate, there are no results found with that query.</li>
              <li> Fire up a new search if not yet done!</li>
            </ul>
          )}
          {books.length > 1 && (
            <div>
              {' '}
              There are currently {books.length} results from your query!

            </div>
          )}
          <ol className="books-grid">
          <BookShelve shelfBooks={books} shelfName="Available books" handleSelect={handleSelect}/>
          </ol>
        </div>
      </div>
    );
  }
}
export default Search;
