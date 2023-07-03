import { useFetchReviews } from 'hooks/useFetchReviews';
import { Loader } from './Loader/Loader';

const Reviews = () => {
  const { reviews, loading, error } = useFetchReviews();

  if (!reviews || !reviews.length) {
    return <p>We don`t have any reviews for this movie.</p>;
  }

  return (
    <>
      {loading && <Loader />}
      {error && <p>{error}</p>}
      <ul>
        {reviews.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Reviews;