import React, { useState } from "react";
import "./nav.css";

function Nav() {
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (e) => {
    e.preventDefault();
    setInputValue(e.target[0].value);
  };

  return (
    <nav>
      <div className="logo">
        <i>icon</i>
        <h1>Fushar</h1>
      </div>
      <form className="search" onSubmit={(e) => handleInputValue(e)}>
        <input placeholder="search..." name="search" />
        <button type="submit">Search</button>
        <p>{inputValue}</p>
      </form>
    </nav>
  );
}

export default Nav;
