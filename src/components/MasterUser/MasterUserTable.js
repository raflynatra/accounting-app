import React, { useState, useEffect } from "react";
import { formatDateTable } from "../../utils/Helper";
import { Link } from "react-router-dom";
import { color } from "../../utils/Helper";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getAllUser } from "../../store/actions/UserAction";

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

const MasterUserTable = () => {
  const dispatch = useDispatch();
  const { userList, status } = useSelector((state) => state.userReducer);
  const [id, setId] = useState(null);

  // Modals
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setId(id);
    setShow(true);
  };

  const config = {
    headers: {
      "Access-Control-Allow-Origin": true,
      "Content-Type": "application/json",
      authorization: localStorage.getItem("token"),
    },
  };

  useEffect(() => {
    getUserList();
  }, []);

  const getUserList = async () => {
    dispatch(getAllUser());
  };

  const handleDelete = async (id) => {
    dispatch(deleteUser(id, config));

    handleClose();
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
            <th scope="col">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {userList.length > 0 ? (
            userList.map((a, index) =>
              status === "Loading" ? (
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
                    <Button variant="danger" onClick={() => handleShow(a._id)}>
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
              handleDelete(id);
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
