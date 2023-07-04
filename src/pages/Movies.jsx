import { useFetchSearchForm } from 'hooks/useFetchSearchForm';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { Link, useLocation } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { Container } from 'components/SharedLayout/SharedLayout.styled';
import {
  MovieList,
  MovieItem,
} from 'components/MoviesTrendingList/MoviesTrendingList.styled';

const Movies = () => {
  const { movies, loading, error, handleChangeSearchParams } =
    useFetchSearchForm();
  const location = useLocation();

  return (
    <Container>
      <SearchForm onSubmit={handleChangeSearchParams} />
      {loading && <Loader />}
      {error && <p>{error}</p>}
      {movies.length > 0 && (
        <MovieList>
          {movies.map(({ id, title }) => {
            return (
              <MovieItem key={id}>
                <Link to={`${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </MovieItem>
            );
          })}
        </MovieList>
      )}
    </Container>
  );
};

export default Movies;
