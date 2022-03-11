import React from 'react';

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
    <>
      <div>Éxito</div>
      <button type='button' onClick={handleButton}>
        Aceptar
      </button>
    </>
  );
}
