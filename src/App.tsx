import './App.css';
import TextContextProvider from './context/TextContext';
import Editor from './ui/components/Editor';
import Header from './ui/components/Header';
import Preview from './ui/components/Preview';
import SideBar from './ui/components/SideBar';

function App() {

  return (
    <TextContextProvider>
      <>
          <Header /> 
          <div className='edit-area'>
            <SideBar />
            <Editor />
            <hr />
            <Preview /> 
          </div> 
            
      </>
    </TextContextProvider>
    
  )
}

export default App
