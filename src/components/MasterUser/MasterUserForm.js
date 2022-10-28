import React, { useState } from 'react'
import { BASE_URL } from "../../utils/Helper";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const MasterUserForm = () => {
  const [username, setUsername] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [role, setRole] = useState([]);
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${BASE_URL}/user/signup`, {
        username,
        email,
        password,
        role
      })
      navigate("/master-user");
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className="container">
      <h3>Tambah User</h3>
      <form onSubmit={saveUser}>
        <div className="col-md-12 my-2">
          <label className="form-label">Username</label>
          <input type="text" placeholder='Masukan Username' className="form-control" onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="col-md-12 my-2">
          <label className="form-label">Email</label>
          <input type="email" placeholder='Masukan Email' className="form-control" onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="col-md-12 my-2">
          <label className="form-label" >Role</label>
          {/* <input type="text" className="form-control" value={role} onChange={(e) => setRole(e.target.value)} /> */}
          <select className="form-control"   onChange={(e) => setRole(e.target.value)}>
            <option>Pilih Role</option>
            <option>Admin</option>
            <option>User</option>
          </select>
        </div>

        <div className="col-md-12 my-2">
          <label className="form-label">Password</label>
          <input type="password" placeholder='Masukan Password' className="form-control"  onChange={(e) => setPassword(e.target.value)} />
          <p className='text-danger'>* password berisi 6 karakter</p>
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

export default MasterUserForm