import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./nav.css";

function Nav(props) {
  const { handleInputValue, setInputValue } = props;

  let navigate = useNavigate();
  const submit = (e) => {
    navigate("/search");
    handleInputValue(e);
  };

  return (
    <nav>
      <div className="logo">
        <i>icon</i>
        <h1>Fushar</h1>
      </div>
      <form className="search" onSubmit={submit}>
        <input
          placeholder="search..."
          name="search"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </nav>
  );
}

Nav.propTypes = {
  handleInputValue: PropTypes.func.isRequired,
  setInputValue: PropTypes.string.isRequired,
};

export default Nav;
