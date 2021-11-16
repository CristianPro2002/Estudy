import React, {useState}from 'react'
import './Body.css'
import {savePersonName} from "../aplicaciones/api";
import Button from '@restart/ui/esm/Button';


const Body = () => {

    const [anombreCompleto, setAnombreCompleto] = useState(null)
    const [aficha, setAficha] = useState(null)
    const [atipoDocumento, setAtipoDocumento] = useState(null)
    const [anodocumento, setAnodocumento] = useState(null)
    const [afnacimiento, setAfnacimiento] = useState(null)
    const [afingreso, setAfingreso] = useState(null)
    const [afegreso, setAfegreso] = useState(null)
    const [atrimestre, setAtrimestre] = useState(null)

    const savePerson = () => {
        savePersonName(anombreCompleto, aficha, atipoDocumento, anodocumento, afnacimiento, afingreso, afegreso, atrimestre);
    }
   

    return (
        
                <div className = "Fondo">
                    <div className = "contenedor">
                        <form className = "hola">
                            <div className = "holitis">
                                <label className = "Labelsito">
                                    Nombre Completo
                                    <div className = "">
                                        <input 
                                            type="text" 
                                            name="nombre" 
                                            className = "inputsito" 
                                            id = "nombre" 
                                            value = {anombreCompleto} 
                                            onChange = { e => setAnombreCompleto(e.target.value)} 
                                            required/>
                                    </div>
                                </label>
                            </div>
                    
                        <div className = "holitis">
                            <label className = "Labelsito">
                                Grupo
                                <div className = "">
                                    <input 
                                        type="text" 
                                        name="grupo" 
                                        className = "inputsito" 
                                        id = "grupo" 
                                        value = {aficha} 
                                        onChange = { e => setAficha(e.target.value)} 
                                        required/>
                                </div>
                            </label>
                        </div>

                    <br/>

                        <div className = "alo">
                            <label className = "labels">
                                Tipo de documento:
                                <div className = "">
                                    <select 
                                        value= {atipoDocumento} 
                                        onChange = {e => setAtipoDocumento(e.target.value)} 
                                        className = "seleccion" 
                                        required>
                                        <option >Selecciona</option>
                                        <option >Cedula</option>
                                        <option >Tarjeta Identidad</option>
                                        <option >Cedula Extranjeria</option>
                                        <option >Pasaporte</option>
                                    </select>
                                </div>
                            </label>
                        </div>

                        <div className = "holitis">
                            <label className = "Labelsito">
                                No documento
                                <div className = "">
                                    <input type="number" name="documento" className = "inputsito" id = "documento" value = {anodocumento} onChange = { e => setAnodocumento(e.target.value)} required/>
                                </div>
                            </label>
                        </div>

                        <div className = "holitis">
                            <label className = "Labelsito">
                                Fecha nacimiento
                                <div className = "">
                                    <input 
                                        type="date" 
                                        name="fnacimiento" 
                                        className = "inputsito" 
                                        id = "fnacimiento" 
                                        value = {afnacimiento} 
                                        onChange = { e => setAfnacimiento(e.target.value)} 
                                        required/>
                                </div>
                            </label>
                        </div>

                        <div className = "holitis">
                            <label className = "Labelsito">
                                Fecha Ingreso
                                <div className = "">
                                    <input 
                                        type="date" 
                                        name="fingreso" 
                                        className = "inputsito" 
                                        id = "fingreso" 
                                        value = {afingreso} 
                                        onChange = { e => setAfingreso(e.target.value)} 
                                        required/>
                                </div>
                            </label>
                        </div>

                        <div className = "holitis">
                            <label className = "Labelsito">
                                Fecha Egreso
                                <div className = "">
                                    <input 
                                        type="date" 
                                        name="fegreso" 
                                        className = "inputsito" 
                                        id = "fegreso" 
                                        value = {afegreso} 
                                        onChange = { e => setAfegreso(e.target.value)} 
                                        required/>
                                </div>
                            </label>
                        </div>

                        <div className = "holitis">
                            <label className = "Labelsito">
                                No trimestre
                                <div className = "">
                                    <input 
                                        type="number" 
                                        name="trimestre" 
                                        className = "inputsito" 
                                        id = "trimestre" 
                                        value = {atrimestre} 
                                        onChange = { e => setAtrimestre(e.target.value)} 
                                        required />
                                </div>
                            </label>
                        </div>

                    
                        <div className = "holitiss">
                            <label className = "Labelsit">
                                <div className = "checkboxitos">
                                    <input
                                        name="terminos"
                                        type="checkbox"
                                        className = "checkboxitoss"
                                        id = "terminos"
                                        required
                                    />
                                </div>
                                Acepto los terminos y condiciones
                            </label>
                        </div>
                        <div className = "contenedorB">
                            <Button onClick = {savePerson} className = "Botonsito">Enviar</Button>
                        </div>
                        </form>
                    </div>

                </div>
        
    )
        
    
}

export default Body;
