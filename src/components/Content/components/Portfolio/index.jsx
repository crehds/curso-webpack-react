import React from 'react';

import './styles.css';

import pysa from '../../../../assets/images/pysa_screenshot.png';
import hagaloVerde from '../../../../assets/images/hagalo_verde_screenshot.png';
import eyl from '../../../../assets/images/eyl_screenshot.png';
import juego from '../../../../assets/images/juego_screenshot.png';
import bachatealo from '../../../../assets/images/bachatealo_screenshot.png';
import marielis from '../../../../assets/images/marielis_screenshot.png';

export function Portfolio() {
  return (
    <div className='Portfolio'>
      <div className='portfolio--title'>
        <h2>Últimos Proyectos</h2>
      </div>
      <div className='projects--container'>
        <div className='project--container'>
          <a href='https://pysa.vercel.app' target='_blank'>
            <p>PYSA GAMING</p>
          </a>
          <div className='project--image--container'>
            <img src={pysa} alt='' />
          </div>
        </div>
        <div className='project--container'>
          <a href='https://hagaloverde.vercel.app/' target='_blank'>
            <p>HAGALO VERDE</p>
          </a>
          <div className='project--image--container'>
            <img src={hagaloVerde} alt='' />
          </div>
        </div>
        <div className='project--container'>
          <a href='https://crehds.github.io/eyl/' target='_blank'>
            <p>EXPRESION LATINA</p>
          </a>
          <div className='project--image--container'>
            <img src={eyl} alt='' />
          </div>
        </div>
        <div className='project--container'>
          <a href='https://marielis.vercel.app/' target='_blank'>
            <p>JUEGO CON TECLADO</p>
          </a>
          <div className='project--image--container'>
            <img src={marielis} alt='' />
          </div>
        </div>
        <div className='project--container'>
          <a href='https://crehds.github.io/bachatealo' target='_blank'>
            <p>BACHATEALO</p>
          </a>
          <div className='project--image--container'>
            <img src={bachatealo} alt='' />
          </div>
        </div>
        <div className='project--container'>
          <a href='https://game-with-keyboard.vercel.app/' target='_blank'>
            <p>JUEGO CON TECLADO</p>
          </a>
          <div className='project--image--container'>
            <img src={juego} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}
