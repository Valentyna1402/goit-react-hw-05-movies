import { Routes, Route, NavLink } from "react-router-dom";

import HomePage from "pages/HomePage";
import MoviesPage from "pages/MoviesPage";
import MovieDetailsPage from "pages/MovieDetailsPage";
import Cast from "./Cast";
import Reviews from "./Reviews";

export const App = () => {
  return (
    <div>
      <header>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
};
