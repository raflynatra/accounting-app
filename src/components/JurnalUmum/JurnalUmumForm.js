import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  createJurnal,
  getAllPerkiraan,
  updateJurnal,
} from "../../utils/Provider";
import { formatDate, validateInput } from "../../utils/Helper";

function JurnalUmumForm({ isEdit }) {
  const [jurnal, setJurnal] = useState({});
  const [perkiraanList, setPerkiraanList] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const getPerkiraanList = async () => {
    let response = await getAllPerkiraan();
    setPerkiraanList(response.data);
  };

  useState(() => {
    isEdit ? setJurnal(location.state) : setJurnal({});
    getPerkiraanList();
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    if (name === "nomerBukti" || name === "debet" || name === "kredit") {
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

    const payload = {
      ...data,
      debet: parseInt(debet),
      kredit: parseInt(kredit),
    };

    if (isEdit) {
      let response = await updateJurnal(payload);
    } else {
      let response = await createJurnal(payload);
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
            value={formatDate(jurnal.tanggalJurnal) || ""}
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
          <input
            type="text"
            className="form-control"
            name="nomerBukti"
            placeholder="Masukkan nomor bukti jurnal"
            value={jurnal.nomerBukti || ""}
            onChange={handleChange}
            required
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
