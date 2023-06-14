import React, { useState } from "react";
import PriceInput from "./components/PriceInput";
import "./App.css";

const App = () => {
  const [price, setPrice] = useState(1);

  const handlePriceChange = (value) => {
    if (value >= 0) {
      setPrice(value);
    } else {
      alert("Negative price is not supported");
    }
  };

  return (
    <div className="App">
      <PriceInput price={price} handlePriceChange={handlePriceChange} />
    </div>
  );
};

export default App;
