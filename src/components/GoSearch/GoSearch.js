import React from 'react'
import {Link } from 'react-router-dom'

const goSearch = (props) => {
  return (
    <Link className="open-search" to="/search">
      Search for Books
    </Link>
  );
}

export default goSearch