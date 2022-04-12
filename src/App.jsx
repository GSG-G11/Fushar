import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './Components/navbar/Nav';

function App() {
  return <div>
    <Router>
      <Nav />
      <hr />
      <Routes>
        <Route/>
      </Routes>
    </Router>
  </div>;
}

export default App;
