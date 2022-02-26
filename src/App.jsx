import React, { useEffect, useState } from 'react';
import { About } from './components/About';
import { useGetData } from './hooks/useGetData';
import { Loader } from './loader';

const App = () => {
  const [user, loading] = useGetData(true);
  return (
    <>
      {loading && <Loader />}
      {!loading && <About {...user} />}
    </>
  );
};

export default App;
