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
          href='https://pysa.vercel.app' />
        <ProjectCard
          src={hagaloVerde}
          href='https://hagaloverde.vercel.app' />
        <ProjectCard
          src={eyl}
          href='https://expresion-latina.vercel.app' />
        <ProjectCard
          src={juego}
          href='https://game-with-keyboard.vercel.app' />
        <ProjectCard
          src={bachatealo}
          href='https://crehds.github.io/bachatealo' />
        <ProjectCard
          src={marielis}
          href='https://marielis.vercel.app' />
      </div>
    </div>
  );
}

export default Projects;
