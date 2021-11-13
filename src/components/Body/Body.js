import React, {useState, useEffect}from 'react'
import './Body.css'
import db from '../firebase'
import { getDatabase, ref, set } from "firebase/database";


const Body = () => {

    
    
function setdata() {
  const db = getDatabase();
  set(ref(db, nombre.value), {
            nombre: nombre.value,
            grupo: grupo.value,
            CC: cc.value,
            TI: ti.value,
            CE: ce.value,
            PP: pp.value,
            documento: documento.value,
            Fnacimiento: fnacimiento.value,
            Fingreso: fingreso.value,
            Fegreso: fegreso.value,
            trimestre: trimestre.value,
            terminos: terminos.value,
  });
}


   
  
    const nombre = document.getElementById('nombre')
    const grupo = document.getElementById('grupo')
    const cc = document.getElementById('cc')
    const ti = document.getElementById('ti')
    const ce = document.getElementById('ce')
    const pp = document.getElementById('pp')
    const documento = document.getElementById('documento')
    const fnacimiento = document.getElementById('fnacimiento')
    const fingreso = document.getElementById('fingreso')
    const fegreso = document.getElementById('fegreso')
    const trimestre = document.getElementById('trimestre')
    const terminos = document.getElementById('terminos')
    
    return (
        
                <div className = "Fondo">
                    <div className = "contenedor">
                    <form className = "hola">
                        <div className = "holitis">
                        <label className = "Labelsito">
                            Nombre Completo
                            <div className = "">
                                <input type="text" name="nombre" className = "inputsito" id = "nombre" required/>
                            </div>
                        </label>
                        </div>
                    
                        <div className = "holitis">
                        <label className = "Labelsito">
                            Grupo
                            <div className = "">
                                <input type="text" name="grupo" className = "inputsito" id = "grupo" required/>
                            </div>
                        </label>
                        </div>

                    <br/>

                    <div className = "alo">
                        <label className = "labels">
          Tipo de documento:

          <div className= "Labelsit">
            CC
          <input
            name="cc"
            type="checkbox"
            className = "checkboxito"
            id = "cc"
            value="checkbox"
            />
            Ti
            <input
            name="ti"
            type="checkbox"
            className = "checkboxito"
            id = "ti"
            value="checkbox"
            />
            CE
            <input
            name="ce"
            type="checkbox"
            className = "checkboxito"
            id = "ce"
            value="checkbox"
            />
            PP
            <input
            name="pp"
            type="checkbox"
            className = "checkboxito"
            id = "pp"
            value="checkbox"
            />
            </div>
        </label>
        </div>

        <div className = "holitis">
                        <label className = "Labelsito">
                            No documento
                            <div className = "">
                                <input type="text" name="documento" className = "inputsito" id = "documento" required/>
                            </div>
                        </label>
                        </div>

        <div className = "holitis">
                        <label className = "Labelsito">
                            Fecha nacimiento
                            <div className = "">
                                <input type="date" name="fnacimiento" className = "inputsito" id = "fnacimiento" required/>
                            </div>
                        </label>
                        </div>

                        <div className = "holitis">
                        <label className = "Labelsito">
                            Fecha Ingreso
                            <div className = "">
                                <input type="date" name="fingreso" className = "inputsito" id = "fingreso" required/>
                            </div>
                        </label>
                        </div>

                        <div className = "holitis">
                        <label className = "Labelsito">
                            Fecha Egreso
                            <div className = "">
                                <input type="date" name="fegreso" className = "inputsito" id = "fegreso" required/>
                            </div>
                        </label>
                        </div>

                        <div className = "holitis">
                        <label className = "Labelsito">
                            No trimestre
                            <div className = "">
                                <input type="text" name="trimestre" className = "inputsito" id = "trimestre" required />
                            </div>
                        </label>
                        </div>

                    
                        <div className = "holitiss">
                        <label className = "Labelsit">
                            <div className = "checkboxitos">
                        <input
                            name="terminos"
                            type="checkbox"
                            value="checkbox"
                            className = "checkboxitoss"
                            id = "terminos"
                        />
            </div>
            Acepto los terminos y condiciones
                </label>
                </div>
                        <button type="submit" className = "Botonsito" id = "submit">Enviar</button> 
                    </form>
                    </div>
                </div>
        
    )
        
    
}

export default Body;
