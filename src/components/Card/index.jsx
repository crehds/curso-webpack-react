import React from 'react';
import { CardDetails } from './CardDetails';
import { CardSocial } from './CardSocial';
import { CardUserData } from './CardUserData';
import './styles.css';

export const Card = (props) => {
  return (
    <div className='card'>
      <CardDetails src={props.picture.large} name={props.name}/>
      <CardUserData email={props.email} country={props.location.country}/>
      <CardSocial />
    </div>
  );
};
