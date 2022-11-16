import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Loader } from '../components/Loader/Loader';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
const MoviesDetails = lazy(() => import('pages/MoviesDetails'));
const CastMovies = lazy(() => import('./CastMovies/CastMovies'));
const ReviewsMovies = lazy(() => import('./ReviewsMovies/ReviewsMovies'));
export function UserRoute() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/Movies/:id" element={<MoviesDetails />}>
            <Route path="cast" element={<CastMovies />} />
            <Route path="reviews" element={<ReviewsMovies />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}
