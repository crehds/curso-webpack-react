import { StateModal } from '../StateModal';

export function SuccessModal(props) {
  return (
    <StateModal
      stateModal='success'
      iconModal='icon-check-circle'
      titleModal='Mensaje enviado'
      setStateModal={props.setStateModal}
      setIsOpen={props.setIsOpen}
    />
  );
}
