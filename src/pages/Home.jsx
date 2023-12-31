import { useFetchTrendingMovies } from 'hooks/useFetchTrendingMovies';
import { MoviesTrendingList } from 'components/MoviesTrendingList/MoviesTrendingList';
import { Loader } from 'components/Loader/Loader';
import { Container } from 'components/SharedLayout/SharedLayout.styled';

export const Home = () => {
  const { movies, loading, error } = useFetchTrendingMovies();

  return (
    <Container>
      <div>
        {loading && <Loader />}
        {error && <p>{error}</p>}
        {movies.length > 0 && <MoviesTrendingList movies={movies} />}
      </div>
    </Container>
  );
};

export default Home;
