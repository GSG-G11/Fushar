import React, { useEffect, useState } from 'react';
import axios from "axios";
import Card from '../card/Card';
import Loading from '../loading/Loading';
import './style.css';

function CardContainer() {
  const [topMovies, setTopMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=ca43d42a77d5f7641cca48352f415f5b'
    )
      .then((result) => {
        const { data } = result;
        setTopMovies(data.results);
        setLoading(false)
      });
  }, []);
  return (
    <div className="cards-top-movies">
      <h3 className="section-title">Most Popular</h3>
      {loading ? <Loading /> : <div className="cards-container">
        {topMovies.slice(0, 12).map((movie) => (
            <Card key={movie.id} movie={movie} />
        ))}
      </div>}
    </div>
  );
}

export default CardContainer;
