import React from 'react';

import './styles.css';

export function Contact() {
  function onSubmit(e) {
    e.preventDefault();
    emailjs
      .sendForm('service_xcf4f4j', 'template_nqy8aeh', '#contact-form')
      .then(() => console.log('success'));
  }
  return (
    <div className='Contact'>
      <div className='contact--title'>
        <h2>Trabajemos juntos</h2>
      </div>
      <div className='contact--wp'>
        <p>
          Escríbeme a mi{' '}
          <a href='https://wa.me/51960265942' target='_blank'>
            <i className='icon-whatsapp'></i>
          </a>
          o envíame un{' '}
          <a href='https://wa.me/51960265942' target='_blank'>
            <i className='icon-gmail'></i>
          </a>
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
          <label htmlFor=''>Mensaje</label>
          <textarea name='message' id='' cols='30' rows='10'></textarea>
        </div>
        <div>
          <button type='submit'>Enviar</button>
        </div>
      </form>
    </div>
  );
}
