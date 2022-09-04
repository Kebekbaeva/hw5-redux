import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from "./main/Nav"
import Main from "./main/Main"
import About from "./About/About"


function App() {
  return (
    <div className='App'>
      <BrowserRouter>         
        <Nav/>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;