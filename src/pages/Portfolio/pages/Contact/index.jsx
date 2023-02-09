import { useState } from 'react';
import { Form } from '../Home/components/Form';
import { Header } from '../Home/components/Header';
import { Modal } from './components/Modal';
import { ErrorModal } from './components/Modal/components/ErrorModal';
import { LoadingModal } from './components/Modal/components/LoadingModal';
import { SuccessModal } from './components/Modal/components/SuccessModal';

import './styles.css';

function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalState, setModalState] = useState({
    loading: true,
    success: false,
    error: false
  });

  async function handleEmail() {
    try {
      const formContact = document.querySelector('form');
      // eslint-disable-next-line no-undef
      await emailjs.sendForm(
        'service_xcf4f4j',
        'template_nqy8aeh',
        '#contact-form'
      )
      setModalState((prevState) => ({
        ...prevState,
        loading: false,
        success: true
      }))
      formContact.reset();
    } catch (error) {
      setModalState((prevState) => ({
        ...prevState,
        loading: false,
        error: true
      }));
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
        <Modal
          modalState={{ ...modalState }}
          onLoading={() => <LoadingModal />}
          onSuccess={() => (
            <SuccessModal setStateModal={setModalState} setIsOpen={setIsOpen} />
          )}
          onError={() => (
            <ErrorModal setStateModal={setModalState} setIsOpen={setIsOpen} />
          )}
        />
      )}
    </div>
  );
}

export default Contact;
