import React from 'react';
import { About } from './components/About';
import { useGetData } from './hooks/useGetData';

const App = () => {
  const [loading, user] = useGetData();
  return <About />;
};

export default App;
