import { mergeData } from '../data/mergeData';
import exchangeRates from '../data/fx.json';
import countryData from '../data/countrycode.json';

describe('mergeData', () => {
  it('merges country and exchange rate data correctly', () => {
    const merged = mergeData();
    const sampleCurrency = merged.find(item => item.currency === 'NZD');

    expect(sampleCurrency).toBeDefined();
    expect(sampleCurrency.countryName).toBe('New Zealand');
    expect(sampleCurrency.countryCode).toBe('NZ');
    expect(sampleCurrency.exchangeRate).toHaveProperty('buy');
  });

  it('handles missing country data gracefully', () => {
    const merged = mergeData();
    const sampleCurrency = merged.find(item => item.currency === 'XYZ'); // Non-existent currency

    expect(sampleCurrency.countryName).toBe('Unknown');
    expect(sampleCurrency.countryCode).toBe('Unknown');
  });
});
