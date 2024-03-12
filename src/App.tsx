import React from 'react';
import './App.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import MainRoute from './project/routes/MainRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainRoute />
      </BrowserRouter>
    </div>
  );
}

export default App;
