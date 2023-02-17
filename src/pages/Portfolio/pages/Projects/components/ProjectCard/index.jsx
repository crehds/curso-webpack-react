import './styles.css';

function ProjectCard({
  src = '', href = '', alt = 'project preview', title = ''
}) {
  return (
    <div className='project-card'>
      <a
        href={href}
        target='_blank'>
        <p>{title}</p>
        <div
          className='project--image--container'
        >
          <img
            src={src}
            alt={alt} />
        </div>
      </a>
    </div>
  )
}
export default ProjectCard;
