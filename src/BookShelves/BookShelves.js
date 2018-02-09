import React from 'react'
import BookShelve from './BookShelve/BookShelve'

const bookShelves = (props) => {
const {bookShelves, handleSelect} = props
console.log(bookShelves)
  let ObjectKeys = Object.keys(bookShelves)
  let ListOfShelves = ObjectKeys.map((shelf) => {
      console.log(`inside List Of Shelves: key: ${shelf},value ${typeof [bookShelves[shelf]]}`)
      return(
      <BookShelve shelfName={shelf} shelfBooks={bookShelves[shelf]} handleSelect={handleSelect} key={shelf}/>
      )
    }
  )
  console.log("[BookShelves] mapped ListofShelves:", ListOfShelves)
  return (
    <div className="list-books">
      <div className="list-books-title">
         <h1>My Reads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {ListOfShelves}
        </div>
      </div>
    </div>
  )
};

export default  bookShelves