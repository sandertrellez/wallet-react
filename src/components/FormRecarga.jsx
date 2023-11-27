import React, { useContext, useState } from "react";
import './FormRegister.css';
import axios from "axios";

import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import { Link, useNavigate } from "react-router-dom";
import { WalletContext } from "../context/WalletContext";

const FormRecarga = () => {

    const [phone, setPhone] = useState('');
    const [amount, setAmount] = useState('');
    let navigate = useNavigate();
    const {setBalance, setNames, document, setDocument } = useContext(WalletContext);

    const registerClient = async () => {

        const url = "http://localhost/api/wallet"

        await axios.post(url,{ document, phone, amount })
        .then((response)=>{
            console.log(response);

            const MySwal = withReactContent(Swal);
            MySwal.fire({
                title: response.data.status,
                icon:response.data.status=='Exito'?'success':'error',
                html:response.data.message
            });

            if(response.data.status=='Exito'){
                setBalance(response.data.nuevo_saldo);
                setNames(response.data.client);
                navigate('/main');
            }
        })
        .catch((error) =>{
            console.log(error)
        }) 
    }

    return <div className="form_container">
        <h2>Recarga de saldo</h2>

        <div>
            <label htmlFor="document">Documento</label>
            <input type="text" id="document" required onChange={(e) =>{setDocument(e.target.value)}}/>
        </div>
        <div>
            <label htmlFor="phone">Celular</label>
            <input type="text" id="phone" required onChange={(e) =>{setPhone(e.target.value)}} />
        </div>
        <div>
            <label htmlFor="amount">Valor</label>
            <input type="text" id="amount" required onChange={(e) =>{setAmount(e.target.value)}} />
        </div>

        <div>
            <button className="btn btn_registrar" onClick={registerClient} >Recargar</button>

            <Link to="/main">
                <button className="btn btn_ingresar" >volver</button>
            </Link>
        </div>
    </div>
}

export default FormRecarga;