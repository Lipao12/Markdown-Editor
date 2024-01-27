// Header.js
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useContext } from 'react';
import { CgMenu, CgSoftwareDownload } from "react-icons/cg";
import { textContext } from '../../context/TextContext';
import '../style/style.css';

const Header = () => {
    const { textRaw } = useContext(textContext);

    const handleDownloadPDF = () => {
        const input = document.getElementById('preview-container'); // Use o ID do contêiner de visualização

        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'PNG', 0, 0);
            pdf.save('downloaded-file.pdf'); 
        });
    };

    return (
        <div className="header">
            <header>
                <CgMenu className="icon"/>
                <CgSoftwareDownload className="icon" onClick={handleDownloadPDF}/>
            </header>         
        </div>
    )
}

export default Header;
