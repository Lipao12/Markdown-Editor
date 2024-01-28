import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import texts from '../ui/components/textos_test';

export const textContext = createContext(null);

const TextContextProvider = (props) =>{
    const [objTextRaw, setTextRaw] = useState(null);
    const [showSidebar, setShowSidebar] = useState(false);
    const [txts, setText] = useState(texts);
    
    const rewriteTextRaw = (objText) => {
        setTextRaw(objText);
    }

    const saveDatabase = (objText) => {
        try{
            const existingTextIndex = txts.findIndex(text => text.id === objText.id);
            console.log(objText);
            if (existingTextIndex !== -1) {
                const updatedTxts = [...txts];
                updatedTxts[existingTextIndex] = objText;
                setText(updatedTxts); 
                toast.success('Texto atualizado no banco de dados com sucesso!');
            } else {
                const updatedTxts = [...txts, objText];
                setText(updatedTxts); 
                toast.success('Novo texto salvo no banco de dados com sucesso!');
            }
        } catch (e){
            console.log(objText)
            setTimeout(() => {
                toast.error('Erro ao salvar o texto!');
            }, 1000);
        }
    }

    const changeSidebarState = (state) => {
        setShowSidebar(state);
    }

    const selectText = (textId) => {
        const selectedText = txts.find(text => text.id === textId);
        if (selectedText) {
            setTextRaw(selectedText);
        } else {
            console.log('Texto não encontrado');
        }
    }

    const contextValue = { 
        objTextRaw,
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
