import React from 'react';

const SearchBar = ({ onFilter }) => {
  return (
    <>
      <label htmlFor="">filter shown with:</label>
      <input type="search" onChange={onFilter} />
    </>
  );
};

export default SearchBar;
