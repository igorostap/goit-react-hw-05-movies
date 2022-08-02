import { useState, useEffect } from 'react';
import { fetchSearch } from '../services/MoviesAPI';
import { useSearchParams, Link } from 'react-router-dom';
import toastr from 'toastr';
import { useLocation } from 'react-router-dom';

import { useForm } from 'react-hook-form';

toastr.options = {
  progressBar: true,
  positionClass: 'toast-top-left',
  timeOut: '3000',
  extendedTimeOut: '1000',
};

export default function Movies() {
  const [movies, setMovies] = useState();
  const [searchParams, setSearchParams] = useSearchParams({});
  const [searchName, setSearchName] = useState(
    () => searchParams.get('search') ?? ''
  );
  const { register, handleSubmit } = useForm();
  const location = useLocation();

  useEffect(() => {
    if (!searchName.trim()) return;
    fetchSearch(searchName).then(data => {
      if (!data.results) {
        return;
      }
      if (data.total_results === 0) {
        toastr.error('No results');
        setMovies();
        return;
      }
      setMovies(data.results);
      setSearchParams({ search: searchName });
    });
  }, [searchName, setSearchParams]);

  return (
    <>
      <form onSubmit={handleSubmit(value => setSearchName(value.searchName))}>
        <label>
          Imput movie name
          <input type="text" {...register('searchName')}></input>
        </label>
        <button type="submit">Search</button>
      </form>

      {movies && (
        <>
          <h1>Searched movies</h1>
          <ul>
            {movies.map(movie => (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                  {movie.name || movie.title}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
