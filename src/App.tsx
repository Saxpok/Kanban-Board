import React from 'react';
import './App.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import MainRoute from './project/routes/MainRoute';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <MainRoute />
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
