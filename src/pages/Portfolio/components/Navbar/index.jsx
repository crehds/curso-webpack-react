import { useTranslation } from 'react-i18next';
import { useTheme } from '../../context/theme';
import { MdDarkMode } from 'react-icons/md';
import { MdOutlineWbSunny } from 'react-icons/md';
import { MdMenu } from 'react-icons/md';
import './styles.css';

export function NavBar({
  appContent, setAppContent, setActiveOptionNavBar
}) {
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
    setActiveOptionNavBar((prevState) => {
      const activeOption = document.getElementById(prevState);
      activeOption.classList.remove('active');
      activeOption.classList.add('inactive');
      return optionId;
    });
  };

  const handleActiveNavbar = () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('navbar--is-active');
  }

  return (
    <nav className='navbar'>
      <div className="navbar-hamburger">
        <MdMenu
          size={24}
          onClick={handleActiveNavbar} />
      </div>
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
      </ul>
      <div className='navbar-language'>
        {theme === 'dark' ? <MdDarkMode
          onClick={handleTheme}
          className="navbar-theme"
          color='gray' /> : <MdOutlineWbSunny
          onClick={handleTheme}
          className="navbar-theme" />}
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
