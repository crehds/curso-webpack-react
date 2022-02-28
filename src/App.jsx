import React, { useState } from 'react';

import { AppContent } from './pages/AppContent';
import { NavBar } from './components/Navbar';
import { useGetData } from './hooks/useGetData';
import { Loader } from './loader';
import { Content } from './components/Content';

const App = () => {
  const [appContent, setAppContent] = useState('about');
  const [user, loading] = useGetData(true);
  return (
    <>
      <NavBar setAppContent={setAppContent} />

      <AppContent loading={loading} onLoading={() => <Loader />}>
        <Content content={appContent} user={{ ...user }} />
      </AppContent>
    </>
  );
};

export default App;
