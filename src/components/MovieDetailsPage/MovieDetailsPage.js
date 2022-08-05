import { fetchMovieById } from 'services/MoviesAPI';
import { useState, useEffect } from 'react';
import {
  useParams,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { Container, ContainerInfo } from './MovieDetails.styled';


export default function MovieDetailsPage() {
  const [movies, setMovie] = useState([]);
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
     const onGoBack = () => {
    navigate(location?.state?.from ?? '/');
  };
    fetchMovieById(params.movieId).then(setMovie).catch(error=>{onGoBack()});
  }, [location?.state?.from, navigate, params.movieId]);
 const onGoBack = () => {
    navigate(location?.state?.from ?? '/');
  };
  return (
    <>
      {movies && (
        <>
          <button type="button" onClick={onGoBack}>
            Go back
          </button>
          <Container>
            <img
              src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
              alt={movies.title}
              width="240"
            ></img>
            <ContainerInfo>
              <h2>
                {movies.title} ( {movies.release_date} )
              </h2>
              <h3>Overview</h3>
              <p>{movies.overview}</p>
              <h3>Genres</h3>
              <p>
                {movies.genres && movies.genres.map(el => el.name).join(' ')}
              </p>
            </ContainerInfo>
          </Container>
          <hr />
          <h3>AdditionalInfo</h3>
          <NavLink to="cast" state={location.state}>Cast</NavLink>
          <br />
          <NavLink to="reviews" state={location.state}>Reviews</NavLink>
          <hr />
          <Outlet />
        </>
      )}
    </>
  );
}
