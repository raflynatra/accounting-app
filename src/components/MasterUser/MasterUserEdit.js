import React, { useState, useEffect } from 'react'
import { BASE_URL } from "../../utils/Helper";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const MasterUserEdit = () => {

  const [username, setUsername] = useState([]);
  const [email, setEmail] = useState([]);
  // const [password, setPassword] = useState([]);
  const [role, setRole] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();

  }, [])


  const getUserById = async () => {
    let dataDummy = []
    const response = await axios.get(`${BASE_URL}/user/`);
    console.log("aaaa", response.data.data);
    dataDummy = response.data.data;
    let user = dataDummy.find(e => e._id == id)


    console.log("user", user);
    console.log("asa", dataDummy, id);
    setUsername(user.username);
    setEmail(user.email);
    // setPassword(response.data.data.password);
    setRole(user.role);
  }

  const updateUser = async (e) => {
    e.preventDefault();
    console.log("test", username, email, role, id);
    try {
      await axios.put(`${BASE_URL}/user/${id}`, {
        username,
        email,
        // password,
        role
      })
      navigate("/master-user");
    } catch (error) {
      console.log(error);
    }

  };


  return (
    <div className="container">
      <h3>Edit User</h3>
      <form onSubmit={updateUser}>
        <div className="col-md-12 my-2">
          <label className="form-label">Username</label>
          <input type="text" placeholder='Masukan Username' className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="col-md-12 my-2">
          <label className="form-label">Email</label>
          <input type="email" placeholder='Masukan Email' className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="col-md-12 my-2">
          <label className="form-label" >Role Saat Ini {role}</label>
          {/* <input type="text" className="form-control" value={role} onChange={(e) => setRole(e.target.value)} /> */}
          <select className="form-control" value={role} onChange={(e) => setRole(e.target.value)} >
            <option > Pilih Role</option>
            <option value="admin" >Admin</option>
            <option value="user" >User</option>
          </select>
        </div>

        <div className="col-12 my-2">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>


    </div>
  )
}

export default MasterUserEdit