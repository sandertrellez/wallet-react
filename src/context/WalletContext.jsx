import { createContext, useState } from "react";

export const WalletContext = createContext({});

export default function WalletProvider ({children}){
    const [document, setDocument] = useState('');
    const [names, setNames] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [balance, setBalance] = useState('');
    const [sesion, setSesion] = useState('');

    return(
        <WalletContext.Provider
            value={{document, setDocument, names, setNames,
            email, setEmail, phone, setPhone,
            balance, setBalance, sesion, setSesion}}
            >
                {children}
        </WalletContext.Provider>
        )
}