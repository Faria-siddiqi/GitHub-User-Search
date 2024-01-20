import React from "react";
import "../Component/Style.css";

function Form({ onSubmit, onChange, value }) {
    
  return (
    <div>
      <form className="formContainer" onSubmit={onSubmit}>
        <input
          type="text"
          id="search"
          placeholder="Enter username"
          onChange={onChange}
          value={value}
          className="searchInput"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Form;
