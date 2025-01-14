import { useState } from 'react';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { MainContextProvider } from "./contexts/MainContext";

// Layout on utilizzato
import DefaultLayout from './pages/DefaultLayout';

// Pages
import HomePage from './pages/HomePage';

function App() {
  return (
    <MainContextProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </MainContextProvider>
  );
}

export default App;
