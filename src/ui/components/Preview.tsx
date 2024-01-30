import 'katex/dist/katex.min.css';
import { useContext } from 'react';
import { textContext } from '../../context/TextContext';
import '../style/style.css';
import renderMarkdown from './convSrtMD';

const Preview = () => {
    const { objTextRaw } = useContext(textContext);
    const markdown = `We have the https://daringfireball.net/projects/markdown/syntax as a helper with MarkDown!`
    
    return (
        <div className='preview-container custom-scroll' id='preview-container'>
            {renderMarkdown(objTextRaw?objTextRaw.texto:markdown)}
        </div>
    );
}

export default Preview;
