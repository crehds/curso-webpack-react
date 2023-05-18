import './styles.css';

import pysa from '../../../../assets/images/pysa_screenshot.png';
import hagaloVerde from '../../../../assets/images/hagalo_verde_screenshot.png';
import eyl from '../../../../assets/images/eyl_screenshot.png';
import juego from '../../../../assets/images/juego_screenshot.png';
import bachatealo from '../../../../assets/images/bachatealo_screenshot.png';
import marielis from '../../../../assets/images/marielis_screenshot.png';
import ProjectCard from './components/ProjectCard';

function Projects() {
  return (
    <div className='projects'>
      <div className='projects-container'>
        <ProjectCard
          src={pysa}
          href='https://pysa.vercel.app'
          title='pysa gaming'
          source='https://github.com/crehds/pysa'
        />
        <ProjectCard
          src={hagaloVerde}
          href='https://hagaloverde.vercel.app'
          title='hagalo verde'
          source='https://github.com/crehds/hagalo_verde'
        />
        <ProjectCard
          src={eyl}
          href='https://expresion-latina.vercel.app'
          title='expresión latina'
          source='https://github.com/crehds/expresion-latina'
        />
        <ProjectCard
          src={juego}
          href='https://game-with-keyboard.vercel.app'
          title='juego con teclado'
          source='https://github.com/crehds/gameWithKeyboard'
        />
        <ProjectCard
          src={bachatealo}
          href='https://crehds.github.io/bachatealo'
          title='bachatealo'
          source='https://github.com/crehds/bachatealo/tree/master/bachatealo'
        />
        <ProjectCard
          src={marielis}
          href='https://marielis.vercel.app'
          title='marielis pasteleria'
          source='https://github.com/crehds/marielis'
        />
      </div>
    </div>
  );
}

export default Projects;
