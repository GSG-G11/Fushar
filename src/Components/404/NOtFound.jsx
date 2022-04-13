import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function NOtFound() {
  return (
    <div className="not-found-div">
      <h1 className="not-found">404-page not found</h1>
      <Link to={'/'}>
        <button className="go-home">BACK TO HOME</button>
      </Link>
    </div>
  );
}

export default NOtFound;
