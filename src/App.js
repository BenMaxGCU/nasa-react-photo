import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import NasaPhoto from './components/NasaPhoto';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<Home />} path="/" exact="true" />
          <Route element={<NasaPhoto />} path="/nasaphoto" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
