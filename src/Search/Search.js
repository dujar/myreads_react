import React, { Component } from 'react';
import * as BooksAPI from '../Books/BooksAPI';
import GoHome from '../components/GoHome/GoHome';
import InputSearch from '../components/Input/InputSearch';
import BookShelve from '../BookShelves/BookShelve/BookShelve';
// import Link from 'react-router-dom'

class Search extends Component {
  state = {
    query: '',
    books: []
  };
  updateQuery = e => {
    this.setState({ query: e.target.value });
    if (e.target.value) {
      BooksAPI.search(e.target.value).then(books => {
          this.setState({ books: books });
      });
    } else {
      this.setState({ books: [] });
    }
    // console.log('updating query');
  };


  resetQuery = () => {
    let query = {
      target: {
        value: ''
      }
    };

    // console.log("query: ",query)
    this.updateQuery(query);
  };

  render() {
    const { books } = this.state;
    const { handleSelect, bookShelves } = this.props;

    let spreadBookShelves = [
      ...bookShelves.read,
      ...bookShelves.wantToRead,
      ...bookShelves.currentlyReading
    ];

    // console.log('[SEARCH: spreadbookshelves', spreadBookShelves);
    let filteredBooks = [];
    if (books.length > 1 ){
      filteredBooks = books
    }

    if( books.length > 1 && spreadBookShelves.length > 1) {
       filteredBooks = books.map(bookS => {
        let book = spreadBookShelves.filter(book => bookS.id === book.id)
        console.log("book after filter",book)
        if(book.length >0){return book} else {return bookS}
        }
      )
      .reduce(function(a, b) {
      console.log(a)
        return a.concat(b)
      },[]);
    }

    console.log('[filteredBooks:[search]:', filteredBooks);
    // console.log('[SEARCH] books:', books);

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <GoHome />
          <div className="search-books-input-wrapper">
            <InputSearch
            changeHandler={e => this.updateQuery(e)}
            query={this.state.query} />
          </div>
        </div>
        <div className="search-books-results">
          {books.length === 0 && this.state.query.length > 0 && (
            <ul>
              <li> Sorry mate, there are no results found with that query.</li>
              <li> Fire up a new search if not yet done!</li>
            </ul>
          )}
          {books.length > 1 && (
            <div>
              <div>
                There are currently {books.length} results from your query!
              </div>
              <div onClick={this.resetQuery}>
                <strong>click here to restart!</strong>
              </div>
            </div>
          )}
          <ol className="books-grid">
            <BookShelve
              shelfBooks={filteredBooks}
              shelfName="Available books"
              handleSelect={handleSelect}
            />
          </ol>
        </div>
      </div>
    );
  }
}
export default Search;
