import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import './styles.css';    // import css file from scss

import Homepage from './pages/home/homepage';
import Search from './pages/safe-google/search';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/search" element={<Search />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
