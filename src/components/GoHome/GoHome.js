import React from 'react';
import {NavLink} from 'react-router-dom'
const goHome = props => {
  return (
    <NavLink className="close-search" to="/">
      HOME
    </NavLink>
  );
};
export default goHome
