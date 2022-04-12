import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import CardContainer from './Components/cardContainer/CardContainer';
import Nav from './Components/navbar/Nav';

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <hr />
        <CardContainer />
        <Routes>
          <Route />
        </Routes>
      </Router>
    </div>
  );
}

export default App;