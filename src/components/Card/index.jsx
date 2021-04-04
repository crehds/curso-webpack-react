import React from 'react';
import { CardDetails } from './CardDetails';
import { CardSocial } from './CardSocial';
import { CardUserData } from './CardUserData';
import './styles.css';

export const Card = () => {
  return (
    <div className='card'>
      <CardDetails />
      <CardUserData />
      <CardSocial />
    </div>
  );
};
