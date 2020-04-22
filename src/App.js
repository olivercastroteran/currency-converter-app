import React from 'react';
import money from './money.png';
import CurrencyRow from './CurrencyRow';

function App() {
  return (
    <div className="container">
      <h1>Convert</h1>
      <img src={money} alt="money-logo" />
      <CurrencyRow />
      <div className="sign">=</div>
      <CurrencyRow />
    </div>
  );
}

export default App;
