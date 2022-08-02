import { fetchMovieReviews } from 'services/MoviesAPI';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function MovieReviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    fetchMovieReviews(movieId).then(data => setReviews(data.results));
  }, [movieId]);
  return (
    <>
      {reviews && (
        <>
          {reviews.length === 0 ? (
            <p>No any reviews here</p>
          ) : (
            <ul>
              {reviews.map(el => (
                <li key={el.id}>
                  <h3>{el.author}</h3>
                  <p>{el.content}</p>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </>
  );
}
