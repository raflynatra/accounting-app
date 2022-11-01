import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../utils/Helper";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const PerkiraanEdit = () => {
  const [kode_perkiraan, setKodePerkiraan] = useState("");
  const [nama_perkiraan, setNamaPerkiraan] = useState("");
  const [kelompok_akun, setKelompokAkun] = useState("");

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
    getPerkiraanById();
  }, []);

  const getPerkiraanById = async () => {
    const response = await axios.get(`${BASE_URL}/perkiraan/${id}`, config);
    setKodePerkiraan(response.data.data.kode_perkiraan);
    setNamaPerkiraan(response.data.data.nama_perkiraan);
    setKelompokAkun(response.data.data.kelompok_akun);
  };

  const updatePerkiraan = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `${BASE_URL}/perkiraan/${id}`,
        {
          kode_perkiraan,
          nama_perkiraan,
          kelompok_akun,
        },
        config
      );
      navigate("/perkiraan");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h3>Edit Perkiraan</h3>
      <form onSubmit={updatePerkiraan}>
        <div className="col-md-12 my-2">
          <label className="form-label">Kode Perkiraan</label>
          <input
            type="text"
            className="form-control"
            value={kode_perkiraan}
            onChange={(e) => setKodePerkiraan(e.target.value)}
          />
        </div>
        <div className="col-md-12 my-2">
          <label className="form-label">Nama Perkiraan</label>
          <input
            type="text"
            className="form-control"
            value={nama_perkiraan}
            onChange={(e) => setNamaPerkiraan(e.target.value)}
          />
        </div>

        <div className="col-md-12 my-2">
          <label className="form-label">Kelompok Akun</label>
          <input
            type="text"
            className="form-control"
            value={kelompok_akun}
            onChange={(e) => setKelompokAkun(e.target.value)}
          />
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

export default PerkiraanEdit;
