import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieReviews } from '../API';
import Loader from 'components/Loader';
import Error from 'components/Error/Error';

export default function Reviews() {
  const [review, setReview] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieReviews() {
      try {
        setError(false);
        const reviewItem = await fetchMovieReviews(movieId);
        setReview(reviewItem);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    }
    getMovieReviews();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      {error && <Error />}
      {review.length > 0 ? (
        <ul>
          {review.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <p>Author: {author}</p>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : <p>No reviews yet</p>}
    </div>
  );
}
