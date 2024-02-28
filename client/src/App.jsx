import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Hero from './components/Hero';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Metamask from './components/Metamask';

const App = () => {
  return (
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/metamask" element={<Metamask />} />
      </Routes>
    </Router>
  </>
  );
};

export default App