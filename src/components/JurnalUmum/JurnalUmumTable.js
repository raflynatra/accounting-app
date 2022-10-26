import React, { useState } from "react";
import DeleteModal from "../DeleteModal";

function JurnalUmumTable({
  jurnalList,
  handleDelete,
  navigate,
  searchValue,
  isBukuBesar,
  type
}) {
  const [show, setShow] = useState(false);
  const [currId, setCurrId] = useState({});

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = (id) => {
    setCurrId(id);
    setShow(true);
  };

  return (
    <>
      <DeleteModal
        show={show}
        handleClose={handleClose}
        handleDelete={handleDelete}
        currId={currId}
      />
      <table className="table table-striped">
        <thead>
        {type == 'dashboard' ?
          <tr>
            <th>Tanggal</th>
            <th>Uraian</th>
            <th>Nomor Bukti</th>
            <th>Nama Perkiraan Jurnal</th>
            <th>Debit</th>
            <th>Kredit</th>
          </tr>
          :
          <tr>
            <th>Tanggal</th>
            <th>Uraian</th>
            <th>Nomor Bukti</th>
            <th>Nama Perkiraan Jurnal</th>
            <th>Debit</th>
            <th>Kredit</th>
            {isBukuBesar ? <></> : <th>Action</th>}
          </tr>
          }
        </thead>
        <tbody>

          {jurnalList.length > 0 &&
            jurnalList.map((jurnal, index) => (
              type == 'dashboard' ?
                index < 5 ?
                  <tr key={index}>

                    <td>{new Date(jurnal.tanggalJurnal).toLocaleString()}</td>
                    <td>{jurnal.uraian}</td>
                    <td>{jurnal.nomerBukti}</td>
                    <td>{jurnal.namaPerkiraanJurnal}</td>
                    <td>{jurnal.debet}</td>
                    <td>{jurnal.kredit}</td>
 
                  </tr>
                  : ''
                :
                <tr key={index}>

                  <td>{new Date(jurnal.tanggalJurnal).toLocaleString()}</td>
                  <td>{jurnal.uraian}</td>
                  <td>{jurnal.nomerBukti}</td>
                  <td>{jurnal.namaPerkiraanJurnal}</td>
                  <td>{jurnal.debet}</td>
                  <td>{jurnal.kredit}</td>
                  <td>
                    <button
                      className="btn btn-warning mx-2"
                      onClick={() =>
                        navigate("/jurnal-umum/edit", { state: jurnal })
                      }
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger mx-2"
                      onClick={() => handleDelete(jurnal)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default JurnalUmumTable;
