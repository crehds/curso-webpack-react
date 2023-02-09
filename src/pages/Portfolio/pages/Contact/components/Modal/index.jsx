import ReactDom from 'react-dom';
import './styles.css';

export function Modal(props) {
  return ReactDom.createPortal(
    <div className='ModalBackground'>
      {props.modalState.loading && props.onLoading()}
      {props.modalState.success && props.onSuccess()}
      {props.modalState.error && props.onError()}
    </div>,
    document.getElementById('modal')
  );
}
