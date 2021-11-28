import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

const App = () => {
  const [advice, setAdvice] = useState("");

  const fetchAdvice = async () => {
    await axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => {
        const { advice } = res.data.slip;
        setAdvice(advice);
        console.log(advice);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="app">
      <div className="card">
        <h1 className="advice">&quot;{advice}&quot;</h1>
        <button className="button" onClick={fetchAdvice}>
          <span>Get More Advice!</span>
        </button>
      </div>
    </div>
  );
};

export default App;
