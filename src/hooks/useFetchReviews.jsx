import { useEffect, useState } from 'react';
import { fetchMovieReviews } from 'services/API';
import { useParams } from 'react-router-dom';

export const useFetchReviews = () => {
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        setError(null);

        const reviewsData = await fetchMovieReviews(movieId);

        setReviews(reviewsData.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, [movieId]);

  return { reviews, loading, error };
};
