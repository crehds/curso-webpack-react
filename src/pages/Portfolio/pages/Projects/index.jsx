import './styles.css';

import pysa from '../../../../assets/images/pysa_screenshot.png';
import hagaloVerde from '../../../../assets/images/hagalo_verde_screenshot.png';
import eyl from '../../../../assets/images/eyl_screenshot.png';
import juego from '../../../../assets/images/juego_screenshot.png';
import bachatealo from '../../../../assets/images/bachatealo_screenshot.png';
import marielis from '../../../../assets/images/marielis_screenshot.png';
import { useGetWidth } from '../../../../hooks/useGetWidth';
import { useEffect } from 'react';

function Portfolio() {
  const width = useGetWidth();

  useEffect(() => {
    const portfolio = document.querySelector('.Portfolio');
    portfolio.style.width = `${width}px`;
  }, [width]);

  return (
    <div className='Portfolio'>
      <div className='portfolio--title'>
        <h2>Proyectos</h2>
      </div>
      <div className='projects--container'>
        <div className='project--container'>
          <a href='https://pysa.vercel.app' target='_blank'>
            <p>PYSA GAMING</p>
          </a>
          <a
            className='project--image--container'
            href='https://pysa.vercel.app'
            target='_blank'
          >
            <img src={pysa} alt='' />
          </a>
        </div>
        <div className='project--container'>
          <a href='https://hagaloverde.vercel.app/' target='_blank'>
            <p>HAGALO VERDE</p>
          </a>
          <a
            className='project--image--container'
            href='https://hagaloverde.vercel.app/'
            target='_blank'
          >
            <img src={hagaloVerde} alt='' />
          </a>
        </div>
        <div className='project--container'>
          <a href='https://expresion-latina.vercel.app/' target='_blank'>
            <p>EXPRESION LATINA</p>
          </a>
          <a
            className='project--image--container'
            href='https://expresion-latina.vercel.app/'
            target='_blank'
          >
            <img src={eyl} alt='' />
          </a>
        </div>
        <div className='project--container'>
          <a href='https://marielis.vercel.app/' target='_blank'>
            <p>MARIELIS PASTELERIA</p>
          </a>
          <a
            className='project--image--container'
            href='https://marielis.vercel.app/'
            target='_blank'
          >
            <img src={marielis} alt='' />
          </a>
        </div>
        <div className='project--container'>
          <a href='https://crehds.github.io/bachatealo' target='_blank'>
            <p>BACHATEALO</p>
          </a>
          <a
            className='project--image--container'
            href='https://crehds.github.io/bachatealo'
            target='_blank'
          >
            <img src={bachatealo} alt='' />
          </a>
        </div>
        <div className='project--container'>
          <a href='https://game-with-keyboard.vercel.app/' target='_blank'>
            <p>JUEGO CON TECLADO</p>
          </a>
          <a
            className='project--image--container'
            href='https://game-with-keyboard.vercel.app/'
            target='_blank'
          >
            <img src={juego} alt='' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;