import { useFetchSearchForm } from 'hooks/useFetchSearchForm';
import { SearchForm } from 'components/SearchForm';
import { Link, useLocation } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

export const Movies = () => {
  const { movies, loading, error, handleChangeSearchParams } =
    useFetchSearchForm();
  const location = useLocation();

  return (
    <section>
      <div>
        <SearchForm onSubmit={handleChangeSearchParams} />
        {loading && <Loader />}
        {error && <p>{error}</p>}
        {movies.length > 0 && (
          <ul>
            {movies.map(({ id, title }) => {
              return (
                <li key={id}>
                  <Link to={`${id}`} state={{ from: location }}>
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
};
