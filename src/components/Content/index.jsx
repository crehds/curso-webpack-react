import React from 'react';

const Home = React.lazy(() => import('./components/Home'));
const About = React.lazy(() => import('./components/About'));
const Portfolio = React.lazy(() => import('./components/Portfolio'));
const Contact = React.lazy(() => import('./components/Contact'));

export function Content(props) {
  switch (props.content) {
    case 'home':
      return <Home {...props.user} />;
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
