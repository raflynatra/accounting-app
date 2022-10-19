import React, { useState, useEffect } from 'react'
import { BASE_URL } from "../../utils/Helper";
import axios from "axios";
import { Link } from "react-router-dom";
// import { } from '../../utils/Provider'
import { color } from "../../utils/Helper";


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

export const PerkiraanTable = () => {

    const [perkiraan, setPerkiraan] = useState([])
    const [perkiraanTemporary, setPerkiraanTemporary] = useState([])

    useEffect(() => {
        getAllPerkiraan();
    }, []);

    const getAllPerkiraan = async () => {
        let response = await axios.get(`${BASE_URL}/perkiraan`);
        setPerkiraan(response.data.data);
        console.log(response.data)
        setPerkiraanTemporary(response.data.data);
    };

    // Searching
    const handleSearch = (e) => {
        let perkiraanSearch = perkiraan.filter(a => a.nama_perkiraan.toLowerCase().includes(e.target.value.toLowerCase()))
        setPerkiraanTemporary(perkiraanSearch)
    }


    return (
        <div className='container'>
            <div style={styles.row}>
                <div>
                    <Link to='/perkiraan/create' className='btn btn-primary me-2 ' style={styles.button} type='button'>Tambah Perkiraan</Link>
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Cari Perkiraan"
                        className="form-control"
                        onChange={(e) => handleSearch(e)}
                    />
                </div>
            </div>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Kode Perkiraan</th>
                        <th scope="col">Nama Perkiraan</th>
                        <th scope="col">Kelompok Akun</th>
                        <th scope="col">Kelompok Laporan</th>
                        <th scope="col">Action</th>

                    </tr>
                </thead>
                <tbody>
                    {perkiraanTemporary.map((a, index) => (

                        <tr>
                            <td>{a.kode_perkiraan}</td>
                            <td>{a.nama_perkiraan}</td>
                            <td>{a.kelompok_akun}</td>
                            <td>{a.kelompok_laporan}</td>
                            <td>
                                <button className="btn btn-warning mx-2">Edit</button>
                                <button className="btn btn-danger mx-2">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}