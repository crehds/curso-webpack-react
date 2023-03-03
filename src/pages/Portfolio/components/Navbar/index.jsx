import { useTranslation } from 'react-i18next';
import './styles.css';

export function NavBar({
  appContent, setAppContent, setActiveOptionNavBar
}) {
  const { i18n } = useTranslation();

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
          Home
        </a>
        <a
          id='about'
          className='option inactive'
          onClick={handleOption}>
          About Me
        </a>
        <a
          id='projects'
          className='option inactive'
          onClick={handleOption}>
          Projects
        </a>
        <a
          id='contact'
          className='option inactive'
          onClick={handleOption}>
          Contact
        </a>
        <div>
          <button onClick={() => handleLanguage('en')}>EN</button>
          <button onClick={() => handleLanguage('es')}>ES</button>
        </div>
      </ul>
    </nav>
  );
}
