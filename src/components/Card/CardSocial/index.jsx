import React from 'react';
import './styles.css';

export const CardSocial = () => {
  return (
    <div className='card_social'>
      <a href='https://twitter.com/crehds1' target='_blank'>
        <img src='../../assets/images/twitter.png' alt='logo de twitter' />
      </a>
      <a href='https://github.com/crehds' target='_blank'>
        <img src='../../assets/images/github.png' alt='logo de github' />
      </a>
      <a href='https://www.facebook.com/checa.rh' target='_blank'>
        <img src='../../assets/images/facebook.png' alt='logo de instagram' />
      </a>
    </div>
  );
};
