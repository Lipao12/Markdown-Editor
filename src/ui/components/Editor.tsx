import { useContext, useEffect, useState } from 'react';
import { textContext } from '../../context/TextContext';
import '../style/style.css';

const Editor = () =>{
    const [textValue, setTextValue] = useState('');
    const {textRaw, rewriteTextRaw, saveDatabase} = useContext(textContext);

    const handleChange = (event) => {
        setTextValue(event.target.value);
        rewriteTextRaw(event.target.value)
    };

    const handleKeyDown = (event) => {
        if ((event.key === 's' || event.key === 'S') && (event.ctrlKey || event.metaKey)) {
          // Evita o comportamento padrão do navegador de salvar a página
          event.preventDefault();

          rewriteTextRaw(textValue)
          saveDatabase(textRaw);
        }
      };

      useEffect(()=>{
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
      }, []);

    return (
        <> 
            <textarea 
                id="txt" 
                className='text-editor'
                placeholder='Digite seu texto aqui...'
                value={textValue}
                onChange={handleChange} />
            
        </>
    )
}

export default Editor;