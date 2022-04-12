import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Nav from "./Components/navbar/Nav";
import SearchResults from "./Components/SearchResults/SearchResults";
import CardContainer from './Components/cardContainer/CardContainer';


function App() {
  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState([]);

  const handleInputValue = (e) => {
    e.preventDefault();
    axios
      .get(`https://www.omdbapi.com/?apikey=8edd63b7&s=${inputValue}`)
      .then((result) => {
        const {
          data: { Search },
        } = result;
        setResults(Search);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Router>
        <Nav
          handleInputValue={handleInputValue}
          setInputValue={setInputValue}
        />
        <hr />
        <Routes>
        <Route path="/" element={<CardContainer />} />
          <Route path="/search" element={<SearchResults results={results} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
