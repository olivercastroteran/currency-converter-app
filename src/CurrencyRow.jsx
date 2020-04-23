import React from 'react';

const CurrencyRow = ({ currencyOptions }) => {
  const optionsList = currencyOptions.map((opt) => (
    <option value={opt}>{opt}</option>
  ));
  return (
    <div className="currency-row">
      <input type="number" />
      <select>{optionsList}</select>
    </div>
  );
};

export default CurrencyRow;
