import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  createJurnal,
  getAllPerkiraan,
  updateJurnal,
} from "../../utils/Provider";

function JurnalUmumForm({ isEdit }) {
  const [jurnal, setJurnal] = useState({});
  const location = useLocation();
  const [perkiraanList, setPerkiraanList] = useState([]);

  const getPerkiraanList = async () => {
    let response = await getAllPerkiraan();
    setPerkiraanList(response.data.data);
  };

  useState(() => {
    isEdit ? setJurnal(location.state) : setJurnal({});
    getPerkiraanList();
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setJurnal((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = jurnal;
    console.log(payload);

    if (isEdit) {
      let response = await updateJurnal(payload);
      console.log(response);
    } else {
      let response = await createJurnal(payload);
      console.log(response);
    }
  };
  return (
    <div className="container">
      <h3>Tambah Jurnal</h3>
      {JSON.stringify(perkiraanList)}
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
          <select
            className="form-select"
            aria-label="Default select example"
            name="namaPerkiraanJurnal"
            value={jurnal.namaPerkiraanJurnal || ""}
            onChange={handleChange}
          >
            <option value="">Choose Perkiraan</option>
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
