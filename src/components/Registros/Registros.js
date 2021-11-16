import React, {useEffect, useState}from 'react'
import { useHistory } from 'react-router-dom'
import Button from '@restart/ui/esm/Button'
import Navb from '../Navbar/Navb'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Registros.css'
import Table from 'react-bootstrap/Table'
import firebase, { db } from '../aplicaciones/firebase';
import {collection, getDocs, getDoc, query, doc,  addDoc, deleteDoc, updateDoc} from "firebase/firestore";
import {savePersonName, getPersons, deleteP} from "../aplicaciones/api";

const Registros = () => {
    let History = useHistory();

    const [estudiantes, setEstudiantes] = useState([]);
    const usersCollectionRef = collection(db, 'estudiantes');

  const deleteUser = async (id) => {
    const userDoc = doc(db, 'estudiantes', id);
    await deleteDoc(userDoc);
  }

  useEffect(() => {
    const obtenerDatos = async () => {
      const data = await getDocs(usersCollectionRef);
      setEstudiantes(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
      
    }
     obtenerDatos();
  }, []);

    return (
        <>
        <div className = "fondo">
        <Navb />
        <div className = "">
        <main className = "main-content">
            <div className = "crud-container">
                <div className = "crud-header">
                <h1>Estudiantes Registrados</h1>
                <button type="button" class="btn btn-success" onClick = {()=>History.push('/')}>
                <i class="bi bi-plus"></i>
                    <span>Nuevo Estudiante</span></button>
                </div>

                <div> {estudiantes.map((user) => {return <div>

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
      <th scope="row">*</th>
      <td>{user.Nombre}</td>
      <td>{user.Grupo}</td>
      <td>{user.TipoDocumento}</td>
      <td>{user.Nodocumento}</td>
      <td>{user.Fnacimiento}</td>
      <td>{user.Fingreso}</td>
      <td>{user.Fegreso}</td>
      <td>{user.Trimestre}</td>
      <td>
      
      <button type="button" class="btn btn-danger" onClick ={()=>{deleteUser(user.id)}}>
      <i class="bi bi-trash-fill"></i>
      </button>
      </td>
    </tr>
  </tbody>
</table>
                </div>})}
                
</div>
            </div>
        </main>
        </div>
        </div>
        </>
    )
}

export default Registros
