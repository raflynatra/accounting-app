import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  createJurnal,
  getAllPerkiraan,
  updateJurnal,
} from "../../utils/Provider";
import { formatDate } from "../../utils/Helper";

function JurnalUmumForm({ isEdit }) {
  const [jurnal, setJurnal] = useState({});
  const [perkiraanList, setPerkiraanList] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const config = {
    headers: {
      "Access-Control-Allow-Origin": true,
      "Content-Type": "application/json",
      authorization: localStorage.getItem("token"),
    },
  };

  const getPerkiraanList = async () => {
    let response = await getAllPerkiraan(config);
    setPerkiraanList(response.data);
  };

  useState(() => {
    isEdit ? setJurnal(location.state) : setJurnal({});
    getPerkiraanList();
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    if (name === "debet" || name === "kredit") {
      const re = /^[0-9\b]+$/;
      if (value === "" || re.test(value)) {
        setJurnal((values) => ({ ...values, [name]: value }));
      }
    } else {
      setJurnal((values) => ({ ...values, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { debet, kredit, ...data } = jurnal;

    let payload = {
      ...data,
      debet: parseInt(debet),
      kredit: parseInt(kredit),
    };

    if (jurnal.tanggalJurnal === undefined) {
      payload = {
        ...payload,
        tanggalJurnal: formatDate(new Date()),
      };
    }

    if (isEdit) {
      let response = await updateJurnal(payload, config);
    } else {
      let response = await createJurnal(payload, config);
    }

    navigate("/jurnal-umum");
  };
  return (
    <div className="container">
      <h3>Tambah Jurnal</h3>
      <form className="needs-validation" onSubmit={handleSubmit}>
        <div className="col-md-12 my-2">
          <label className="form-label">Tanggal</label>
          <input
            type="date"
            className="form-control"
            name="tanggalJurnal"
            value={
              jurnal.tanggalJurnal
                ? formatDate(jurnal.tanggalJurnal)
                : formatDate(new Date())
            }
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-12 my-2">
          <label className="form-label">Uraian</label>
          <input
            type="text"
            className="form-control"
            name="uraian"
            placeholder="Masukkan uraian jurnal"
            value={jurnal.uraian || ""}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-12 my-2">
          <label className="form-label">Nomor Bukti</label>
          {jurnal.nomerBukti ? (
            <input
              type="text"
              className="form-control"
              name="nomerBukti"
              placeholder="Masukkan nomor bukti jurnal"
              value={jurnal.nomerBukti || ""}
              onChange={handleChange}
              required
            />
          ) : (
            <input
              type="number"
              className="form-control"
              placeholder="Masukkan nomor bukti jurnal"
              name="nomerBukti"
              value={jurnal.nomerBukti || 0}
              onChange={handleChange}
              required
            />
          )}
        </div>

        <div className="col-md-12 my-2">
          <label className="form-label">Nama Perkiraan Jurnal</label>
          <select
            className="form-select"
            aria-label="Default select example"
            name="namaPerkiraanJurnal"
            value={jurnal.namaPerkiraanJurnal || ""}
            onChange={handleChange}
            required
          >
            <option value="">Pilih Perkiraan Jurnal</option>
            {perkiraanList.map((item) => (
              <option value={item.nama_perkiraan} key={item.kode_perkiraan}>
                {item.nama_perkiraan}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-12 my-2">
          <label className="form-label">Debit</label>
          <input
            type="text"
            className="form-control"
            name="debet"
            placeholder="Masukkan nominal debit"
            value={jurnal.debet || ""}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-12 my-2">
          <label className="form-label">Kredit</label>
          <input
            type="text"
            className="form-control"
            name="kredit"
            placeholder="Masukkan nominal kredit"
            value={jurnal.kredit || ""}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-12 my-2">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default JurnalUmumForm;
