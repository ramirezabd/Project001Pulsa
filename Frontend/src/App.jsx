import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from './components/Main';
import NF404 from './components/NF404';
import Compriwayat from './pages/Compriwayat';

function App() {

  return (
    <Router>
        <nav>
        <ul>
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/compriwayat">Riwayat</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Compriwayat" element={<Compriwayat />} />
        <Route path="*" element={<NF404 />} />
      </Routes>
    </Router>
  );
}

export default App;
