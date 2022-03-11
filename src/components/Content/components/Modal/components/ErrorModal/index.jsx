import React from 'react';

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
    <>
      <div>Error en el envío</div>
      <button type='button' onClick={handleButton}>
        Aceptar
      </button>
    </>
  );
}
