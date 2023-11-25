import { useEffect, useState } from 'react';
import { fetchMovieReviews } from './API';
import { useParams } from 'react-router-dom';

export default function Reviews() {
  const [review, setReview] = useState({});
  const [loading, setLoading] = useState(true);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieReviews() {
      try {
        const reviewItem = await fetchMovieReviews(movieId);
        setReview(reviewItem);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieReviews();
  }, [movieId]);

  return (
    <div>
      {loading ? (
        <p>Loading..</p>
      ) : (
        <ul>
          {review.length === 0 ? (
            <p>No reviews yet</p>
          ) : (
            review.map(item => {
              return (
                <li key={item.id}>
                  <p>Author: {item.author}</p>
                  <p>{item.content}</p>
                </li>
              );
            })
          )}
        </ul>
      )}
    </div>
  );
}
