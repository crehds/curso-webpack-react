
import { Modal } from '../../../components/Modal';

export function StateModal(props) {
  const {
    modalState, onLoading, onSuccess, onError
  } = props;
  return (
    <Modal>
      {modalState === "loading" && onLoading()}
      {modalState === "success" && onSuccess()}
      {modalState === "error" && onError()}
    </Modal>
  )
}
