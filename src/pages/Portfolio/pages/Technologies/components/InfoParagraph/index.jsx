import './styles.css';
import TECHNOLOGIES from '../../consts/technologies';

export function InfoParagraph() {
  return (
    <div className='InfoParagraph'>
      <div className='technologies'>
        {
          TECHNOLOGIES.map((technology) => (
            <div
              key={technology.name}
              className='technology'>
              {technology.icon}
              <p>{technology.name}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}
