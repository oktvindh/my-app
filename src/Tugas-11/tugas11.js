import React, { useState } from "react";
import "../assets/css/tugas11.css";

const Tugas11 = () => {
  const [dataBuah, setDataBuah] = useState([
    { nama: "Mie Ayam", hargaTotal: 100000, beratTotal: 4000 },
    { nama: "Bakso", hargaTotal: 350000, beratTotal: 10000 },
    { nama: "Es Teh Manis", hargaTotal: 90000, beratTotal: 2000 },
    { nama: "Jus Jeruk", hargaTotal: 400000, beratTotal: 5000 },
    { nama: "Batagor", hargaTotal: 120000, beratTotal: 6000 },
  ]);

  const [input, setInput] = useState({
    nama: "",
    hargaTotal: 0,
    beratTotal: 0,
  });

  const handleChange = (event) => {
    let typeOfValue = event.target.value;
    let name = event.target.name;

    switch (name) {
      case "nama":
        setInput({ ...input, nama: typeOfValue });
        break;

      case "hargaTotal":
        setInput({ ...input, [name]: [typeOfValue] });
        break;

      case "beratTotal":
        setInput({ ...input, [name]: [typeOfValue] });
        break;

      default:
        break;
    }
  };

  return (
    <>
      <br />
      <h1 style={{ textAlign: "center" }}>Daftar Harga Makanan dan Minuman</h1>
      <br />
      <table
        style={{
          width: "50%",
          border: "1px solid #aaa",
          margin: "auto",
          padding: "50px",
        }}
        id="customers"
      >
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Harga Total</th>
            <th>Berat Total</th>
            <th>Harga per Kg</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {dataBuah !== null && (
            <>
              {dataBuah.map((e, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{e.nama}</td>
                    <td>{e.hargaTotal}</td>
                    <td>{e.beratTotal / 1000} Kg</td>
                    <td>{e.hargaTotal / (e.beratTotal / 1000)}</td>
                    <td>
                      <button>Edit</button>
                      <button style={{ marginLeft: "10px" }}>Delete</button>
                    </td>
                  </tr>
                );
              })}
            </>
          )}
        </tbody>
      </table>
      <br />
      <br />
      <h1 style={{ textAlign: "center" }}>
        Form Daftar Harga Makanan dan Minuman
      </h1>
      <br />
      <form
        style={{
          width: "50%",
          border: "1px solid #aaa",
          margin: "auto",
          padding: "30px",
          marginBottom: "30px",
        }}
      >
        <strong style={{ width: "300px", display: "inline-block" }}>
          Nama:{" "}
        </strong>
        <input
          style={{ float: "right" }}
          onChange={handleChange}
          value={input.nama}
          name="nama"
          type="text"
          required
        />
        <br />
        <br />
        <br />
        <strong style={{ width: "300px", display: "inline-block" }}>
          Harga Total:{" "}
        </strong>
        <input
          style={{ float: "right" }}
          onChange={handleChange}
          value={input.hargaTotal}
          name="hargaTotal"
          type="number"
          required
        />
        <br />
        <br />
        <br />
        <strong style={{ width: "300px", display: "inline-block" }}>
          Berat Total (dalam gram):{" "}
        </strong>
        <input
          style={{ float: "right" }}
          onChange={handleChange}
          value={input.beratTotal}
          name="beratTotal"
          type="number"
          required
          min={1000}
        />
        <br />
        <br />
        <br />
        <input style={{ float: "right" }} type="submit" />
        <br />
      </form>
    </>
  );
};

export default Tugas11;
