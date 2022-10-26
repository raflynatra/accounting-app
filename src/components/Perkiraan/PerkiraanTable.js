import React, { useState, useEffect } from "react";
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

export const PerkiraanTable = (props) => {
  const [perkiraan, setPerkiraan] = useState([]);
  const [perkiraanTemporary, setPerkiraanTemporary] = useState([]);

  useEffect(() => {
    getAllPerkiraan();
  }, []);

  const getAllPerkiraan = async () => {
    let response = await axios.get(`${BASE_URL}/perkiraan`);
    setPerkiraan(response.data.data);
    console.log(response.data);
    setPerkiraanTemporary(response.data.data);
  };

  // SEARCH
  const handleSearch = (e) => {
    let perkiraanSearch = perkiraan.filter((a) =>
      a.nama_perkiraan.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setPerkiraanTemporary(perkiraanSearch);
  };

  // DELETE
  const deletePerkiraan = async (id) => {
    // axios.delete(`${BASE_URL}/perkiraan/delete/${id}`).then((e)=>{
    //     console.log(e)
    //     getAllPerkiraan();
    // }).catch(error => {
    //     console.log("error")
    // })
    try {
      await axios.delete(`${BASE_URL}/perkiraan/delete/${id}`);
      getAllPerkiraan();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      {props.type === "dashboard" ? (
        <div style={styles.row}>
          <h3>Tabel Perkiraan</h3>
          <div>
            <Link
              to="/perkiraan"
              className="btn btn-primary me-2 "
              style={styles.button}
              type="button"
            >
              Lihat Tabel Selengkapnya
            </Link>
          </div>
        </div>
      ) : (
        <div style={styles.row}>
          <div>
            <Link
              to="/perkiraan/create"
              className="btn btn-primary me-2 "
              style={styles.button}
              type="button"
            >
              Tambah Perkiraan
            </Link>
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
      )}

      <table className="table table-striped">
        <thead>
          {props.type === "dashboard" ? (
            <tr>
              <th scope="col">Tanggal</th>
              <th scope="col">Kode Perkiraan</th>
              <th scope="col">Nama Perkiraan</th>
              <th scope="col">Kelompok Akun</th>
              <th scope="col">Kelompok Laporan</th>
            </tr>
          ) : (
            <tr>
              <th scope="col">Tanggal</th>
              <th scope="col">Kode Perkiraan</th>
              <th scope="col">Nama Perkiraan</th>
              <th scope="col">Kelompok Akun</th>
              <th scope="col">Kelompok Laporan</th>
              <th scope="col">Action</th>
            </tr>
          )}
        </thead>
        <tbody>
          {perkiraanTemporary.map((a, index) =>
            props.type === "dashboard" ? (
              index < 5 ? (
                <tr key={index}>
                  <td>{new Date(a.updatedAt).toLocaleString()}</td>
                  <td>{a.kode_perkiraan}</td>
                  <td>{a.nama_perkiraan}</td>
                  <td>{a.kelompok_akun}</td>
                  <td>{a.kelompok_laporan}</td>
                </tr>
              ) : (
                ""
              )
            ) : (
              <tr key={index}>
                <td>{new Date(a.updatedAt).toLocaleString()}</td>
                <td>{a.kode_perkiraan}</td>
                <td>{a.nama_perkiraan}</td>
                <td>{a.kelompok_akun}</td>
                <td>{a.kelompok_laporan}</td>
                <td>
                  <Link
                    to={`/perkiraan/edit/${a.kode_perkiraan}`}
                    className="btn btn-warning mx-2"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    type="button"
                    onClick={() => {
                      deletePerkiraan(a.kode_perkiraan);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};
