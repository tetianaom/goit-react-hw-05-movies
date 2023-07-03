import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieByName } from 'services/API';

export const useFetchSearchForm = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const queryString = searchParams.get('query') ?? '';
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);

        const moviesData = await fetchMovieByName(queryString);

        setMovies(moviesData.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [searchParams]);

  const handleChangeSearchParams = query => {
    if (query === '') {
      return setSearchParams({});
    }

    setSearchParams({ query: query });
  };

  return { movies, loading, error, handleChangeSearchParams };
};
