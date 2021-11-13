import React from 'react'
import { useHistory } from 'react-router-dom'
import Button from '@restart/ui/esm/Button'
import Navb from '../Navbar/Navb'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Registros.css'

const Registros = () => {
    let History = useHistory();
    return (
        <>
        <Navb />
        <div className = "fondo">
        <main className = "main-content">
            <div className = "crud-container">
                <div className = "crud-header">
                <h1>Estudiantes Registrados</h1>
                <button type="button" class="btn btn-success" onClick = {()=>History.push('/')}>
                <i class="bi bi-plus"></i>
                    <span>Nuevo Estudiante</span></button>
                </div>
                <table class="table">
  <thead>
    <tr>
    <th scope="col">*</th>
      <th scope="col">Nombre Completo</th>
      <th scope="col">Grupo</th>
      <th scope="col">Tipo de documento</th>
      <th scope="col">No Documento</th>
      <th scope="col">Fecha Nacimiento</th>
      <th scope="col">Fecha Ingreso</th>
      <th scope="col">Fecha Egreso</th>
      <th scope="col">No Trimestre</th>
      <th scope="col">Opciones</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Cristian Andres Castaño Salas</td>
      <td>ADSI 2231449</td>
      <td>CC</td>
      <td>1192719887</td>
      <td>13/07/2002</td>
      <td>11/11/2021</td>
      <td>11/11/2021</td>
      <td>IV</td>
      <td>
      <button type="button" class="btn btn-warning">
      <i class="bi bi-pencil-fill"></i>
      </button>
      <button type="button" class="btn btn-danger">
      <i class="bi bi-trash-fill"></i>
      </button>
      </td>
    </tr>
  </tbody>
</table>
            </div>
        </main>
        </div>
        </>
    )
}

export default Registros
