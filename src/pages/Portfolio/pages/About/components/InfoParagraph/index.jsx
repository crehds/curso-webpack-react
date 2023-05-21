import { useTranslation } from 'react-i18next';
import './styles.css';
import TECHNOLOGIES from '../../consts/technologies';

export function InfoParagraph() {
  const { t }= useTranslation();
  return (
    <div className='InfoParagraph'>
      <p>
        {t('portfolio.pages.about.info-paragraph')}
      </p>
      <div className='technologies'>
        {
          TECHNOLOGIES.map((technology) => (
            <div key={technology.name}>
              {technology.icon}
            </div>
          ))
        }
      </div>
    </div>
  );
}
