import React from 'react';
import './styles.css';

export function Loader1() {
  return (
    <div className='loader--container'>
      <div className='loader--dots--container'>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
      </div>
    </div>
  );
}
