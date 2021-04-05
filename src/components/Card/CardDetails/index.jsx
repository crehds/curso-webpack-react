import React from 'react';
import './styles.css';

export const CardDetails = (props) => {
  return (
    <div className='card_details'>
      <div className='card_photo center circle'>
        <img src={props.src} alt={`imagen del ${props.name.first}`} />
        <svg
          viewBox='0 0 100 100'
          xmlns='http://www.w3.org/2000/svg'
          xmlSpace='preserve'
        >
          <circle cx='50' cy='50' r='40' />
        </svg>
      </div>
      <p className='card_title'>Hi, my name is </p>
      <p className='card_value'>{`${props.name.first} ${props.name.last}`}</p>
    </div>
  );
};
