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
    <div className={`wrappedModal--${props.stateModal}`}>
      <i className={`${props.iconModal} ${props.stateModal}`}></i>
      <div className={`title--${props.stateModal}`}>{props.titleModal}</div>
      <button
        type='button'
        onClick={handleButton}
        className={`button--${props.stateModal}`}
      >
        Aceptar
      </button>
    </div>
  );
}
