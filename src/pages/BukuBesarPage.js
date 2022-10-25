import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import JurnalUmumTable from "../components/JurnalUmum/JurnalUmumTable";
import { color, formatDate } from "../utils/Helper";
import {
  getAllJurnal,
  getAllPerkiraan,
  getJurnalByDate,
  getJurnalByMonth,
  getJurnalByYear,
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

function BukuBesarPage() {
  const [jurnalList, setJurnalList] = useState([]);
  const [perkiraanList, setPerkiraanList] = useState([]);
  const [total, setTotal] = useState({
    totalDebet: 0,
    totalKredit: 0,
  });
  const [filterValue, setFilterValue] = useState({});
  const [searchPerkiraan, setSearchPerkiraan] = useState("");
  const navigate = useNavigate();

  const getJurnalList = async () => {
    let response = "";
    let date = new Date();

    if (Object.keys(filterValue).length > 0) {
      if (filterValue.filterPeriode === "bulanan") {
        date = `${date.getFullYear()}/${date.getMonth() + 1}`;
        response = await getJurnalByMonth(date);
      } else if (filterValue.filterPeriode === "tahunan") {
        date = date.getFullYear();
        response = await getJurnalByYear(date);
      } else {
        date = filterValue.filterPeriode;
        response = await getJurnalByDate(date);
      }
      setTotal({
        totalDebet: response.totalDebet,
        totalKredit: response.totalKredit,
      });
      setJurnalList(response.data);
    } else {
      response = await getAllJurnal();
      setTotal({
        totalDebet: response.totalDebet,
        totalKredit: response.totalKredit,
      });
      setJurnalList(response.data);
    }
  };

  const getPerkiraanList = async () => {
    let response = await getAllPerkiraan();
    setPerkiraanList(response.data);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFilterValue((values) => ({ ...values, [name]: value }));
  };

  const clearFilter = () => {
    setFilterValue({});
    setSearchPerkiraan("");
  };

  useEffect(() => {
    getJurnalList();
    getPerkiraanList();
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
              <label>Kode Perkiraan</label>
              <select
                className="form-select form-select-sm"
                name="searchPerkiraan"
                value={searchPerkiraan || ""}
                onChange={(e) => setSearchPerkiraan(e.target.value)}
              >
                <option value="">Pilih Perkiraan</option>
                {perkiraanList.map((item) => (
                  <option value={item.nama_perkiraan} key={item.kode_perkiraan}>
                    {`${item.kode_perkiraan} - ${item.nama_perkiraan}`}
                  </option>
                ))}
              </select>

              <button
                className="btn btn-sm btn-warning mt-3"
                onClick={clearFilter}
              >
                Clear Filter
              </button>
            </div>
            <div className="col">
              <label>Periode</label>
              <input
                type="date"
                className="form-control form-control-sm"
                name="filterPeriode"
                value={formatDate(new Date())}
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
          </div>
        </div>
        <div className="col">
          <div className="row pt-4" style={styles.row}>
            <div>
              <h5 style={styles.floatText}>Laporan Buku Besar</h5>
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
              <h5>{`Rp${(total.totalDebet - total.totalKredit).toLocaleString(
                "id"
              )}`}</h5>
            </div>
            <button className="btn btn-sm mt-2" style={styles.button}>
              Cetak Laporan
            </button>
          </div>
        </div>
      </div>
      <div>
        <JurnalUmumTable
          jurnalList={jurnalList}
          navigate={navigate}
          searchValue={searchPerkiraan}
          isBukuBesar={true}
        />
      </div>
    </div>
  );
}

export default BukuBesarPage;
