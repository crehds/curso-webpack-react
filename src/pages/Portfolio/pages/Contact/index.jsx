import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { ContactModal } from './components/ContactModal';
import { StateModal } from './container/StateModal';


import './styles.css';

function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalState, setModalState] = useState("loading");
  const { t } = useTranslation();

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
    setModalState("loading");
  }

  async function handleEmail(form) {
    try {
      const formData = new FormData(form)
      const data = Object.fromEntries(formData.entries());
      if (data.name === '' || data['e-mail'] === '' || data.phone === '') {
        throw new Error('Todos los campos son obligatorios');
      }

      // eslint-disable-next-line no-undef
      await emailjs.sendForm(
        'service_xcf4f4j',
        'template_nqy8aeh',
        '#contact-form'
      )
      setModalState("success")
      form.reset();
    } catch (error) {
      setModalState("error");
      console.log(error);
    }
  }

  return (
    <div className='Contact'>
      <Header />
      <Form
        handleEmail={handleEmail}
        setIsOpen={setIsOpen}
      />
      {isOpen && (
        <StateModal
          modalState={modalState}
          onLoading={() => (
            <ContactModal
              state='loading' />
          )}
          onSuccess={() => (
            <ContactModal
              state='success'
              handleIsOpen={handleIsOpen}
              iconModal='icon-check-circle'
              titleModal={t('portfolio.pages.contact.modal.success.title')}
              messageModal={t('portfolio.pages.contact.modal.success.message')}
            />
          ) }
          onError={() => (
            <ContactModal
              state='error'
              handleIsOpen={handleIsOpen}
              iconModal='icon-x-altx-alt'
              titleModal={t('portfolio.pages.contact.modal.error.title')}
              messageModal={t('portfolio.pages.contact.modal.error.message')}
            />
          ) }
        >
        </StateModal>
      )}
    </div>
  );
}

export default Contact;
