import React, { useState } from "react";

function Nav() {
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (e) => {
    e.preventDefault();
    setInputValue();
  };

  return (
    <nav>
      <i>icon</i>
      <h1>Fushar</h1>
      <form className="search" onSubmit={handleInputValue}>
        <input placeholder="search..." name="search" />
        <button>Search</button>
      </form>
      <hr />
      <p>{inputValue}</p>
    </nav>
  );
}

export default Nav;
