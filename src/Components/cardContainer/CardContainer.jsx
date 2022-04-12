import React, { useEffect, useState } from 'react';
import './style.css';

function CardContainer() {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/top_rated?api_key=ca43d42a77d5f7641cca48352f415f5b'
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data.results[0].original_title);
        setTopMovies(data.results);
      });
  }, []);
  return (
    <div>
      <h2>TOP RATED </h2>
      <p>
        {topMovies.map((movie) => (
          <p key={movie.id}>{movie.original_title}</p>
        ))}
      </p>
    </div>
  );
}

export default CardContainer;
