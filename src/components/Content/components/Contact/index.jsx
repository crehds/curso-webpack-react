import React, { useState } from 'react';
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
  async function onSubmit(e) {
    e.preventDefault();
    const formContact = document.querySelector('form');
    setIsOpen(true);
    try {
      // eslint-disable-next-line no-undef
      await emailjs.sendForm(
        'service_xcf4f4j',
        'template_nqy8aeh',
        '#contact-form'
      );
      setModalState((prevState) => ({
        ...prevState,
        loading: false,
        success: true
      }));
    } catch (error) {
      setModalState((prevState) => ({
        ...prevState,
        loading: false,
        error: true
      }));
      console.log(error);
    }

    formContact.reset();
  }

  return (
    <div className='Contact'>
      <div className='contact--title'>
        <h2>Trabajemos juntos</h2>
      </div>
      <div className='contact--wp'>
        <p>
          Escríbeme a mi
          <a href='https://wa.me/51960265942' target='_blank'>
            <i className='icon-whatsapp'></i>
          </a>
          o envíame un
          <i className='icon-gmail'></i>
        </p>
      </div>
      <form action='' onSubmit={onSubmit} id='contact-form'>
        <div>
          <label htmlFor=''>Nombre</label>
          <input type='text' placeholder='Nombre' name='from_name' />
        </div>

        <div>
          <label htmlFor=''>E-mail</label>
          <input
            type='email'
            placeholder='Correo electrónico'
            name='from_email'
          />
        </div>

        <div>
          <label htmlFor=''>Teléfono</label>
          <input type='tel' placeholder='Número telefónico' name='from_phone' />
        </div>

        <div>
          <label htmlFor=''>Mensaje</label>
          <textarea
            name='message'
            id=''
            cols='30'
            rows='8'
            placeholder='Déjame un mensaje...'
          ></textarea>
        </div>
        <div>
          <button type='submit'>Enviar</button>
        </div>
      </form>
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