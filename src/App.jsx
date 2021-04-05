import React, { useEffect, useState } from 'react';
import { About } from './components/About';
import { useGetData } from './hooks/useGetData';

const App = () => {
  const [user, loading] = useGetData(false);
  return loading && <About {...user} />;
};

export default App;
