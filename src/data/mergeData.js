import exchangeRates from './fx.json';
import countryData from './countrycode.json';

// merging countryData with exchangeRates to get the countrycode for flags fetching 
export function mergeData() {
    const countries = countryData.countries;
    return exchangeRates.fx.map(rate => {
        const country = Object.values(countries).find(
            c => c.CurrencyCode === rate.currency
        );
        //return a new array with both files properties
        return {
            ...rate,
            countryName: country ? Object.keys(countries).find(key => countries[key] === country) : "Unknown",
            countryCode: country?.CountryCode || "Unknown",
            currencyName: country?.Currency || rate.nameI18N,
        };
    });
}
