import { useEffect, useState } from 'react';
import { fetchMovieCast } from 'services/API';
import { useParams } from 'react-router-dom';

export const useFetchCast = () => {
  const [cast, setCast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        setError(null);

        const castData = await fetchMovieCast(movieId);

        setCast(castData.cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCast();
  }, [movieId]);

  return { cast, loading, error };
};
