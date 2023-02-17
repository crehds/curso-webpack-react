import './styles.css';

function ProjectCard({ src = '', href = '' }) {
  return (
    <div className='project-card'>
      <a
        href={href}
        target='_blank'>
        <p>PYSA GAMING</p>
      </a>
      <a
        className='project--image--container'
        href={href}
        target='_blank'
      >
        <img
          src={src}
          alt='' />
      </a>
    </div>
  )
}
export default ProjectCard;
