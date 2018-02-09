import React from 'react';

const goHome = props => {
  const {history} = props
  return (
    <a className="close-search" onClick={() => history.push('/')}>
      Close
    </a>
  );
};
export default goHome
