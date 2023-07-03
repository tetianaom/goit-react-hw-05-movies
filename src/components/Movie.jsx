import { MovieWrapper, MovieTitle } from './Movie.styled';

export const Movie = ({
  id,
  title,
  backdrop_path,
  release_date,
  overview,
  vote_average,
  genres,
}) => {
  const imgUrl = backdrop_path
    ? `https://image.tmdb.org/t/p/w500/${backdrop_path}`
    : 'https://via.placeholder.com/500x280';

  return (
    <MovieWrapper>
      <div>
        <img src={imgUrl} alt={title} />
      </div>
      <div>
        <MovieTitle>
          {title}
          <span> ({release_date.slice(0, 4)})</span>
        </MovieTitle>
        <p>User score: {Math.round(vote_average * 10)}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>
          {genres.map(genre => (
            <span>{genre.name} </span>
          ))}
        </p>
      </div>
    </MovieWrapper>
  );
};
