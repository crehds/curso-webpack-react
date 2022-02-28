import React from 'react';
import { About } from '../About';
import { Contact } from '../Contact';
import { Home } from '../Home';
import { Portfolio } from '../Portfolio';

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
