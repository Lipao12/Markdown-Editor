import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useContext, useState } from 'react';
import { CgMenu, CgSoftwareDownload } from "react-icons/cg";
import { FiEdit2 } from "react-icons/fi";
import { textContext } from '../../context/TextContext';
import '../style/style.css';

const Header = () => {
    const { textRaw, changeSidebarState, txts} = useContext(textContext);
    const [edit, setEdit] = useState(false);
    const [inputValue, setInputValue] = useState("Novo Arquivo");

    const handleShowSidebar = () => {
        changeSidebarState();
    }

    const handleInputChange = (event) => {
        setInputValue(event.target.value); // Atualiza o valor do input conforme o usuário digita
    }

    const handleEditChange = () => {
        setEdit(!edit);
    }

    const handleDownloadPDF = () => {
        const previewContainer = document.getElementById('preview-container');

        html2canvas(previewContainer).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            const imgWidth = 210;
            const pageHeight = 297;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;
            let position = 0;

            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }

            pdf.save('download.pdf');
        });
    };

    return (
        <div className="header">
            <header>
                <div className="tooltip-container">
                    <CgMenu className="icon" onClick={handleShowSidebar}/>
                    <span className="tooltip-text sidebar-button">Side Bar</span>
                </div>
                
                <div className='title-file'>
                {edit ? (
                        <input 
                            type="text" 
                            value={inputValue} 
                            onChange={handleInputChange} 
                            autoFocus={true} 
                            className='input-edit show-edit'
                        />
                    ) : (
                        <h4 className='input-edit'>
                            {inputValue}
                        </h4>
                    )}
                    <FiEdit2 className={`icon-edit-title ${edit ? 'show-icon' : ''}`} onClick={handleEditChange}/>
                </div>
                

                <div className="tooltip-container">
                    <CgSoftwareDownload className="icon" onClick={handleDownloadPDF} />
                    <span className="tooltip-text download-button">Download</span>
                </div>
            </header>
        </div>
    );
};

export default Header;
