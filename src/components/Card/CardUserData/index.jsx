import React from 'react';
import './styles.css';

export const CardUserData = (props) => {
  return (
    <div className='card_userdata'>
      <ul>
        <li>{props.email}</li>
        <li>{props.country}</li>
      </ul>
    </div>
  );
};
