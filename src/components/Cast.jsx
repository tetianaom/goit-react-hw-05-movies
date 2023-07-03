import { useFetchCast } from 'hooks/useFetchCast';
import { Loader } from './Loader/Loader';

const Cast = () => {
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
          const imgUrl = profile_path
            ? `https://image.tmdb.org/t/p/w154${profile_path}`
            : 'https://via.placeholder.com/154x231';
          return (
            <li key={id}>
              <img src={imgUrl} alt={name} />
              <h3>{name}</h3>
              <p>{character}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Cast;
