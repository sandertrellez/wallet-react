import React, { useState } from "react";
import './FormRegister.css';
import axios from "axios";

import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import { Link, Navigate } from "react-router-dom";

const FormRegister = () => {

    const [document, setDocument] = useState('');
    const [names, setNames] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const registerClient = async () => {
        if(document =="" || names =="" || email =="" || phone == ""){
            const MySwal = withReactContent(Swal);
            MySwal.fire({
                title: "Error",
                icon:'error',
                html: 'Todos los campos son obligatorios'
            });
            return false;
        }

        const url = "http://localhost/api/client"

        await axios.post(url,{ document, names, email, phone })
        .then((response)=>{
            console.log(response);

            const MySwal = withReactContent(Swal);
            MySwal.fire({
                title: response.data.status,
                icon:response.data.status=='Exito'?'success':'error',
                html:response.data.message
            });        
        })
        .catch((error) =>{
            console.log(error)
        }) 
    }

    return <div className="form_container">
        <h2>Registro de cliente</h2>

        <div>
            <label htmlFor="document">Documento</label>
            <input type="text" id="document" required onChange={(e) =>{setDocument(e.target.value)}}/>
        </div>
        <div>
            <label htmlFor="names">Nombres</label>
            <input type="text" id="names" required onChange={(e) =>{setNames(e.target.value)}} />
        </div>
        <div>
            <label htmlFor="email">Correo</label>
            <input type="text" id="email" required onChange={(e) =>{setEmail(e.target.value)}} />
        </div>
        <div>
            <label htmlFor="phone">Celular</label>
            <input type="text" id="phone" required onChange={(e) =>{setPhone(e.target.value)}} />
        </div>

        <div>
            <button className="btn btn_registrar" onClick={registerClient} >Registrar</button>

            <Link to="/login">
                <button className="btn btn_ingresar" >Ingresar</button>
            </Link>
        </div>
    </div>
}

export default FormRegister;