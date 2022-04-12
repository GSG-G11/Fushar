import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import './style.css';

function CardContainer() {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=ca43d42a77d5f7641cca48352f415f5b'
    )
      .then((data) => data.json())
      .then((data) => {
        setTopMovies(data.results);
      });
  }, []);
  return (
    <div className="cards-top-movies">
      <h3 className="section-title">Most Popular</h3>
      <div className="cards-container">
        {topMovies.slice(0, 12).map((movie) => (
          <>
            <Card movie={movie} />
          </>
        ))}
      </div>
    </div>
  );
}

export default CardContainer;
