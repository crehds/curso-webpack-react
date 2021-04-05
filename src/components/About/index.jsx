import React from 'react';
import { Card } from '../Card';
import './styles.css';

export const About = (props) => {
  return (
    <div className='About'>
      <Card {...props} />
    </div>
  );
};
