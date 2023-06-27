import { Link, Outlet } from 'react-router-dom';
import { useFetchMovie } from 'hooks/useFetchMovie';
import { Movie } from 'components/Movie';
import { useLocation } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

export const MovieDetails = () => {
  const { movie, loading, error } = useFetchMovie();
  const {
    id,
    original_title,
    backdrop_path,
    release_date,
    overview,
    vote_average,
    genres,
  } = movie ?? {};

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  return (
    <div>
      {/* <Section>
      <Container> */}
      <Link to={backLinkHref}>Go Back</Link>
      {movie && (
        <Movie
          title={original_title}
          backdrop_path={backdrop_path}
          release_date={release_date}
          id={id}
          overview={overview}
          genres={genres}
          vote_average={vote_average}
        />
      )}
      {loading && <Loader />}
      {error && <p>{error}</p>}
      <ul>
        Additional information
        <Link to={`credits`}>Cast</Link>
        <Link to={`reviews`}>Reviews</Link>
      </ul>
      <Outlet />
      {/* </Container>
    </Section> */}
    </div>
  );
};
