import React from 'react';
import './styles.css';
import twitter from '../../../../../../assets/images/twitter.png';
import github from '../../../../../../assets/images/github.png';
import facebook from '../../../../../../assets/images/facebook.png';

export const SocialMedia = () => {
  return (
    <div className='SocialMedia--container'>
      <a href='https://twitter.com/crehds1' target='_blank'>
        <img src={twitter} alt='logo de twitter' />
      </a>
      <a href='https://github.com/crehds' target='_blank'>
        <img src={github} alt='logo de github' />
      </a>
      <a href='https://www.facebook.com/checa.rh' target='_blank'>
        <img src={facebook} alt='logo de instagram' />
      </a>
    </div>
  );
};
