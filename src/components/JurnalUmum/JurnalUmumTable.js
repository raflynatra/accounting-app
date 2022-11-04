import React, { useState } from "react";
import DeleteModal from "../DeleteModal";
import { color, formatDateTable } from "../../utils/Helper";

function JurnalUmumTable({
  jurnalList,
  handleDelete,
  navigate,
  searchValue = "",
  isBukuBesar,
  type,
  isLoading,
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
            {type === "dashboard" ? (
              <></>
            ) : !isBukuBesar ? (
              <th>Aksi</th>
            ) : (
              <></>
            )}
          </tr>
        </thead>
        <tbody>
          {jurnalList.length > 0 ? (
            isLoading ? (
              jurnalList.map((item, index) => (
                <tr key={index}>
                  <td>
                    <p className="placeholder-glow">
                      <span className="placeholder col-12 bg-primary"></span>
                    </p>
                  </td>
                  <td>
                    <p className="placeholder-glow">
                      <span className="placeholder col-12 bg-primary"></span>
                    </p>
                  </td>
                  <td>
                    <p className="placeholder-glow">
                      <span className="placeholder col-12 bg-primary"></span>
                    </p>
                  </td>
                  <td>
                    <p className="placeholder-glow">
                      <span className="placeholder col-12 bg-primary"></span>
                    </p>
                  </td>
                  <td>
                    <p className="placeholder-glow">
                      <span className="placeholder col-12 bg-primary"></span>
                    </p>
                  </td>
                  <td>
                    <p className="placeholder-glow">
                      <span className="placeholder col-12 bg-primary"></span>
                    </p>
                  </td>
                  {type === "dashboard" ? (
                    <></>
                  ) : !isBukuBesar ? (
                    <td>
                      <p className="placeholder-glow">
                        <span className="placeholder col-6 bg-primary"></span>
                      </p>
                    </td>
                  ) : (
                    <></>
                  )}
                </tr>
              ))
            ) : (
              jurnalList
                .filter(
                  (item) =>
                    item.nomerBukti !== null &&
                    item.nomerBukti
                      .toLowerCase()
                      .includes(searchValue.toLowerCase())
                )
                .map((jurnal, index) =>
                  type === "dashboard" ? (
                    index < 5 && (
                      <tr key={index}>
                        <td>{formatDateTable(jurnal.tanggalJurnal)}</td>
                        <td>{jurnal.uraian}</td>
                        <td>{jurnal.nomerBukti}</td>
                        <td>{jurnal.namaPerkiraanJurnal}</td>
                        <td>{`Rp${jurnal.debet.toLocaleString("id")}`}</td>
                        <td>{`Rp${jurnal.kredit.toLocaleString("id")}`}</td>
                      </tr>
                    )
                  ) : (
                    <tr key={index}>
                      <td>{formatDateTable(jurnal.tanggalJurnal)}</td>
                      <td>{jurnal.uraian}</td>
                      <td>{jurnal.nomerBukti}</td>
                      <td>{jurnal.namaPerkiraanJurnal}</td>
                      <td>{`Rp${jurnal.debet.toLocaleString("id")}`}</td>
                      <td>{`Rp${jurnal.kredit.toLocaleString("id")}`}</td>
                      {!isBukuBesar && (
                        <td>
                          <button
                            className="btn btn-warning mx-2"
                            onClick={() =>
                              navigate("/jurnal-umum/edit", { state: jurnal })
                            }
                          >
                            Ubah
                          </button>
                          <button
                            className="btn btn-danger mx-2"
                            onClick={() => handleShow(jurnal._id)}
                          >
                            Hapus
                          </button>
                        </td>
                      )}
                    </tr>
                  )
                )
            )
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
    </>
  );
}

export default JurnalUmumTable;
