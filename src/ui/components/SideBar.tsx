import { useContext } from 'react';
import { IoClose } from 'react-icons/io5';
import { textContext } from '../../context/TextContext';
import '../style/style.css';

const SideBar = () => {
    //const [showSidebar, setShowSidebar] = useState(true);
    const {showSidebar, changeSidebarState, txts, selectText} = useContext(textContext);

    const toggleSidebar = () => {
        changeSidebarState();
    };

    const handleItemClick = (textId) => {
        selectText(textId);
    }

    return (
        <div>
            <aside className={`sidebar ${showSidebar ? '' : 'hide-sidebar'}`}>
                <div className={'sidebar-header'}>
                    <h2>Textos</h2>
                    <button className="close-button" onClick={toggleSidebar}>
                        <IoClose />
                    </button>
                </div>
                <ul className='links'>
                    {txts.map((text) => {3
                        return <li key={text.id}><a onClick={() => handleItemClick(text.id)}>{text.title}</a></li>;
                    })}
                </ul>
            </aside>
        </div>
    );
};

export default SideBar;
