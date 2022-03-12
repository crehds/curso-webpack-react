import React from 'react';
import { StateModal } from '../StateModal';

export function ErrorModal(props) {
  return (
    <StateModal
      stateModal='error'
      iconModal='icon-x-altx-alt'
      titleModal='Ocurrió un error'
      setStateModal={props.setStateModal}
      setIsOpen={props.setIsOpen}
    />
  );
}
