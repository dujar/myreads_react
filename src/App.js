import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Search from './Search/Search';
import GoSearch from './components/GoSearch/GoSearch';
import BookShelves from './BookShelves/BookShelves';
import WrongPage from './WrongPage/WrongPage';

import * as BooksAPI from './Books/BooksAPI';
import './App.css';
class BooksApp extends React.Component {
  state = {
    shelves: {
      none: [],
      wantToRead: [],
      read: [],
      currentlyReading: []
    }
  };

  handleSelect = (e, book) => {
    // console.log("e:",e.target.value,"book:",book,"index:",index)
    let id = book.id;
    let oldShelfName = book.shelf;
    let newShelfName = e.target.value;
    BooksAPI.update(book, e.target.value).catch(err => {
      console.log(err);
      return;
    });
    // using the fastest way I found from your recommendation as using the react add/on helper will be for next project. Thanks
    let shelves = JSON.parse(JSON.stringify(this.state.shelves));
    // console.log('old shelves:', shelves);
    let shelf = shelves[oldShelfName];
    let updatedShelf = []
    if(shelf) {
     updatedShelf = shelf.filter(book => book.id !== id);
    }
    // console.log(updatedShelf);
    shelves[oldShelfName] = updatedShelf;
    shelf = shelves[newShelfName];
    book.shelf = newShelfName;
    let newShelf;
    if (!shelf) {
      newShelf = shelf.push(book);
    } else {
      newShelf = shelf.concat(book);
    }
    shelves[newShelfName] = newShelf;
    // console.log('new shelves:', shelves);
    this.setState({ shelves: shelves });
  };

  componentDidMount = () => {
    BooksAPI.getAll().then(books => {
      let none = books.filter(book => book.shelf === 'none');
      // console.log('none:', none);
      let read = books.filter(book => book.shelf === 'read');
      // console.log('read:', read);
      let wantToRead = books.filter(book => book.shelf === 'wantToRead');
      // console.log('want to read:', wantToRead);
      let currentlyReading = books.filter(
        book => book.shelf === 'currentlyReading'
      );
      // console.log('currenlty reading:', currentlyReading);
      let shelves = {
        none: none,
        wantToRead: wantToRead,
        read: read,
        currentlyReading: currentlyReading
      };
      return this.setState({ shelves: shelves });
    });
  };

  render() {
    const { shelves } = this.state;
    // console.log('[APPS] shelves:', shelves);
    return (
      <div className="app">
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <div>
                <GoSearch />
                <BookShelves
                  handleSelect={this.handleSelect}
                  bookShelves={shelves}
                />
              </div>
            )}
          />

          <Route
            path="/search"
            exact
            render={() => (
              <Search handleSelect={this.handleSelect} bookShelves={shelves} />
            )}
          />
          <Route component={WrongPage} />
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
