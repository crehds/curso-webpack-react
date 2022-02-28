import React from 'react';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Home } from './components/Home';
import { Portfolio } from './components/Portfolio';

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
