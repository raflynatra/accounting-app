import React from "react";
import { Button, Modal } from "react-bootstrap";

function DeleteModal({ show, handleClose, handleDelete, currId }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton className="bg-warning bg-opacity-75">
        <Modal.Title>Perhatian!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Apakah Anda yakin ingin menghapus data ini?</h5>
        <p>
          Data akan terhapus dan perubahan ini tidak dapat dikembalikan
          kemudian.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Batal
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            handleDelete(currId);
            handleClose();
          }}
        >
          Iya, benar!
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteModal;
