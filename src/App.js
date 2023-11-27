import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import FormRegister from './components/FormRegister';
import FormLogin from './components/FormLogin';
import Main from './components/Main';
import WalletProvider from './context/WalletContext';
import FormRecarga from './components/FormRecarga';
import FormPago from './components/FormPago';
import FormConfirmarPago from './components/FormConfirmarPago';

function App() {
  return (
    <div className="App">
      <WalletProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<FormRegister></FormRegister>}></Route>          
            <Route path='/login' element={<FormLogin></FormLogin>}></Route>          
            <Route path='/main' element={<Main></Main>}></Route>          
            <Route path='/recarga' element={<FormRecarga></FormRecarga>}></Route>          
            <Route path='/pagar' element={<FormPago></FormPago>}></Route>          
            <Route path='/confirmarPago' element={<FormConfirmarPago></FormConfirmarPago>}></Route>          
          </Routes>
        </BrowserRouter>
      </WalletProvider>
    </div>
  );
}

export default App;
