import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Card({ movie }) {
  const { poster_path, title, release_date, overview } = movie;
  const trimDescription = (overview) => {
    if (overview.length > 120) {
      return `${overview.slice(0, 120)} ,...`;
    }
    return overview;
  };
  return (
    <div className="movie-top-card">
      <img
        className="movie-poster"
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
      />
      <div className="movie-info">
        <p className="movie-title">{title}</p>
        <p className="movie-ReleaseDate">{`Release date :  ${release_date}`}</p>
        <p className="movie-overview">{`Overview : ${trimDescription(
          overview
        )}`}</p>
      </div>
    </div>
  );
}
Card.propTypes = {
  movie: PropTypes.object,
};
export default Card;
