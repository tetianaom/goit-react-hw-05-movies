import { Link, useLocation } from 'react-router-dom';
import { MovieList, MovieItem} from './MoviesTrendingList.styled';

export const MoviesTrendingList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <h2>Trending today</h2>
      <MovieList>
        {movies.map(({ id, title }) => {
          return (
            <MovieItem key={id}>
              <Link to={`movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </MovieItem>
          );
        })}
      </MovieList>
    </>
  );
};
