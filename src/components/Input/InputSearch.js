import React from 'react';
import DebounceInput from 'react-debounce-input';
const inputSearch = props => {
  const { changeHandler, query } = props;
  return (
    <DebounceInput
      // text="text"
      minLength={3}
      debounceTimeout={500}
      placeholder="Search by title or author!!"
      onChange={changeHandler}
      value={query}
    />
  );
};

export default inputSearch;
