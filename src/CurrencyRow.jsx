import React from 'react';

const CurrencyRow = ({
  currencyOptions,
  selectedCurrency,
  onChangeCurrency,
  amount,
  onChangeAmount,
}) => {
  const optionsList = currencyOptions.map((opt) => (
    <option key={opt} value={opt}>
      {opt}
    </option>
  ));
  return (
    <div className="currency-row">
      <input type="number" value={amount} onChange={onChangeAmount} />
      <select value={selectedCurrency} onChange={onChangeCurrency}>
        {optionsList}
      </select>
    </div>
  );
};

export default CurrencyRow;
