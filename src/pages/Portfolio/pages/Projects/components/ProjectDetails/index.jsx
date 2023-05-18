import { TfiWorld } from 'react-icons/tfi';
import { BsGithub } from 'react-icons/bs';

import './styles.css';

function ProjectDetails({ web, source }) {
  return (
    <div className='project-details'>
      <div className='project-details--icons'>
        <a
          href={web}
          target='_blank'
          className='project-details--icon'>
          <TfiWorld size={30} />
        </a>
        <a
          href={source}
          target='_blank'
          className='project-details--icon'>
          <BsGithub size={30} />
        </a>
      </div>
    </div>
  )
}
export default ProjectDetails
