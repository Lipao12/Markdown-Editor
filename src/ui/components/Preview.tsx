import { useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { textContext } from '../../context/TextContext';
import '../style/style.css';

const Preview = () =>{
    const {textRaw} = useContext(textContext);

    const markdown = `We have the https://daringfireball.net/projects/markdown/syntax as a helper with MarkDown!
    
    A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`
    return (
        <div className='preview-container'>
            <header className='preview-header'>
                <h2>Preview</h2>
            </header>
            <div className='preview-txt'>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {textRaw ? textRaw : markdown}
                </ReactMarkdown >
            </div>
        </div>
    )
}

export default Preview;