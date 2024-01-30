import { useContext, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { textContext } from '../../context/TextContext';
import '../style/style.css';

const Editor = () => {
    const [textValue, setTextValue] = useState('');
    const { objTextRaw, rewriteTextRaw, saveDatabase, txts, changeSidebarState } = useContext(textContext);

    useEffect(() => {
        setTextValue(objTextRaw?objTextRaw.texto:'');
    }, [objTextRaw]);

    const handleChange = (event) => {
        const newTextValue = event.target.value;
        let newTextId;
    
        if (objTextRaw) {
            newTextId = objTextRaw.id !== null ? objTextRaw.id : generateNewId();  
        } else {
            newTextId = generateNewId();
        }
    
        const newTitle = objTextRaw ? objTextRaw.title : "Novo Arquivo";
    
        const newTxt = {
            id: newTextId,
            texto: newTextValue,
            title: newTitle
        };
    
        setTextValue(newTextValue);
        rewriteTextRaw(newTxt);
        changeSidebarState(false);
    };
    
    const generateNewId = () => {
        const existingIds = txts.map(text => text.id);
        const maxId = Math.max(...existingIds, 0);
        return maxId + 1;
    };
    

    const handleKeyDown = (event) => {
        if ((event.key === 's' || event.key === 'S') && (event.ctrlKey || event.metaKey)) {
            event.preventDefault();
            //rewriteTextRaw(textValue);
            saveDatabase(objTextRaw);
        }

        if (textValue === '' && event.key === '/') {
            event.preventDefault();
            document.getElementById('fileInput').click(); // Simula o clique no input file
        }
    };

    const selectFile = (event) => {
      const file = event.target.files[0]; // Obtém o primeiro arquivo selecionado pelo usuário
      console.log(file)

      if(file){
        const reader = new FileReader();

        reader.onload = (e) => {
          const content = e.target.result;

          const newTxt = {
            id: generateNewId(),
            texto: content,
            title: file.name.slice(0, -4)
        };

          setTextValue(content);
          rewriteTextRaw(newTxt);
        }
        reader.readAsText(file);
      }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [textValue]); 

    return (
        <>
            <textarea
                id="txt"
                className='text-editor custom-scroll'
                placeholder='Digite seu texto aqui ou pressione "/" para carregar um arquivo'
                value={textValue}
                onChange={handleChange}
            />
            <input // possibilita que seja possível escolher um arquivo do computador
                id="fileInput"
                type="file"
                style={{ display: 'none' }} 
                onChange={selectFile}
            />
            <ToastContainer />
        </>
    );
};

export default Editor;