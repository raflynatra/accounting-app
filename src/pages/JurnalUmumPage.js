import React, { useEffect, useState } from "react";
import { getAllJurnal } from "../utils/Provider";
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

function JurnalUmumPage() {
  const [jurnalList, setJurnalList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setJurnalList(getAllJurnal());
  }, []);

  return (
    <div className="container">
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
            placeholder="Cari jurnal"
            className="form-control"
          />
        </div>
      </div>
      <div>
        <JurnalUmumTable jurnalList={jurnalList} />
      </div>
    </div>
  );
}

export default JurnalUmumPage;
