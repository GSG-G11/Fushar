import React from "react";
import PropTypes from "prop-types";
import ResultCard from "../resultsCard/ResultCard";
import './SearchResults.css'

function SearchResults(props) {
  const { results } = props;

  return (
    <div className="container">
      {results ? (
        results.map((movie) => {
          return (
              <ResultCard key={movie.imdbID} movie={movie} />
          );
        })
      ) : (
        <h5 style={{ marginTop: "50px", fontSize: "20px" }}>No Result Found</h5>
      )}
    </div>
  );
}

SearchResults.propTypes = {
  results: PropTypes.object.isRequired,
};

export default SearchResults;
