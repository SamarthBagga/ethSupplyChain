import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './collection/Login';
import Register from './collection/Register';
import Home from './collection/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App