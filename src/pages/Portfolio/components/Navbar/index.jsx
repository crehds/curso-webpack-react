import { useTranslation } from 'react-i18next';
import { useTheme } from '../../context/theme';
import { MdDarkMode } from 'react-icons/md';
import { MdOutlineWbSunny } from 'react-icons/md';
import { MdMenu } from 'react-icons/md';
import './styles.css';

export function NavBar({ appContent, setAppContent }) {
  const { theme, changeTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const handleTheme = () => {
    const newTheme = theme ==='dark' ? 'light' : 'dark'
    return changeTheme(newTheme)
  }

  const handleLanguage = (lang) => {
    i18n.changeLanguage(lang);
  }

  const handleOption = (event) => {
    const optionId = event.target.id;
    if (appContent === optionId) return null;

    setAppContent(optionId);
  };

  const handleActiveNavbar = () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('navbar--is-active');
  }

  return (
    <nav className='navbar'>
      <MdMenu
        size={24}
        className='navbar-hamburger'
        onClick={handleActiveNavbar} />
      <ul className='options--wrapped'>
        <a
          id='profile'
          className={`option ${appContent === 'profile' ? 'active' : 'inactive'}`}
          onClick={handleOption}>
          {t('navbar.profile')}
        </a>
        <a
          id='technologies'
          className={`option ${appContent === 'technologies' ? 'active' : 'inactive'}`}
          onClick={handleOption}>
          {t('navbar.technologies')}
        </a>
        <a
          id='experience'
          className={`option ${appContent === 'experience' ? 'active' : 'inactive'}`}
          onClick={handleOption}>
          {'Experience'}
        </a>
        <a
          id='projects'
          className={`option ${appContent === 'projects' ? 'active' : 'inactive'}`}
          onClick={handleOption}>
          {t('navbar.projects')}
        </a>
        <a
          id='contact'
          className={`option ${appContent === 'contact' ? 'active' : 'inactive'}`}
          onClick={handleOption}>
          {t('navbar.contact')}
        </a>
      </ul>
      <div className='navbar-language'>
        {theme === 'dark' ? <MdDarkMode
          onClick={handleTheme}
          className='navbar-theme'
          color='gray' /> : <MdOutlineWbSunny
          onClick={handleTheme}
          className='navbar-theme' />}
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
