import React from 'react';
import './styles.css';

export const CardDetails = () => {
  return (
    <div className='card_photo center circle'>
      <img src='' alt='imagen del usuario' />
      <svg
        viewBox='0 0 100 100'
        xmlns='http://www.w3.org/2000/svg'
        style={{ enableBackground: 'new -580 439 577.9 194' }}
        xmlSpace='preserve'
      >
        <circle cx='50' cy='50' r='40' />
      </svg>
      <p className='card_title'>Hi, my name is </p>
      <p className='card_value'>{''}</p>
    </div>
  );
};
