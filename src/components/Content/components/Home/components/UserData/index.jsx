import React from 'react';
import './styles.css';

export const UserData = (props) => {
  return (
    <div className='userdata--container'>
      <p className='userdata--profession'>JUNIOR FRONT-END DEVELOPER </p>
      <p className='userdata--name'>{`${props.name}`}</p>
      <ul>
        <li>{props.email ? props.email : 'carlos15erh@gmail.com'}</li>
        <li>{props.country}</li>
      </ul>
    </div>
  );
};
