import { Route, Routes } from 'react-router-dom';

import { lazy, Suspense } from 'react';

const HomeView = lazy(() => import('../vievs/HomeView'));
const HomePage = lazy(() => import('./HomePage'));
const Movies = lazy(() => import('../vievs/Movies'));
const MovieDetailsPage = lazy(() => import('./MovieDetailsPage/MovieDetailsPage'));
const NotFoundView = lazy(() => import('vievs/NotFoundView'));
const MovieCast = lazy(() => import('./Cast/Cast'));
const MovieReviews = lazy(() => import('./Reviews/Reviews'));
export function App() {
  return (
    <div>
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route index element={<HomeView />} />
            <Route path="movies" element={<Movies />} />

            <Route path="movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFoundView />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}
