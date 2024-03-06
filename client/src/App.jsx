import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Hero from './pages/Hero';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

const App = () => {
  return (
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  </>
  );
};

export default App