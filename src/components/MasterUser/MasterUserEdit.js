import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../utils/Helper";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ToastComponent from "../ToastComponent";
import { useDispatch } from "react-redux";
import { updateUser } from "../../store/actions/UserAction";

const MasterUserEdit = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState([]);
  const [email, setEmail] = useState([]);
  const [role, setRole] = useState([]);

  const navigate = useNavigate();
  const { id } = useParams();

  const config = {
    headers: {
      "Access-Control-Allow-Origin": true,
      "Content-Type": "application/json",
      authorization: localStorage.getItem("token"),
    },
  };

  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = async () => {
    let dataDummy = [];
    const response = await axios.get(`${BASE_URL}/user/`);
    dataDummy = response.data.data;
    let user = dataDummy.find((e) => e._id === id);

    setUsername(user.username);
    setEmail(user.email);
    setRole(user.role);
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    dispatch(updateUser({ username, email, role }, id, config, navigate));
  };

  return (
    <div className="container">
      <h3>Edit User</h3>
      <form onSubmit={(e) => handleUpdate(e)}>
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
            <option value="">Pilih Role</option>
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
  );
};

export default MasterUserEdit;
