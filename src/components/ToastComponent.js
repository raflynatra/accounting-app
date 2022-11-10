import React from "react";
import { Toast } from "react-bootstrap";

function ToastComponent({ response, show, handleClose }) {
  return (
    <Toast
      className="m-1 position-absolute"
      style={{ bottom: 20, right: 0, zIndex: 10 }}
      bg={response.variant}
      onClose={handleClose}
      show={show}
      delay={3000}
      position="bottom-end"
      autohide
    >
      <Toast.Header>
        <h5 className="me-auto">{`${response.status}!`}</h5>
      </Toast.Header>
      <Toast.Body
        className={
          (response.variant === "danger" || response.variant === "success") &&
          "text-white"
        }
      >
        {response.statusMessage}
      </Toast.Body>
    </Toast>
  );
}

export default ToastComponent;
