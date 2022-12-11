import { useState } from 'react';

import { AppContent } from './pages/AppContent';
import { NavBar } from './components/Navbar';
import { useGetData } from './hooks/useGetData';
import { Loader1 } from './loaders/loader1';
import { Content } from './components/Content';
import { useActiveOptionNavBar } from './hooks/useActiveOptionNavbar';

const App = () => {
  const [appContent, setAppContent] = useState('home');
  const setActiveOptionNavbar = useActiveOptionNavBar(appContent);

  const [user, loading] = useGetData(true);

  return (
    <>
      <NavBar
        appContent={appContent}
        setAppContent={setAppContent}
        setActiveOptionNavBar={setActiveOptionNavbar}
      />

      <AppContent loading={loading} onLoading={() => <Loader1 />}>
        <Content content={appContent} user={{ ...user }} />
      </AppContent>
    </>
  );
};

export default App;
