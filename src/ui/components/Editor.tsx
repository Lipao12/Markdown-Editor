import { useContext, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { textContext } from '../../context/TextContext';
import '../style/style.css';

const Editor = () => {
    const [textValue, setTextValue] = useState('');
    const { textRaw, rewriteTextRaw, saveDatabase } = useContext(textContext);

    useEffect(() => {
        setTextValue(textRaw || ''); // Define o valor inicial do textarea com base no textoRaw
    }, [textRaw]);

    const handleChange = (event) => {
        const newTextValue = event.target.value;
        setTextValue(newTextValue);
        rewriteTextRaw(newTextValue);
    };

    const handleKeyDown = (event) => {
        if ((event.key === 's' || event.key === 'S') && (event.ctrlKey || event.metaKey)) {
            event.preventDefault();
            saveAndRewriteText();
        }

        if (textValue === '' && event.key === '/') {
            event.preventDefault();
            document.getElementById('fileInput').click(); // Simula o clique no input file
        }
    };

    const selectFile = (event) => {
      const file = event.target.files[0]; // Obtém o primeiro arquivo selecionado pelo usuário

      if(file){
        const reader = new FileReader();

        reader.onload = (e) => {
          const content = e.target.result;
          setTextValue(content);
          rewriteTextRaw(content);
        }
        reader.readAsText(file);
      }
    }

    const saveAndRewriteText = () => {
        rewriteTextRaw(textValue);
        saveDatabase(textRaw);
    };

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
                className='text-editor'
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