import React from "react";

function JurnalUmumTable({ jurnalList }) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Tanggal</th>
          <th>Uraian</th>
          <th>Nomor Bukti</th>
          <th>Nama Perkiraan Jurnal</th>
          <th>Debit</th>
          <th>Kredit</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {jurnalList.length > 0 &&
          jurnalList.map((jurnal, index) => (
            <tr key={index}>
              <td>{jurnal.tanggalJurnal}</td>
              <td>{jurnal.uraian}</td>
              <td>{jurnal.nomerBukti}</td>
              <td>{jurnal.namaPerkiraanJurnal}</td>
              <td>{jurnal.debet}</td>
              <td>{jurnal.kredit}</td>
              <td>
                <button className="btn btn-warning mx-2">Edit</button>
                <button className="btn btn-danger mx-2">Delete</button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default JurnalUmumTable;
