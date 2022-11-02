import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../utils/Helper";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ToastComponent from "../ToastComponent";

const MasterUserEdit = () => {
  const [username, setUsername] = useState([]);
  const [email, setEmail] = useState([]);
  const [role, setRole] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const [showToast, setShowToast] = useState(false);
  const [apiResponse, setApiResponse] = useState({});

  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = async () => {
    let dataDummy = [];
    const response = await axios.get(`${BASE_URL}/user/`);
    dataDummy = response.data.data;
    let user = dataDummy.find((e) => e._id == id);

    setUsername(user.username);
    setEmail(user.email);
    setRole(user.role);
  };

  const updateUser = async (e) => {
    e.preventDefault();
    console.log("test", username, email, role, id);
    try {
      await axios.put(`${BASE_URL}/user/${id}`, {
        username,
        email,
        role,
      });
      navigate("/master-user");
    } catch (error) {
      setShowToast(true);
      setApiResponse({
        variant: "danger",
        header: "Error!",
        message:
          error.response.data.code === 403
            ? "Mohon maaf, Anda tidak memiliki hak untuk mengubah data."
            : error.response.data.message,
      });
    }
  };

  const handleClose = () => {
    setShowToast(false);
  };

  return (
    <>
      <ToastComponent
        response={apiResponse}
        show={showToast}
        handleClose={handleClose}
      />
      <div className="container">
        <h3>Edit User</h3>
        <form onSubmit={updateUser}>
          <div className="col-md-12 my-2">
            <label className="form-label">Username</label>
            <input
              type="text"
              placeholder="Masukan Username"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="col-md-12 my-2">
            <label className="form-label">Email</label>
            <input
              type="email"
              placeholder="Masukan Email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="col-md-12 my-2">
            <label className="form-label">Role Saat Ini {role}</label>
            <select
              className="form-control"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option> Pilih Role</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>

          <div className="col-12 my-2">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default MasterUserEdit;
