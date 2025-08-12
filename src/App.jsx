import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Length from './pages/Length';
import Weight from './pages/Weight';
import Volume from './pages/Volume';
import Temperature from './pages/Temperature';
import Currency from './pages/Currency';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/length" element={<Length />} />
          <Route path="/weight" element={<Weight />} />
          <Route path="/volume" element={<Volume />} />
          <Route path="/temperature" element={<Temperature />} />
          <Route path="/currency" element={<Currency />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;