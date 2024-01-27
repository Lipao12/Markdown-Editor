import './App.css';
import TextContextProvider from './context/TextContext';
import Editor from './ui/components/Editor';
import Preview from './ui/components/Preview';
import SideBar from './ui/components/SideBar';

function App() {

  return (
    <TextContextProvider>
      <>
          <SideBar />
          <Editor />
          <hr />
          <Preview />
        
      </>
    </TextContextProvider>
    
  )
}

export default App
