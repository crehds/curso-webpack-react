import { Suspense, useState } from 'react';
import { useActiveOptionNavBar } from '../../hooks/useActiveOptionNavbar';
import { useGetData } from '../../hooks/useGetData';
import { Loader1 } from '../../loaders/loader1';
import { NavBar } from './components/Navbar';

import './styles/portfolio.css';
import { Content } from './containers/Content';

export function Portfolio(props) {
  const [page, setPage] = useState('home');
  const setOption = useActiveOptionNavBar(page);

  const [user, loading] = useGetData(true);

  return (
    <Suspense fallback={<Loader1 />}>
      <section className='AppContent'>
        <NavBar
          appContent={page}
          setAppContent={setPage}
          setActiveOptionNavBar={setOption}
        />
        {loading && props.onLoading()}
        <Content page={page} user={user}/>
      </section>
    </Suspense>
  );
}
