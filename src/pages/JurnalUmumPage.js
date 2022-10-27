import React, { useEffect, useState } from "react";
import { deleteJurnal, getAllJurnal } from "../utils/Provider";
import { color } from "../utils/Helper";
import { useNavigate } from "react-router-dom";
import JurnalUmumTable from "../components/JurnalUmum/JurnalUmumTable";

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

function JurnalUmumPage({ type, userRole }) {
  const [jurnalList, setJurnalList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const getJurnalList = async () => {
    let response = await getAllJurnal();
    setJurnalList(response.data);
  };

  useEffect(() => {
    getJurnalList();
  }, []);

  const handleDelete = async (id) => {
    await deleteJurnal(id);
    setJurnalList(jurnalList.filter((item) => item._id !== id));
  };

  return (
    <div className="container">
      {type === "dashboard" ? (
        <div style={styles.row}>
          <h3>Tabel Jurnal Umum</h3>
          <button
            className="btn"
            style={styles.button}
            onClick={() => navigate("/jurnal-umum")}
          >
            Lihat Tabel Selengkapnya
          </button>
        </div>
      ) : (
        <div style={styles.row}>
          <div>
            <button
              className="btn"
              style={styles.button}
              onClick={() => navigate("/jurnal-umum/create")}
            >
              Tambah Jurnal
            </button>
          </div>
          <div>
            <input
              type="text"
              placeholder="Cari nomor bukti jurnal"
              className="form-control"
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
        </div>
      )}
      <div>
        <JurnalUmumTable
          jurnalList={jurnalList}
          handleDelete={handleDelete}
          navigate={navigate}
          searchValue={searchValue}
          type={type}
          isBukuBesar={userRole === "ADMIN" ? false : true}
        />
      </div>
    </div>
  );
}

export default JurnalUmumPage;
