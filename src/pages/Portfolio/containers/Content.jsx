import React from 'react';

const Home = React.lazy(() => import('../pages/Home'));
const About = React.lazy(() => import('../pages/About'));
const Portfolio = React.lazy(() => import('../pages/Projects'));
const Contact = React.lazy(() => import('../pages/Contact'));

export function handleContent({ page = '', user = {} }) {
  switch (page) {
  case 'home':
    return <Home {...user} />;
  case 'about':
    return <About />;
  case 'portfolio':
    return <Portfolio />;
  case 'contact':
    return <Contact />;
  default:
    break;
  }
}

export function Content(props) {
  const { page, user } = props;
  return handleContent({ page, user });
}
