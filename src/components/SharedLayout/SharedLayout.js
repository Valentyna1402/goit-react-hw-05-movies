import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';

import Loader from 'components/Loader';
import { Header, MainContainer } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <div>
      <Header>
        <nav>
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/movies" className="nav-link">
            Movies
          </Link>
        </nav>
      </Header>
      <MainContainer>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </MainContainer>
    </div>
  );
};
