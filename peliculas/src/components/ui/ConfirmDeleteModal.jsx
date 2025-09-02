import { Modal, Button } from "react-bootstrap";

function ConfirmDeleteModal({ show, handleClose, handleConfirm, movie }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Eliminar película</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        ¿Seguro que deseas eliminar la película <strong>{movie?.titulo}</strong>
        ?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={handleConfirm}>
          Eliminar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmDeleteModal;
