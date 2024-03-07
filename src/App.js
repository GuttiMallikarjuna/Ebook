import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Contactus from './components/contactus';

function App() {
  return (
    <>
    <BrowserRouter basename="Ebook">
        <Routes>
          <Route path="/" element={<Contactus/>} />  
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
