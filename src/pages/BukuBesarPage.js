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
  const [filterValue, setFilterValue] = useState({});
  const [searchPerkiraan, setSearchPerkiraan] = useState("");
  const [isChecked, setIsChecked] = useState(false);
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
      setJurnalList(response.data);
    } else {
      response = await getAllJurnal();
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

  useEffect(() => {
    getJurnalList();
    getPerkiraanList();
  }, [filterValue]);

  return (
    <div className="container">
      <div className="form-check form-switch">
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          Filter
        </label>
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
      </div>
      {isChecked ? (
        <div style={styles.row}>
          <div className="row">
            <div className="col">
              <label>Kode Perkiraan</label>
              <select
                className="form-select form-select-sm"
                aria-label="multiple select example"
                name="filterPerkiraan"
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
      ) : (
        <></>
      )}
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
