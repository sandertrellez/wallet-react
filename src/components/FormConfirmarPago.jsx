import React, { useContext, useState } from "react";
import './FormRegister.css';
import axios from "axios";

import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import { Link, useNavigate } from "react-router-dom";
import { WalletContext } from "../context/WalletContext";

const FormConfirmarPago = () => {

    const [token, setToken] = useState('');

    let navigate = useNavigate();
    const {setBalance, setNames, document, sesion, setSesion, amount } = useContext(WalletContext);

    const confirmarPago = async () => {

        const url = "http://localhost/api/confirm"

        await axios.post(url,{ sesion, token })
        .then((response)=>{
            console.log(response);

            const MySwal = withReactContent(Swal);
            MySwal.fire({
                title: response.data.status,
                icon:response.data.status=='Exito'?'success':'error',
                html:response.data.message
            });

            if(response.data.status=='Exito'){
                setBalance(response.data.saldo);
                setNames(response.data.client);
                setSesion(response.data.sesion);
                navigate('/main');
            }
        })
        .catch((error) =>{
            console.log(error)
        }) 
    }

    return <div className="form_container">
        <h2>Confirmar pago</h2>

        <div>
            <label htmlFor="token">Token</label>
            <input type="text" id="token" required onChange={(e) =>{setToken(e.target.value)}} />
        </div>

        <div>
            <button className="btn btn_registrar" onClick={confirmarPago} >Confirmar</button>

            <Link to="/main">
                <button className="btn btn_ingresar" >volver</button>
            </Link>
        </div>
    </div>
}

export default FormConfirmarPago;