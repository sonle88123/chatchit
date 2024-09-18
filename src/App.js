import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Assistants from './Pages/Assistants';

function App() {
  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/assistants' element={<Assistants/>}/>
    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
