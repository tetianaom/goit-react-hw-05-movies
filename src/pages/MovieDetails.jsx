import { useRef, Suspense } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useFetchMovie } from 'hooks/useFetchMovie';
import { Movie } from 'components/Movie/Movie';
import { Loader } from 'components/Loader/Loader';
import { Container } from 'components/SharedLayout/SharedLayout.styled';
import { BackLink } from 'components/BackLink/BackLink';
import { AdditionalList } from 'components/Movie/Movie.styled';

const MovieDetails = () => {
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
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  return (
    <Container>
      <BackLink to={backLinkLocationRef.current}>Go Back</BackLink>
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
      <hr />
      <AdditionalList>
        <h2>Additional information</h2>
        <Link to={`credits`}>Cast</Link>
        <Link to={`reviews`}>Reviews</Link>
      </AdditionalList>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MovieDetails;
