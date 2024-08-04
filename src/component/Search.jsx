import React from 'react'

function search (props) {
   const { value, OnValueChange} = props;
  return (
    <div className="app-search">
            <input  className="app-search-input"
            type="text"
            placeholder="Search"
            value={value}
            onChange={(event) => {OnValueChange(event.target.value)}}
            />
        </div>
  );
}

export default search