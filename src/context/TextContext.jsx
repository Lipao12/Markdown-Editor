import React, { createContext, useState } from 'react';

export const textContext = createContext(null);

const TextContextProvider = (props) =>{
    const [textRaw, setTextRaw] = useState(null);

    const rewriteTextRaw = (text) => {
        setTextRaw(text);
    }

    const saveDatabase = (text) => {
        // fazer um post e salvar no banco de dados
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
