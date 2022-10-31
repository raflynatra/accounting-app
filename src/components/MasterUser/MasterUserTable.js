import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../utils/Helper";
import axios from "axios";
import { Link } from "react-router-dom";
import { color } from "../../utils/Helper";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const styles = {
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "20px 0",
  },
  button: {
    backgroundColor: color.primary,
    color: color.white,
    textDecoration: "none",
    "&:hover": {
      backgroundColor: color.secondary,
    },
  },
};

const MasterUserTable = (props) => {
  const [user, setUser] = useState([]);
  const [modal, setModal] = useState([]);

  // Modals
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    console.log("tes", id);
    setModal(id);
    setShow(true);
  };

  useEffect(() => {
    getAllUser();
  }, []);

  const getAllUser = async () => {
    let response = await axios.get(`${BASE_URL}/user`);
    console.log(response.data);
    setUser(response.data.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/user/delete/${id}`);
      getAllUser();
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div style={styles.row}>
        <div>
          <Link
            to="/master-user/create"
            className="btn btn-primary me-2 "
            style={styles.button}
            type="button"
          >
            Tambah User
          </Link>
        </div>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Tanggal Dibuat</th>
            <th scope="col">Tanggal Update</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {user.map((a, index) => (
            <tr key={index}>
              <td>{new Date(a.createdAt).toLocaleString()}</td>
              <td>{new Date(a.updatedAt).toLocaleString()}</td>
              <td>{a.username}</td>
              <td>{a.email}</td>
              <td>{a.role}</td>
              <td>
                <Link
                  to={`/master-user/edit/${a._id}`}
                  className="btn btn-warning mx-2"
                >
                  Ubah
                </Link>
                <Button variant="danger" onClick={() => handleShow(a._id)}>
                  Hapus
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
              deleteUser(modal);
            }}
          >
            Iya, benar!
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MasterUserTable;
