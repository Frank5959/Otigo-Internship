import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar.jsx";
import CurrencyList from "./components/CurrencyList.jsx";
import { mergeData } from "./data/mergeData.js";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCurrencies, setFilteredCurrencies] = useState([]);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setSearchTerm(decodeURIComponent(hash));
    }
  }, []);

  useEffect(() => {
    const mergedData = mergeData();
    //filter data basing on their country name and currency name
    const filtered = mergedData.filter((item) => {
      const searchLower = searchTerm.toLowerCase();
      const countryMatch =
        item.countryName &&
        item.countryName.toLowerCase().includes(searchLower);
      const currencyMatch =
        item.currency && item.currency.toLowerCase().includes(searchLower);
      return countryMatch || currencyMatch;
    });

    setFilteredCurrencies(filtered);
    if (searchTerm) {
      window.location.hash = encodeURIComponent(searchTerm);
    } else {
      window.location.hash = "";
    }
  }, [searchTerm]);

  return (
    <div className="app">
      <Header />
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
      <CurrencyList currencies={filteredCurrencies} />
    </div>
  );
}

export default App;
