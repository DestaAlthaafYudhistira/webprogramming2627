import { useState, useEffect } from "react";
import {Form, InputGroup, Modal, Button, Table, ProgressBar}from 'react-bootstrap';
export default function KartuRingkasan() {
  const [show, setShow] = useState(false)
  const [transaksi, setTransaksi] = useState([])
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const cardStyle = {
    padding: '20px',
    border: '1px solid #dee2e6',
    borderRadius: '6px',
    marginBottom: '15px'
  };

  const textStyle = {
    fontWeight: 'bold',
    color: '#0d6efd'
  };

  const ambilData = () => {
      fetch('http://localhost:3000/transaksi')
      ,then((response) => response.json)
      .then((data) => {
        console.log('Data diterima:', data)
        setTransaksi(data)
      })
      .catch((error) => {
        console.error('Terjadi Kesalahan saat mengambil data:', error);
      });
  };

  useEffect(
    () => {
      ambilData
    }, []
  )
  
  return (
    <div style={cardStyle}>
      <p style={textStyle}>Total Saldo: Rp 2.500.000</p> 
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Keterangan</th>
            <th>Kategori</th>
            <th>Nominal</th>
          </tr>
        </thead>
        <tbody>
          {
            transaksi.map(
              (item, index) => (
                <tr key={item.id || index}>
                  <td>{index + 1}</td>
                  <td>{item.keterangan}</td>
                  <td>{item.kategori}</td>
                  <td>{item.nominal}</td>
                </tr>
              )
            )
          }
        </tbody>
      </Table>
    </div>
  );
}

// App.jsx
// <KartuRingkasan />