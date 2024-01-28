import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import texts from '../ui/components/textos_test';

export const textContext = createContext(null);

const TextContextProvider = (props) =>{
    const [textRaw, setTextRaw] = useState(null);
    const [showSidebar, setShowSidebar] = useState(false);
    const [txts, setText] = useState(texts);
    
    const rewriteTextRaw = (text) => {
        setTextRaw(text);
    }

    const saveDatabase = (text) => {
        // fazer um post e salvar no banco de dados
        setTimeout(() => {
            toast.success('Texto salvo no banco de dados com sucesso!');
        }, 1000);
    }

    const changeSidebarState = () => {
        setShowSidebar(!showSidebar);
    }

    const selectText = (textId) => {
        const selectedText = txts.find(text => text.id === textId);
        if (selectedText) {
            setTextRaw(selectedText.texto);
        } else {
            console.log('Texto não encontrado');
        }
    }

    const contextValue = { 
        textRaw,
        showSidebar,
        txts,
        rewriteTextRaw,
        saveDatabase,
        changeSidebarState,
        selectText
    };

    return (
        <textContext.Provider value={contextValue}>
            {props.children}
        </textContext.Provider>
    );

}

export default TextContextProvider;
