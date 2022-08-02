import { fetchTrendingMovies } from '../services/MoviesAPI';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function HomeView() {
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    if (movies.length !== 0) return;
    fetchTrendingMovies().then(setMovie);
  }, [movies]);
  return (
    <>
      <h1>Tranding today</h1>
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                {movie.name || movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
