import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Nav from "./Components/navbar/Nav";
import SearchResults from "./Components/SearchResults/SearchResults";
import CardContainer from "./Components/cardContainer/CardContainer";
import ScrollButton from "./Components/Scroll/ScrollButton";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const handleInputValue = (e) => {
    e.preventDefault();
      axios
        .get(`https://www.omdbapi.com/?apikey=8edd63b7&s=${inputValue}`)
        .then((result) => {
          const {
            data: { Search },
          } = result;
          setResults(Search);
          setInputValue('')
          setLoading(false);
        })
        .catch((err) => console.log(err));
  };

  return (
    <div>
      <Router>
        <Nav
          handleInputValue={handleInputValue}
          setInputValue={setInputValue}
          inputValue={inputValue}
        />
        <hr />
        <Routes>
          <Route path="/" element={<CardContainer />} />
          <Route path="/search" element={<SearchResults results={results} loading={loading} />} />
        </Routes>
        <ScrollButton />
      </Router>
    </div>
  );
}

export default App;
