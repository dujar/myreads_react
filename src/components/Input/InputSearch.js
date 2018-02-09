import React from 'react';

const inputSearch = props => {
const {changeHandler} = props
  return (
    <input
      type="text"
      onChange={changeHandler}
      placeholder="Search by title or author"
    />
  );
};

export default inputSearch;
