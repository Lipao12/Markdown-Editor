import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const textContext = createContext(null);

const TextContextProvider = (props) =>{
    const [textRaw, setTextRaw] = useState(null);

    const rewriteTextRaw = (text) => {
        setTextRaw(text);
    }

    const saveDatabase = (text) => {
        // fazer um post e salvar no banco de dados
        setTimeout(() => {
            toast.success('Texto salvo no banco de dados com sucesso!');
        }, 1000);
    }

    const contextValue = { 
        textRaw,
        rewriteTextRaw,
        saveDatabase
    };

    return (
        <textContext.Provider value={contextValue}>
            {props.children}
        </textContext.Provider>
    );

}

export default TextContextProvider;
