import { useState } from 'react';
import './App.css';
//import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { MainContextProvider } from "./context/MainContext";

//components
import HeaderComponent from './components/HeaderComponent';
import MainComponent from './components/MainComponent'; 





// Pages
//import HomePage from './pages/HomePage';

function App() {
  return (
    <MainContextProvider>
      <HeaderComponent />
      <MainComponent />
    </MainContextProvider>
  );
}

export default App;
