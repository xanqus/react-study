import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect, useCallback } from "react";
import NewsList from "./components/NewsList";
import Categories from "./components/Categories";

import axios from "axios";

function App() {
  const [category, setCategory] = useState("all");
  const onSelect = useCallback((category) => setCategory(category));
  useEffect(() => {
    console.log(category);
  }, [category]);
  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
}

export default App;
