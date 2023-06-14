import React from "react";

const PriceInput = ({ price, handlePriceChange }) => {
  const handleChange = (event) => {
    handlePriceChange(event.target.value);
  };

  return (
    <div>
      <h3>Price:$ {price} </h3>
      <input value={price} onChange={handleChange} />
    </div>
  );
};

export default PriceInput;
