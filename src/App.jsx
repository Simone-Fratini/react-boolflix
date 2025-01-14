import { useState } from 'react';
import './App.css';
//import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { MainContextProvider } from "./context/MainContext";
import HeaderComponent from './components/HeaderComponent';





// Pages
//import HomePage from './pages/HomePage';

function App() {
  return (
    <MainContextProvider>
      <HeaderComponent />
    </MainContextProvider>
  );
}

export default App;
