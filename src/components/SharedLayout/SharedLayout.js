import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';

import Loader from 'components/Loader';

export const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
