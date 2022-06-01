import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/pages/Home';
import Materias from './components/pages/Materias';
import Programas from './components/pages/Programas';
import NotFound from './components/pages/404';
import MainNavbar from './components/Navbar';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <MainNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/materias" element={<Materias />} />
        <Route path="/programas" element={<Programas />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Contact />
    </Router>
  );
}

export default App;
