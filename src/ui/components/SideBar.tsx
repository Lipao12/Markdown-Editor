import { useContext } from 'react';
import { IoAddCircleOutline, IoClose } from 'react-icons/io5';
import { textContext } from '../../context/TextContext';
import '../style/style.css';

const SideBar = () => {
    //const [showSidebar, setShowSidebar] = useState(true);
    const {rewriteTextRaw, showSidebar, changeSidebarState, txts, selectText} = useContext(textContext);

    const toggleSidebar = () => {
        changeSidebarState(false);
    };

    const createNewFile = () => {
        const newFile = null;
        rewriteTextRaw(newFile);
        changeSidebarState(false);
    };

    const handleItemClick = (textId) => {
        selectText(textId);
        changeSidebarState();
    }

    return (
        <div>
            <aside className={`custom-scroll sidebar ${showSidebar ? '' : 'hide-sidebar'}`}>
                <div className={'sidebar-header'}>
                    <h2>Textos</h2>
                    <div>
                        <button className="close-button" onClick={createNewFile}>
                            <IoAddCircleOutline />
                        </button>
                        <button className="close-button" onClick={toggleSidebar}>
                            <IoClose />
                        </button>
                    </div>
                </div>
                <div>
                    <ul className='links'>
                        {txts.map((text, index) => {
                            return (
                                <>
                                    <li key={text.id}><a onClick={() => handleItemClick(text.id)}>{text.title}</a></li>
                                    {index!=(txts.length-1) && <hr className='hr-sideber'/>}
                                </>
                            );
                        })}
                    </ul>
                </div>
                
            </aside>
        </div>
    );
};

export default SideBar;
