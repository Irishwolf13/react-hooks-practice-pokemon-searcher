import React from "react";

function Search({ searchInput, handleUserInput}) {

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input 
          className="prompt" 
          value={searchInput}
          onChange={handleUserInput}
          />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
