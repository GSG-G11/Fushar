import React from "react";
import PropTypes from "prop-types";
import ResultCard from "../resultsCard/ResultCard";
import './SearchResults.css'
import Loading from '../loading/Loading';

function SearchResults(props) {
  const { results, loading } = props;

if(loading) {
  return (
    <div className="container">
      <Loading />
    </div>
  );
}
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
  results: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default SearchResults;
