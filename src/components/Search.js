import React from "react";

const Search = ({ search, setinput }) => {
  const setInput = (e) => {
    setinput(e.target.value);
  }
  return (
    <div className="search">
      <input type="text" onChange={setInput} className="input" />
      <button onClick={search}>Search</button>
    </div>
  );
};
export default Search;
