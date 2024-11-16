import { render, screen } from '@testing-library/react';
import CurrencyList from '../components/CurrencyList';

const mockCurrencies = [
  {
    countryName: 'New Zealand',
    currency: 'NZD',
    countryCode: 'NZ',
    exchangeRate: {
      buy: 113,
      middle: 115,
      sell: 117,
    },
  },
  {
    countryName: 'Fiji',
    currency: 'FJD',
    countryCode: 'FJ',
    exchangeRate: {
      buy: 50,
      middle: 52,
      sell: 54,
    },
  },
];

test('renders the currency list', () => {
  render(<CurrencyList currencies={mockCurrencies} />);

  expect(screen.getByText('New Zealand')).toBeInTheDocument();
  expect(screen.getByText('Fiji')).toBeInTheDocument();
  expect(screen.getByText('NZD')).toBeInTheDocument();
  expect(screen.getByText('FJD')).toBeInTheDocument();
  expect(screen.getByText('Buy Rate: 1')).toBeInTheDocument(); // Assuming base rates normalize this
});
