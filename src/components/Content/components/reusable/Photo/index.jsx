import React from 'react';
import './styles.css';

export const Photo = ({
  src = 'https://avatars.githubusercontent.com/u/42285802?v=4',
  name
}) => {
  return (
    <div className='Photo--container center circle'>
      <img src={src} alt={`imagen de ${name}`} />
      <svg
        viewBox='0 0 100 100'
        xmlns='http://www.w3.org/2000/svg'
        xmlSpace='preserve'
      >
        <circle cx='50' cy='50' r='40' />
      </svg>
    </div>
  );
};
