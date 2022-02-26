import React from 'react';
import { About } from './components/About';
import { NavBar } from './components/Navbar';
import { useGetData } from './hooks/useGetData';
import { Loader } from './loader';

const App = () => {
  const [user, loading] = useGetData(true);
  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <>
          <NavBar />
          <About {...user} />
        </>
      )}
    </>
  );
};

export default App;
