import React from "react";

function Search(props) {
  return (
      <div className="search">
        <input
          onChange={props.handleInputChange}
          onKeyDown={props.onKeyDown}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for an Employee"
          id="search"
        />
      </div>
  );
}

export default Search;