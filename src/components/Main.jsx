import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Main.css';
import { faFileInvoice, faMoneyBillTrendUp } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { WalletContext } from '../context/WalletContext';
import { Link } from 'react-router-dom';

const Main = () => {

    const {names, balance} = useContext(WalletContext);

    return (
        <div>
            <div className='nombre'>
                <h3>Hola, {names}</h3>
            </div>

            <div className='saldo'>
                <h3>$ {balance}</h3>
                <h4>Saldo total</h4>
            </div>

            <div className='acciones'>
                <Link to="/recarga">
                    <button className="btn_flex btn_1">
                        Recargar
                        <FontAwesomeIcon icon={faMoneyBillTrendUp}/>
                    </button>
                </Link>

                <Link to="/pagar">
                    <button className="btn_flex btn_2">
                        Pagar
                        <FontAwesomeIcon icon={faFileInvoice}/>
                    </button>
                </Link>

            </div>
        </div>
    )
}

export default Main;