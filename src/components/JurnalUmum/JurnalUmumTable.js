import React, { useState } from "react";
import DeleteModal from "../DeleteModal";

function JurnalUmumTable({
  jurnalList,
  handleDelete,
  navigate,
  searchValue,
  isBukuBesar,
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
          <tr>
            <th>Tanggal</th>
            <th>Uraian</th>
            <th>Nomor Bukti</th>
            <th>Nama Perkiraan Jurnal</th>
            <th>Debit</th>
            <th>Kredit</th>
            {isBukuBesar ? <></> : <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          {jurnalList.length > 0 &&
            jurnalList
              .filter(
                (item) =>
                  item.nomerBukti
                    .toLowerCase()
                    .includes(searchValue.toLowerCase()) ||
                  item.namaPerkiraanJurnal
                    .toLowerCase()
                    .includes(searchValue.toLowerCase())
              )
              .map((jurnal, index) => (
                <tr key={index}>
                  <td>{new Date(jurnal.tanggalJurnal).toLocaleString()}</td>
                  <td>{jurnal.uraian}</td>
                  <td>{jurnal.nomerBukti}</td>
                  <td>{jurnal.namaPerkiraanJurnal}</td>
                  <td>{`Rp${jurnal.debet.toLocaleString("id")}`}</td>
                  <td>{`Rp${jurnal.kredit.toLocaleString("id")}`}</td>
                  {isBukuBesar ? (
                    <></>
                  ) : (
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
                        onClick={() => handleShow(jurnal._id)}
                      >
                        Delete
                      </button>
                    </td>
                  )}
                </tr>
              ))}
        </tbody>
      </table>
    </>
  );
}

export default JurnalUmumTable;
