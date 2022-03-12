import React from 'react';
import './styles.css';

export function StateModal(props) {
  function handleButton() {
    props.setStateModal((prevState) => ({
      ...prevState,
      loading: true,
      [props.stateModal]: false
    }));

    props.setIsOpen(false);
  }
  return (
    <div className={`wrappedModal wrappedModal--${props.stateModal}`}>
      <i className={`${props.iconModal} ${props.stateModal}`}></i>
      <div className={`titleModal`}>{props.titleModal}</div>
      <button type='button' onClick={handleButton}>
        Aceptar
      </button>
    </div>
  );
}
