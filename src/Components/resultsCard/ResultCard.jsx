import React from "react";
import PropTypes from "prop-types";

function ResultCard(props) {
  const { movie } = props;
  return (
    <div className="movie-top-card" style={{paddingBottom: '10px'}}>
      <img className="movie-poster" src={movie.Poster} alt="poster" />
      <div className="movie-info">
        <p className="title-search">{movie.Title}</p>
        <p className="movie-ReleaseDate">Year: {movie.Year}</p>
        <p>Type: {movie.Type}</p>
      </div>
    </div>
  );
}

ResultCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default ResultCard;
