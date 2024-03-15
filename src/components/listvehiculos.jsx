import React from 'react';
import { useState } from 'react';

const vehiculos = [
  {
    id: 1,
    marca: 'Chevrolet',
    modelo: 'Onix',
    año: 2020,
    detalle: {color: 'rojo', placa: 'ABC123', kiloemtros: 10000}
  },
  {
    id: 2,
    marca: 'Ford',
    modelo: 'Fiesta',
    año: 2019,
    detalle: {color: 'rojo', placa: 'ABC123', kiloemtros: 10000}
  },
  {
    id: 3,
    marca: 'Fiat',
    modelo: 'Cronos',
    año: 2021,
    detalle: {color: 'rojo', placa: 'ABC123', kiloemtros: 10000}
  }
];




export default function ListVehiculos() {
const  [vehiculo, setVehiculo] = useState();
const handle = (vehiculo) => {
    setVehiculo(vehiculo.detalle);
    }
  return (
    <div>
      <h2>Lista de Vehículos</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Año</th>
          </tr>
        </thead>
        <tbody>
          {vehiculos.map((vehiculo) => (
            <tr key={vehiculo.id}>
              <td>{vehiculo.id}</td>
              <td>{vehiculo.marca}</td>
              <td>{vehiculo.modelo}</td>
              <td>{vehiculo.año}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  );
}
