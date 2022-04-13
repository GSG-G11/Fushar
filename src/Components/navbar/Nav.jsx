import React from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import appIcon from "./popcorn.png";
import "./nav.css";

function Nav(props) {
  const { handleInputValue, setInputValue, inputValue } = props;

  let navigate = useNavigate();
  const submit = (e) => {
    if (e.target[0].value.trim() !== "") {
      navigate("/search");
      handleInputValue(e);
    } else {
      e.preventDefault();
      navigate("/");
    }
  };

  return (
    <nav>
      <Link to="/">
        <div className="logo">
          <img className="app-icon" src={appIcon} />
          <h1>Fushar</h1>
        </div>
      </Link>
      <form className="search" onSubmit={submit}>
        <input
          value={inputValue}
          placeholder="search..."
          name="search"
          onChange={(e) => setInputValue(e.target.value)}
          required
        />
        <button type="submit">Search</button>
      </form>
    </nav>
  );
}

Nav.propTypes = {
  handleInputValue: PropTypes.func.isRequired,
  setInputValue: PropTypes.func.isRequired,
  inputValue: PropTypes.string,
};

export default Nav;
