import React from 'react';

import './styles.css';

export function Contact() {
  function onSubmit(e) {
    e.preventDefault();
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
      <form action='' onSubmit={onSubmit}>
        <div>
          <label htmlFor=''>Nombre</label>
          <input type='text' placeholder='Nombre' />
        </div>

        <div>
          <label htmlFor=''>E-mail</label>
          <input type='email' placeholder='Correo electrónico' />
        </div>

        <div>
          <label htmlFor=''>Mensaje</label>
          <textarea name='' id='' cols='30' rows='10'></textarea>
        </div>
        <div>
          <button type='submit'>Enviar</button>
        </div>
      </form>
    </div>
  );
}
