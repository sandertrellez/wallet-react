import React, { useContext, useState } from "react";
import './FormRegister.css';
import axios from "axios";

import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import { Link, useNavigate } from "react-router-dom";
import { WalletContext } from "../context/WalletContext";

const FormPago = () => {

    const [amount, setAmount] = useState('');
    let navigate = useNavigate();
    const {setBalance, setNames, document, setSesion } = useContext(WalletContext);

    const registerClient = async () => {

        const url = "http://localhost/api/pay"

        await axios.post(url,{ document, amount })
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
                setSesion(response.data.sesion);
                navigate('/confirmarPago');
            }
        })
        .catch((error) =>{
            console.log(error)
        }) 
    }

    return <div className="form_container">
        <h2>Pagar cuenta</h2>

        <div>
            <label htmlFor="amount">Valor</label>
            <input type="text" id="amount" required onChange={(e) =>{setAmount(e.target.value)}} />
        </div>

        <div>
            <button className="btn btn_registrar" onClick={registerClient} >Pagar</button>

            <Link to="/main">
                <button className="btn btn_ingresar" >volver</button>
            </Link>
        </div>
    </div>
}

export default FormPago;