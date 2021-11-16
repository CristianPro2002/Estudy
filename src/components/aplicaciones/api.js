import { db } from './firebase';
import {collection, doc,  addDoc, deleteDoc} from "firebase/firestore";

export const savePersonName = async (Nombre, Grupo,  TipoDocumento, Nodocumento, Fnacimiento, Fingreso, Fegreso, Trimestre) => {
    await addDoc(collection(db, 'estudiantes'), { Nombre, Grupo, TipoDocumento, Nodocumento, Fnacimiento, Fingreso, Fegreso, Trimestre});
}


export const deleteP = async (id) => {await deleteDoc(doc(db, 'estudiantes', id));}