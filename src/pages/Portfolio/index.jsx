import { Suspense } from 'react';
import { useGetData } from '../../hooks/useGetData';
import { Loader1 } from '../../loaders/loader1';
import { NavBar } from './components/Navbar';

import './styles/portfolio.css';
import { Content } from './containers/Content';
import { useTheme } from './context/theme';
import { useLocation } from './context/location';

export function Portfolio(props) {
  const [user, loading] = useGetData(true);
  const { theme } = useTheme();
  const { location, changeLocation } = useLocation();

  return (
    <Suspense fallback={<Loader1 />}>
      <section className={`portfolio ${theme}`}>
        <NavBar
          appContent={location}
          setAppContent={changeLocation}
        />
        {loading && props.onLoading()}
        <Content
          page={location}
          user={user} />
      </section>
    </Suspense>
  );
}
