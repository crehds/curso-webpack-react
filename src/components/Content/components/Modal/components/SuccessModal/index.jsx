import React from 'react';
import './styles.css';

export function SuccessModal(props) {
  function handleButton() {
    props.setStateModal((prevState) => ({
      ...prevState,
      loading: true,
      success: false
    }));
    props.setIsOpen(false);
  }
  return (
    <div className='wrappedModal--success'>
      <i className='icon-check-circle success'></i>
      <div className='title--success'>Mensaje enviado</div>
      <button type='button' onClick={handleButton} className='button--success'>
        Aceptar
      </button>
    </div>
  );
}
