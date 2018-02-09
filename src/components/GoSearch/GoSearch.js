import React from 'react'

const goSearch = (props) => {
  const {history} = props
  return (
    <a className="open-search" onClick={() => history.push('/search')}>
      Close
    </a>
  );
}

export default goSearch