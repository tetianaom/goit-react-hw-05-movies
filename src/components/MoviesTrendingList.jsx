import { Link, useLocation } from 'react-router-dom';

export const MoviesTrendingList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {movies.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link to={`movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
