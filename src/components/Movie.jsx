export const Movie = ({
  id,
  title,
  backdrop_path,
  release_date,
  overview,
  vote_average,
  genres,
}) => {
  return (
    <div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w200/${backdrop_path}`}
          alt={title}
        />
      </div>
      <h1>Movie details - {title}</h1>
      <p>({release_date})</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <p>{vote_average}</p>
      <p>
        {genres.map(genre => (
          <span>{genre.name} </span>
        ))}
      </p>
    </div>
  );
};
