import React from "react";
import "./index.css";
import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Homepage from './components/Homepage';
import Form from './components/Form';
import Confirmation from './components/Confirmation';





const App = () => {
  return (
    <>
    <BrowserRouter >
    <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
      <Link to='/' style={{backgroundColor: 'lightblue', fontSize: '2rem', color: 'black'}}>Home</Link>&nbsp;
      <Link to='' style={{backgroundColor: 'lightblue', fontSize: '2rem', color: 'black'}}>Help</Link>
    </nav>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/Form' element={<Form />} />
        <Route path='./Form' element={<Form />} />
        <Route path='/Confirmation' element={<Confirmation />} />
      </Routes>
    </BrowserRouter>
      
    </>
  );
};
export default App;
