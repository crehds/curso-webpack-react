import './styles.css';

export function NavBar({
  appContent, setAppContent, setActiveOptionNavBar
}) {
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
          id='portfolio'
          className='option inactive'
          onClick={handleOption}>
          Portfolio
        </a>
        <a
          id='contact'
          className='option inactive'
          onClick={handleOption}>
          Contact
        </a>
      </ul>
    </nav>
  );
}
