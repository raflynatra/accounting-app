import React, { useState } from 'react'
import { BASE_URL } from "../../utils/Helper";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PerkiraanForm = () => {

    const [kode_perkiraan, setKodePerkiraan] = useState("");
    const [nama_perkiraan, setNamaPerkiraan] = useState("");
    const [kelompok_akun, setKelompokAkun] = useState("");
    const navigate = useNavigate();
    const config = {
        headers: {
            "Access-Control-Allow-Origin": true,
            "Content-Type": "application/json",
            authorization: localStorage.getItem("token"),
        },
    };
    const savePerkiraan = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${BASE_URL}/perkiraan`, {
                kode_perkiraan,
                nama_perkiraan,
                kelompok_akun
            }, config)
            navigate("/perkiraan");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container">
            <h3>Tambah Perkiraan</h3>
            <form onSubmit={savePerkiraan}>
                <div className="col-md-12 my-2">
                    <label className="form-label">Kode Perkiraan</label>
                    <input type="text" className="form-control" value={kode_perkiraan} onChange={(e) => setKodePerkiraan(e.target.value)} />
                </div>
                <div className="col-md-12 my-2">
                    <label className="form-label">Nama Perkiraan</label>
                    <input type="text" className="form-control" value={nama_perkiraan} onChange={(e) => setNamaPerkiraan(e.target.value)} />
                </div>

                <div className="col-md-12 my-2">
                    <label className="form-label">Kelompok Akun</label>
                    <input type="text" className="form-control" value={kelompok_akun} onChange={(e) => setKelompokAkun(e.target.value)} />

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

export default PerkiraanForm