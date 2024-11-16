import React from "react";

function CurrencyList({ currencies }) {
  const base_sell = 117.65;
  const base_buy = 113.95;
  const base_middle = 115.8;

  return (
    <div className="currency-list">
      <div className="currency-label">
        <span>Flags</span>
        <span>Country Name</span>
        <span>Currency</span>
        <span>Buy Rate</span>
        <span>Middle Rate</span>
        <span>Sell Rate</span>
      </div>
      {/* Currency items */}
      <ul>
        {currencies.map((currency) => (
          <li key={currency.code} className="currency-item">
            {/* maping countrycode to image */}
            <img
              src={`/flags/${currency.countryCode.toLowerCase()}.png`}
              alt={`${currency.countryName || "Unknown"} flag`}
              className="currency-flag"
            />
            <span>{currency.countryName || "Unknown"}</span>
            <span>{currency.currency}</span>
            <span>
              {currency.exchangeRate
                ? (currency.exchangeRate.buy / base_buy).toFixed(5)
                : "N/A"}
            </span>
            <span>
              {currency.exchangeRate
                ? (currency.exchangeRate.middle / base_middle).toFixed(5)
                : "N/A"}
            </span>
            <span>
              {currency.exchangeRate
                ? (currency.exchangeRate.sell / base_sell).toFixed(5)
                : "N/A"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CurrencyList;
