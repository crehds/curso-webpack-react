import React from 'react';
import './styles.css';

export function ErrorModal(props) {
  function handleButton() {
    props.setStateModal((prevState) => ({
      ...prevState,
      loading: true,
      error: false
    }));
    props.setIsOpen(false);
  }
  return (
    <div className='wrappedModal--error'>
      <i className='icon-x-altx-alt error'></i>
      <div className='title--success'>Ocurrió un error</div>
      <button type='button' onClick={handleButton} className='button--error'>
        Aceptar
      </button>
    </div>
  );
}
