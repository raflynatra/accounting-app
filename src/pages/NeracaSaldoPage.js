import React, { useEffect, useState } from "react";
import { color, formatDate } from "../utils/Helper";
import {
  getAllNeracaSaldo,
  getNeracaSaldoByDate,
  getNeracaSaldoPDF,
  getNeracaSaldoPDFByDate,
} from "../utils/Provider";

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

function NeracaSaldoPage() {
  const [neracaSaldoList, setNeracaSaldoList] = useState([]);
  const [total, setTotal] = useState({
    totalDebet: 0,
    totalKredit: 0,
    totalSaldo: 0,
  });
  const [filterValue, setFilterValue] = useState({});

  const config = {
    headers: {
      "Access-Control-Allow-Origin": true,
      "Content-Type": "application/json",
      authorization: localStorage.getItem("token"),
    },
  };

  const getNeracaSaldoList = async () => {
    let response = "";
    let date = new Date();

    if (Object.keys(filterValue).length > 0) {
      if (filterValue.filterPeriode === "bulanan") {
        date = `${date.getFullYear()}/${date.getMonth() + 1}`;
      } else if (filterValue.filterPeriode === "tahunan") {
        date = date.getFullYear();
      } else {
        date = new Date(filterValue.filterPeriode);
        date = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
      }

      response = await getNeracaSaldoByDate(date, config);

      if (response.code === 200) {
        setTotal({
          totalDebet: response.totalDebet,
          totalKredit: response.totalKredit,
          totalSaldo: response.Saldo,
        });
        setNeracaSaldoList(response.data);
      } else {
        setTotal({
          totalDebet: 0,
          totalKredit: 0,
          totalSaldo: 0,
        });
        setNeracaSaldoList({});
      }
    } else {
      response = await getAllNeracaSaldo(config);
      if (response.code === 200) {
        setTotal({
          totalDebet: response.totalDebet,
          totalKredit: response.totalKredit,
          totalSaldo: response.Saldo,
        });
        setNeracaSaldoList(response.data);
      } else {
        setTotal({
          totalDebet: 0,
          totalKredit: 0,
          totalSaldo: 0,
        });
        setNeracaSaldoList({});
      }
    }
  };

  const downloadPDF = async () => {
    let response = "";
    let date = new Date();

    if (Object.keys(filterValue).length > 0) {
      if (filterValue.filterPeriode === "bulanan") {
        date = `${date.getFullYear()}/${date.getMonth() + 1}`;
        response = await getNeracaSaldoPDFByDate(date);
      } else if (filterValue.filterPeriode === "tahunan") {
        date = date.getFullYear();
        response = await getNeracaSaldoPDFByDate(date);
      } else {
        date = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDay()}`;
        response = await getNeracaSaldoPDFByDate(date);
      }
      if (response.status === 200) {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute(
          "download",
          `LAPORAN-NERACA_SALDO-ACCOUNTING-${date}.pdf`
        );
        document.body.appendChild(link);
        link.click();
      }
    } else {
      response = await getNeracaSaldoPDF();
      if (response.status === 200) {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `LAPORAN-NERACA_SALDO-ACCOUNTING.pdf`);
        document.body.appendChild(link);
        link.click();
      }
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFilterValue((values) => ({ ...values, [name]: value }));
  };

  const clearFilter = () => {
    setFilterValue({});
  };

  useEffect(() => {
    getNeracaSaldoList();
  }, [filterValue]);

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
        <div className="col">
          <div className="row pt-4" style={styles.row}>
            <div>
              <h5 style={styles.floatText}>Laporan Neraca Saldo</h5>
            </div>
            <div className="col">
              <h6>Total Debit</h6>
              <h5>{`Rp${total.totalDebet.toLocaleString("id")}`}</h5>
            </div>
            <div className="col">
              <h6>Total Kredit</h6>
              <h5>{`Rp${total.totalKredit.toLocaleString("id")}`}</h5>
            </div>
            <div className="col">
              <h6>Total Saldo</h6>
              <h5>{`Rp${total.totalSaldo.toLocaleString("id")}`}</h5>
            </div>
          </div>
        </div>
      </div>
      <div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Kode Perkiraan</th>
              <th>Nama Perkiraan</th>
              <th>Debit</th>
              <th>Kredit</th>
              <th>Saldo</th>
            </tr>
          </thead>
          <tbody>
            {neracaSaldoList.length > 0 ? (
              neracaSaldoList.map((neraca, index) => (
                <tr key={index}>
                  <td>{neraca._id.kodePerkiraan}</td>
                  <td>{neraca._id.namaPerkiraan}</td>
                  <td>{`Rp${neraca.Debet.toLocaleString("id")}`}</td>
                  <td>{`Rp${neraca.Kredit.toLocaleString("id")}`}</td>
                  <td>{`Rp${(neraca.Debet - neraca.Kredit).toLocaleString(
                    "id"
                  )}`}</td>
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
}

export default NeracaSaldoPage;
