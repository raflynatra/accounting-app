import React, { useState, useEffect } from "react";
import { BASE_URL, formatDateTable } from "../../utils/Helper";
import axios from "axios";
import { Link } from "react-router-dom";
import { color } from "../../utils/Helper";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ToastComponent from "../ToastComponent";

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
  const [showToast, setShowToast] = useState(false);
  const [apiResponse, setApiResponse] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setModal(id);
    setShow(true);
  };

  const [isLoading, setIsLoading] = useState(true);

  const config = {
    headers: {
      "Access-Control-Allow-Origin": true,
      "Content-Type": "application/json",
      authorization: localStorage.getItem("token"),
    },
  };

  useEffect(() => {
    getAllUser();
  }, []);

  const getAllUser = async () => {
    setUser(Array(3).fill({}));

    let response = await axios.get(`${BASE_URL}/user`);
    setUser(response.data.data);

    setIsLoading(false);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/user/delete/${id}`, config);
      getAllUser();
    } catch (error) {
      setShowToast(true);
      setApiResponse({
        variant: "danger",
        header: "Error!",
        message:
          error.response.data.code === 403
            ? "Mohon maaf, Anda tidak memiliki hak untuk menghapus data."
            : error.response.data.message,
      });
    }
    handleClose();
  };

  return (
    <>
      <ToastComponent
        response={apiResponse}
        show={showToast}
        handleClose={() => setShowToast(false)}
      />
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
              <th scope="col">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {user.length > 0 ? (
              user.map((a, index) =>
                isLoading ? (
                  <tr key={index}>
                    <td>
                      <p className="placeholder-glow">
                        <span className="placeholder col-12 bg-primary"></span>
                      </p>
                    </td>
                    <td>
                      <p className="placeholder-glow">
                        <span className="placeholder col-12 bg-primary"></span>
                      </p>
                    </td>
                    <td>
                      <p className="placeholder-glow">
                        <span className="placeholder col-12 bg-primary"></span>
                      </p>
                    </td>
                    <td>
                      <p className="placeholder-glow">
                        <span className="placeholder col-12 bg-primary"></span>
                      </p>
                    </td>
                    <td>
                      <p className="placeholder-glow">
                        <span className="placeholder col-12 bg-primary"></span>
                      </p>
                    </td>
                    <td>
                      <p className="placeholder-glow">
                        <span className="placeholder col-12 bg-primary"></span>
                      </p>
                    </td>
                  </tr>
                ) : (
                  <tr key={index}>
                    <td>{formatDateTable(a.createdAt)}</td>
                    <td>{formatDateTable(a.updatedAt)}</td>
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
                      <Button
                        variant="danger"
                        onClick={() => handleShow(a._id)}
                      >
                        Hapus
                      </Button>
                    </td>
                  </tr>
                )
              )
            ) : (
              <tr>
                <td
                  colSpan={6}
                  className="text-center"
                  style={{ border: 0, backgroundColor: color.tierary }}
                >
                  Data tidak tersedia
                </td>
              </tr>
            )}
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
    </>
  );
};

export default MasterUserTable;
