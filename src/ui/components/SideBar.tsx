import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import '../style/style.css';
import texts from './textos_test.jsx';

const SideBar = () => {
    const [showSidebar, setShowSidebar] = useState(true);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

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
                    {texts.map((text) => {
                        return <li key={text.id}><a>{text.title}</a></li>;
                    })}
                </ul>
            </aside>
        </div>
    );
};

export default SideBar;
