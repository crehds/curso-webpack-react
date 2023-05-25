import PAGES from './pages';
import './styles.css';

export function handleContent({ page = '', user = {} }) {
  return PAGES[page]({ user });
}

export function Content(props) {
  const { page, user } = props;
  return (
    <div className='content'>
      {handleContent({ page, user })}
    </div>
  );
}
