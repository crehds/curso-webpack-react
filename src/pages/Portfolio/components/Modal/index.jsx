import ReactDom from 'react-dom';
import './styles.css';

export function Modal(props) {
  const { children } = props;
  return ReactDom.createPortal(
    <div className='ModalBackground'>
      {children}
    </div>,
    document.getElementById('modal')
  );
}
