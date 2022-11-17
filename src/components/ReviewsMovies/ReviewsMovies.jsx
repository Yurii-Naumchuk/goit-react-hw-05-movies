import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { fetchReviews } from '../../services/api';
import { ReviewsMoviesList } from './ReviewsMoviesList';

export default function ReviewsMovies() {
  const [review, setReview] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  useEffect(() => {
    const fetchReview = async () => {
      if (!id) {
        return;
      }
      setLoading(true);
      try {
        const data = await fetchReviews({ id });
        setReview(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchReview();
  }, [id]);
  return (
    <>
      {review !== null && <ReviewsMoviesList review={review} />}
      {loading && <Loader />}
      {error && <p>Спробуй ще...</p>}
    </>
  );
}
