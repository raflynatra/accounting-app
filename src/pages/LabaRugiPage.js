import React, { useState, useEffect } from "react";
import { BASE_URL } from "../utils/Helper";
import axios from "axios";
import { color, formatDate, formatDateTable } from "../utils/Helper";

const styles = {
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px",
    margin: "10px 0",
    border: `1px solid #8da9fc`,
    borderRadius: "10px",
    minHeight: "140px",
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
  const [labaRugiList, setLabaRugiList] = useState([]);
  const [total, setTotal] = useState({});

  const [filterValue, setFilterValue] = useState({});
  const [checked, setChecked] = useState({
    tahunan: false,
    bulanan: false,
  });

  const config = {
    headers: {
      "Access-Control-Allow-Origin": true,
      "Content-Type": "application/json",
      authorization: localStorage.getItem("token"),
    },
  };

  useEffect(() => {
    getLabaRugiList();
  }, [filterValue]);

  const getAllLabaRugi = async () => {
    let response = await axios.get(`${BASE_URL}/labarugi`, config);
    return response.data;
  };

  const getLabaRugiByDate = async (date) => {
    try {
      let response = await axios.get(
        `${BASE_URL}/labarugi/search/${date}`,
        config
      );
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  };

  const getLabaRugiPDF = async () => {
    try {
      let response = await axios({
        url: `${BASE_URL}/laporan/LabaRugi/`,
        method: "GET",
        responseType: "blob", // important
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      return response;
    } catch (error) {
      return error.response;
    }
  };

  const getLabaRugiPDFByDate = async (date) => {
    try {
      let response = await axios({
        url: `${BASE_URL}/laporan/labarugi/${date}`,
        method: "GET",
        responseType: "blob", // important
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      return response;
    } catch (error) {
      return error.response;
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    value === "bulanan"
      ? setChecked((prev) => ({ ...prev, bulanan: true }))
      : setChecked((prev) => ({ ...prev, tahunan: true }));

    setFilterValue((values) => ({ ...values, [name]: value }));
  };

  const clearFilter = () => {
    setFilterValue({});
    setChecked({
      bulanan: false,
      tahunan: false,
    });
  };

  const getLabaRugiList = async () => {
    let response = "";
    let date = new Date();

    if (Object.keys(filterValue).length > 0) {
      if (filterValue.filterPeriode === "bulanan") {
        date = `${date.getFullYear()}/${date.getMonth() + 1}`;
        response = await getLabaRugiByDate(date);
      } else if (filterValue.filterPeriode === "tahunan") {
        date = date.getFullYear();
        response = await getLabaRugiByDate(date);
      } else {
        console.log("c");
        date = filterValue.filterPeriode;
        console.log("z", date);
        let dataCoba = date.split("-");
        date = `${dataCoba[0]}/${dataCoba[1]}/${dataCoba[2]}`;
        console.log(dataCoba);
        response = await getLabaRugiByDate(date);
      }
      if (response.code === 200) {
        setTotal({
          totalDebet: response.totalDebet,
          totalKredit: response.totalKredit,
          totalSaldo: response.totalSaldo,
        });
        setLabaRugiList(response.data);
      } else {
        setTotal({
          totalDebet: 0,
          totalKredit: 0,
          totalSaldo: 0,
        });
        setLabaRugiList({});
      }
    } else {
      response = await getAllLabaRugi();
      if (response.code === 200) {
        setTotal({
          totalDebet: response.totalDebet,
          totalKredit: response.totalKredit,
          totalSaldo: response.totalSaldo,
        });
        setLabaRugiList(response.data);
      } else {
        setTotal({
          totalDebet: 0,
          totalKredit: 0,
          totalSaldo: 0,
        });
        setLabaRugiList({});
      }
    }
  };

  const downloadPDF = async () => {
    let response = "";
    let date = new Date();

    if (Object.keys(filterValue).length > 0) {
      if (filterValue.filterPeriode === "bulanan") {
        date = `${date.getFullYear()}/${date.getMonth() + 1}`;
        response = await getLabaRugiPDFByDate(date);
      } else if (filterValue.filterPeriode === "tahunan") {
        console.log(date);
        date = date.getFullYear();
        response = await getLabaRugiPDFByDate(date);
      } else {
        // date = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDay()}`;
        let dataCoba = date.split("-");
        date = `${dataCoba[0]}/${dataCoba[1]}/${dataCoba[2]}`;
        response = await getLabaRugiPDFByDate(date);
      }
      if (response.status === 200) {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute(
          "download",
          `LAPORAN-LABA_RUGI-ACCOUNTING-${date}.pdf`
        );
        document.body.appendChild(link);
        link.click();
      }
    } else {
      response = await getLabaRugiPDF();
      if (response.status === 200) {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `LAPORAN-LABA_RUGI-ACCOUNTING.pdf`);
        document.body.appendChild(link);
        link.click();
      }
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="row" style={styles.row}>
            <div>
              <h5 style={styles.floatText}>Filter</h5>
            </div>
            <div className="col">
              <label>Periode</label>
              <input
                type="date"
                className="form-control form-control-sm"
                name="filterPeriode"
                value={
                  filterValue.filterPeriode
                    ? formatDate(filterValue.filterPeriode)
                    : formatDate(new Date())
                }
                onChange={handleChange}
              />
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="filterPeriode"
                  value="bulanan"
                  id="filterMonth"
                  onChange={handleChange}
                  checked={checked.bulanan}
                />
                <label className="form-check-label" htmlFor="filterMonth">
                  Bulanan
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="filterPeriode"
                  value="tahunan"
                  id="filterYear"
                  onChange={handleChange}
                  checked={checked.tahunan}
                />
                <label className="form-check-label" htmlFor="filterYear">
                  Tahunan
                </label>
              </div>
            </div>
            <div className="col d-grid gap-1">
              <button
                className="btn btn-sm btn-warning mt-3"
                onClick={clearFilter}
              >
                Hapus Filter
              </button>

              <button
                className="btn btn-sm mt-2"
                style={styles.button}
                onClick={downloadPDF}
              >
                Cetak Laporan
              </button>
            </div>
          </div>
        </div>

        <div className="col ">
          <div className="row pt-4" style={styles.row}>
            <div className=" ">
              <h5 style={styles.floatText}>Laporan Laba Rugi</h5>
            </div>
            <div className="col ">
              <h6>Total Debit</h6>
              <h5>{`Rp${parseInt(total.totalDebet).toLocaleString("id")}`}</h5>
            </div>
            <div className="col ">
              <h6>Total Kredit</h6>
              <h5>{`Rp${parseInt(total.totalKredit).toLocaleString("id")}`}</h5>
            </div>
            <div className="col ">
              <h6>Total Saldo</h6>
              <h5>{`Rp${parseFloat(total.totalSaldo).toLocaleString(
                "id"
              )}`}</h5>
            </div>
          </div>
        </div>
      </div>

      {/* Isi Table DONE */}
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Tanggal</th>
              <th scope="col">Jenis Biaya</th>
              <th scope="col">Kode Perkiraan</th>
              <th scope="col">Debet</th>
              <th scope="col">Kredit</th>
              <th scope="col">Saldo</th>
            </tr>
          </thead>
          <tbody>
            {labaRugiList.length > 0 ? (
              labaRugiList.map((a, index) => (
                <tr key={index}>
                  <td>{formatDateTable(a._id.tanggalJurnal)}</td>
                  <td>{a._id.namaPerkiraan}</td>
                  <td>{a._id.kodePerkiraan}</td>
                  <td>Rp{a.debet.toLocaleString("id")}</td>
                  <td>Rp{a.kredit.toLocaleString("id")}</td>
                  <td>Rp{(a.debet - a.kredit).toLocaleString("id")}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={6}
                  className="text-center"
                  style={{ border: 0, backgroundColor: color.tierary }}
                >
                  Data tidak tersedia
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LabaRugiPage;
