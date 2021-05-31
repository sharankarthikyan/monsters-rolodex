import React from "react";

import "./search-box.styles.css";

const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={handleChange} // We can also do this => onChange={(e) => handleChange(e)}
    />
  );
};

export default SearchBox;
