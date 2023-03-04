import { useTranslation } from 'react-i18next';
import { useTheme } from '../../context/theme';
import './styles.css';

export function NavBar({
  appContent, setAppContent, setActiveOptionNavBar
}) {
  const { changeTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const handleLanguage = (lang) => {
    i18n.changeLanguage(lang);
  }

  const handleOption = (event) => {
    const optionId = event.target.id;
    if (appContent === optionId) return null;
    setAppContent(optionId);
    setActiveOptionNavBar((prevState) => {
      const activeOption = document.getElementById(prevState);
      activeOption.classList.remove('active');
      activeOption.classList.add('inactive');
      return optionId;
    });
  };

  return (
    <nav className='navbar--container'>
      <ul className='options--wrapped'>
        <a
          id='home'
          className='option inactive'
          onClick={handleOption}>
          {t('navbar.home')}
        </a>
        <a
          id='about'
          className='option inactive'
          onClick={handleOption}>
          {t('navbar.about')}
        </a>
        <a
          id='projects'
          className='option inactive'
          onClick={handleOption}>
          {t('navbar.projects')}
        </a>
        <a
          id='contact'
          className='option inactive'
          onClick={handleOption}>
          {t('navbar.contact')}
        </a>
        <div>
          <button onClick={() => changeTheme('dark')}>
            Dark
          </button>
          <button onClick={() => changeTheme('light')}>
            Light
          </button>
        </div>
      </ul>
      <div className='navbar-language'>
        <button
          className={i18n.language === 'en' ? 'active' : ''}
          onClick={() => handleLanguage('en')}>EN</button>
        <button
          className={i18n.language === 'es' ? 'active' : ''}
          onClick={() => handleLanguage('es')}>ES</button>
      </div>
    </nav>
  );
}
