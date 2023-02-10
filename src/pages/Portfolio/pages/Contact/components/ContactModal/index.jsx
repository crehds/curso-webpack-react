
import { Loader2 } from '../../../../../../loaders/loader2';
import './styles.css';

export function ContactModal(props) {
  const {
    state, handleIsOpen, iconModal, titleModal
  } = props;

  function handleButton() {
    handleIsOpen();
  }

  if (state === 'loading') return <Loader2 />

  return (
    <div className={`wrappedModal wrappedModal--${state}`}>
      <i className={`${iconModal} ${state}`}></i>
      <div className={`titleModal`}>{titleModal}</div>
      <button
        type='button'
        onClick={handleButton}>
        Aceptar
      </button>
    </div>
  );
}
