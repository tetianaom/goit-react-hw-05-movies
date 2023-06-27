import { useFetchTrendingMovies } from 'hooks/useFetchTrendingMovies';
import { MoviesTrendingList } from 'components/MoviesTrendingList';
import { Loader } from 'components/Loader/Loader';

export const Home = () => {
  const { movies, loading, error } = useFetchTrendingMovies();

  return (
    <div>
      <div>
        {loading && <Loader />}
        {error && <p>{error}</p>}
        {movies.length > 0 && <MoviesTrendingList movies={movies} />}
      </div>
    </div>
  );
};
