import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { createJurnal } from "../../utils/Provider";

function JurnalUmumForm({ isEdit }) {
  const [jurnal, setJurnal] = useState({});
  const location = useLocation();

  useState(() => {
    isEdit ? setJurnal(location.state) : setJurnal({});
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setJurnal((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = jurnal;
    console.log(payload);

    // if (isEdit) {
    // } else {
    //   let response = createJurnal(payload);
    //   console.log(response);
    // }
  };
  return (
    <div className="container">
      <h3>Tambah Jurnal</h3>
      <form onSubmit={handleSubmit}>
        <div className="col-md-12 my-2">
          <label className="form-label">Tanggal</label>
          <input
            type="datetime-local"
            className="form-control"
            name="tanggalJurnal"
            value={jurnal.tanggalJurnal || ""}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-12 my-2">
          <label className="form-label">Uraian</label>
          <input
            type="text"
            className="form-control"
            name="uraian"
            value={jurnal.uraian || ""}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-12 my-2">
          <label className="form-label">Nomor Bukti</label>
          <input
            type="text"
            className="form-control"
            name="nomerBukti"
            value={jurnal.nomerBukti || ""}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-12 my-2">
          <label className="form-label">Nama Perkiraan Jurnal</label>
          <input
            type="text"
            className="form-control"
            name="namaPerkiraanJurnal"
            value={jurnal.namaPerkiraanJurnal || ""}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-12 my-2">
          <label className="form-label">Debit</label>
          <input
            type="text"
            className="form-control"
            name="debet"
            value={jurnal.debet || ""}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-12 my-2">
          <label className="form-label">Kredit</label>
          <input
            type="text"
            className="form-control"
            name="kredit"
            value={jurnal.kredit || ""}
            onChange={handleChange}
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
