import { useState } from 'react';
import { Form } from '../Home/components/Form';
import { Header } from '../Home/components/Header';
import { ContactModal } from './components/ContactModal';
import { StateModal } from './container/StateModal';


import './styles.css';

function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalState, setModalState] = useState("loading");

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
    setModalState("loading");
  }

  async function handleEmail() {
    try {
      const formContact = document.querySelector('form');
      // eslint-disable-next-line no-undef
      await emailjs.sendForm(
        'service_xcf4f4j',
        'template_nqy8aeh',
        '#contact-form'
      )
      setModalState("success")
      formContact.reset();
    } catch (error) {
      setModalState("error");
      console.log(error);
    }
  }

  return (
    <div className='Contact'>
      <Header test="carlos" />
      <Form
        handleEmail={handleEmail}
        setIsOpen={setIsOpen}
      />
      {isOpen && (
        <StateModal
          modalState={modalState}
          onLoading={() => (
            <ContactModal
              state="loading" />
          )}
          onSuccess={() => (
            <ContactModal
              state="success"
              handleIsOpen={handleIsOpen}
              iconModal="icon-check-circle"
              titleModal="Mensaje enviado" />
          ) }
          onError={() => (
            <ContactModal
              state="error"
              handleIsOpen={handleIsOpen}
              iconModal="icon-x-altx-alt"
              titleModal="Ocurrió un error" />
          ) }
        >
        </StateModal>
      )}
    </div>
  );
}

export default Contact;
