import { useFetchCast } from 'hooks/useFetchCast';
import { Loader } from './Loader/Loader';

export const Cast = () => {
  const { cast, loading, error } = useFetchCast();
  if (!cast) {
    return;
  }

  return (
    <>
      {loading && <Loader />}
      {error && <p>{error}</p>}
      <ul>
        {cast.map(({ id, name, profile_path, character }) => {
          return (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
                alt={name}
              />
              <h3>{name}</h3>
              <p>{character}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
