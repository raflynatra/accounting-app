import React, { useState, useEffect, useRef } from "react";
import { BASE_URL } from "../utils/Helper";
import axios from "axios";
import { color } from "../utils/Helper";
import { useReactToPrint } from "react-to-print";

const styles = {
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px",
    margin: "10px 0",
    border: `1px solid #8da9fc`,
    borderRadius: "10px",
    minHeight: "102px",
    position: "relative",
  },
  row1: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "10px 0",
    minHeight: "102px",
    position: "relative",
  },
  floatText: {
    position: "absolute",
    top: -13,
    left: 15,
    backgroundColor: color.tierary,
    padding: "0 5px",
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

const LabaRugiPage = () => {
  const [labaRugi, setLabaRugi] = useState([]);
  const [labaRugiTemporary, setLabaRugiTemporary] = useState([]);
  const [total, setTotal] = useState("");

  useEffect(() => {
    getAllLabaRugi();
  }, []);

  const getAllLabaRugi = async () => {
    let response = await axios.get(`${BASE_URL}/labarugi`);
    // let dataTotal = {
    //     totalDebet: response.data.totalDebet,
    //     totalKredit: response.data.totalKredit,
    //     saldo: response.data.saldo
    // }
    setLabaRugi(response.data.data);
    setTotal({
      totalDebet: response.data.totalDebet,
      totalKredit: response.data.totalKredit,
      saldo: response.data.saldo,
    });
    // console.log(response.data)
    setLabaRugiTemporary(response.data.data);
  };

  // SEARCH
  const handleSearch = (e) => {
    console.log(e.target.value);
    let labaRugiSearch = labaRugi.filter((a) =>
      a._id.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setLabaRugiTemporary(labaRugiSearch);
    console.log(labaRugi);
  };

  // PRINT
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="container">
      <div style={styles.row1}>
        <div className="row pt-2" style={styles.row}>
          <div>
            <h4 style={styles.floatText}>Laporan Laba Rugi</h4>
          </div>
          <div className="col">
            <h6>Total Debit</h6>
            <h5>{`Rp ${parseInt(total.totalDebet).toLocaleString("id")}`}</h5>
          </div>
          <div className="col">
            <h6>Total Kredit</h6>
            <h5>{`Rp ${parseInt(total.totalKredit).toLocaleString("id")}`}</h5>
          </div>
          <div className="col">
            <h6>Total Saldo</h6>
            <h5>{`Rp ${parseInt(total.saldo).toLocaleString("id")}`}</h5>
          </div>
        </div>

        <div className="row pt-2">
          <input
            type="text"
            placeholder="Cari Laba Rugi"
            className="form-control mb-2"
            onChange={(e) => handleSearch(e)}
          />
          <button
            className="btn btn-sm mt-2 col"
            onClick={handlePrint}
            style={styles.button}
          >
            Cetak
          </button>
        </div>
      </div>
      <div>
        <table className="table table-striped" ref={componentRef}>
          <thead>
            <tr>
              <th scope="col">Tanggal</th>
              <th scope="col">Jenis Biaya</th>
              <th scope="col">Kode Perkiraan</th>
              <th scope="col">Uraian</th>
              <th scope="col">Debet</th>
              <th scope="col">Kredit</th>
            </tr>
          </thead>
          <tbody>
            {labaRugiTemporary.map((a, index) => (
              <tr key={index}>
                <td>{new Date(a.tanggalLabaRugi).toLocaleString()}</td>
                <td>{a._id}</td>
                <td>{a.kodePerkiraan}</td>
                <td>{a.uraian}</td>
                <td>Rp. {a.Debet}</td>
                <td>Rp. {a.Kredit}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* <div>
                    <TotalLabaRugi />
                </div> */}
      </div>
    </div>
  );
};

export default LabaRugiPage;
