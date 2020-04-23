import React, { useEffect, useState } from 'react';
import money from './money.png';
import CurrencyRow from './CurrencyRow';

const BASE_URL = 'https://api.exchangeratesapi.io/latest';

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  console.log(currencyOptions);

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
      });
  }, []);

  return (
    <div className="container">
      <h1>Convert</h1>
      <img src={money} alt="money-logo" />
      <CurrencyRow currencyOptions={currencyOptions} />
      <div className="sign">=</div>
      <CurrencyRow currencyOptions={currencyOptions} />
    </div>
  );
}

export default App;
