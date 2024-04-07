import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './compornents/Pages/HomePage/HomePage';
import NavBar from './compornents/Items/NavBar/NavBar';

function App() {
  return (
    <Router>
      <div>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;