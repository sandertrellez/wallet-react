import React, { useContext, useState } from "react";
import './FormRegister.css';
import axios from "axios";

import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import { Link, useNavigate } from "react-router-dom";
import { WalletContext } from "../context/WalletContext";

const FormLogin = () => {

    const [phone, setPhone] = useState('');
    let navigate = useNavigate();

    const {setNames, setBalance, setDocument, document } = useContext(WalletContext);


    const login = async () => {


        const url = `http://localhost/api/wallet/${document}/${phone}`;

        await axios.get(url,{ document, phone })
        .then((response)=>{
            console.log(response);

            if(response.data.status == 'Exito'){
                setNames(response.data.Cliente)
                setBalance(response.data.saldo)
                navigate("/main");
                return;
            }

            const MySwal = withReactContent(Swal);
            MySwal.fire({
                title: response.data.status,
                icon: 'error',
                html:response.data.message
            });        
        })
        .catch((error) =>{
            console.log(error)
        }) 
    }

    return <div className="form_container">
        <h2>Ingreso a la billetera</h2>

        <div>
            <label htmlFor="document">Documento</label>
            <input type="text" id="document" required onChange={(e) =>{setDocument(e.target.value)}}/>
        </div>
        <div>
            <label htmlFor="phone">Celular</label>
            <input type="text" id="phone" required onChange={(e) =>{setPhone(e.target.value)}} />
        </div>

        <div>
            <Link to="/">
                <button className="btn btn_registrar" >Registrar</button>
            </Link>
            <button className="btn btn_ingresar" onClick={login}>Ingresar</button>
        </div>
    </div>
}

export default FormLogin;