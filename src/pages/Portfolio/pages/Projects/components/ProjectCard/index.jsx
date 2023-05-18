import ProjectDetails from '../ProjectDetails';
import './styles.css';

function ProjectCard({
  src = '', href = '', alt = 'project preview', title = '', source = '#'
}) {
  return (
    <div className='project-card'>
      <div
        className='project-card--content'>
        <p className='project-card--title'>{title}</p>
        <div
          className='project--image--container'
        >
          <img
            src={src}
            alt={alt} />
          <ProjectDetails
            web={href}
            source={source} />
        </div>
      </div>
    </div>
  )
}
export default ProjectCard;
