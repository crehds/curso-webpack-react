import React from 'react';
import { useGetData } from '../hooks/useGetData';

const App = () => {
  const [loading, user] = useGetData();
  console.log(loading);
  console.log(user);
  return <h1>{console.log('renderizado')}Hello React!</h1>;
};

export default App;
