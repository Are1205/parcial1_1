import React, {useEffect, useState} from 'react';
import './styles/vehiculos.css';
import './styles/cardDetail.css';
import { Card, Row, Table } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import arrow from '../assets/arrow-right.svg';

export default function ListVehiculos() {
  const [vehiculosBack, setVehiculos] = useState([]);
  const [vehiculo, setVehiculo] = useState();
  const handleClick = (id) => {
    fetch(`http://localhost:3001/cars/${id}`)
      .then(response => response.json())
      .then(data => setVehiculo(data));
  };

  useEffect(() => {
    fetch('http://localhost:3001/cars')
      .then(response => response.json())
      .then(data => setVehiculos(data));
  },[]);



  return (
    <Row className='row-cstm'>
      <div className='col-table'>
        <Table>
          <thead className='table-header'>
            <tr className='fila'>
              <th>#</th>
              <th><FormattedMessage id="marca"/></th>
              <th><FormattedMessage id="linea"/></th>
              <th><FormattedMessage id="modelo"/></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {vehiculosBack.map((vehiculo) => (
              <tr key={vehiculo.id} className='fila' onClick={()=>handleClick(vehiculo.id)}>
                <td className='columna-id'>{vehiculo.id}</td>
                <td className='columna'>{vehiculo.marca}</td>
                <td className='columna'>{vehiculo.linea}</td>
                <td className='columna'>{vehiculo.modelo}</td>
                <td style={{width: '120px'}}></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className='col-card'>
        {vehiculo &&
          <Card className="custom-card">
            <Card.Body>
              <Card.Title className="custom-title">{vehiculo.marca} {vehiculo.linea}</Card.Title>
              <Card.Img className="custom-img" variant="top" src={vehiculo.imagen} />
              <Card.Text className="custom-txt">
                <p className="paragrahp" ><img src={arrow} alt="Arrow Right Icon"  style={{verticalAlign: 'middle;'}} /> <FormattedMessage id="kilometraje"/>: {vehiculo.kilometraje}</p>
                <p className="paragrahp"><img src={arrow} alt="Arrow Right Icon" style={{verticalAlign: 'middle;'}} /> <FormattedMessage id="color"/>: {vehiculo.color}</p>
                <p className="paragrahp"><img src={arrow} alt="Arrow Right Icon" style={{verticalAlign: 'middle;'}}/> <FormattedMessage id="referencia"/>: {vehiculo.referencia}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        }
      </div>
    </Row>

  );
}
