import React from "react";
import PropTypes from 'prop-types';

function SearchResults(props) {
  const { results } = props;
  
  return (
    <div className="container">
      {results ? results.map((movie) => {
        return (
          <div key={movie.imdbID}>
            <img src={movie.Poster} alt="poster" />
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <p>{movie.Type}</p>
          </div>
        ) 
      }): <h5 style={{marginTop: '50px', fontSize: '20px'}}>Try Again</h5>}
    </div>
  );
}

SearchResults.propTypes = {
  results: PropTypes.object.isRequired,
};

export default SearchResults;
