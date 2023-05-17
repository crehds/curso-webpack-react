
import { useTranslation } from 'react-i18next';
import { Loader2 } from '../../../../../../loaders/loader2';
import './styles.css';

export function ContactModal(props) {
  const { t } = useTranslation();
  const {
    state, handleIsOpen, iconModal
  } = props;

  function handleButton() {
    handleIsOpen();
  }

  if (state === 'loading') return <Loader2 />

  return (
    <div className={`wrappedModal wrappedModal--${state}`}>
      <i className={`${iconModal} ${state}`}></i>
      <div className={`titleModal`}>{t('portfolio.pages.contact.modal.title')}</div>
      <button
        type='button'
        onClick={handleButton}>
        {t('portfolio.pages.contact.modal.button')}
      </button>
    </div>
  );
}
