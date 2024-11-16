import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import { mergeData } from '../data/mergeData';

jest.mock('../data/mergeData'); // Mock the mergeData function

const mockData = [
  {
    countryName: 'New Zealand',
    currency: 'NZD',
    countryCode: 'NZ',
    exchangeRate: { buy: 113, middle: 115, sell: 117 },
  },
  {
    countryName: 'Fiji',
    currency: 'FJD',
    countryCode: 'FJ',
    exchangeRate: { buy: 50, middle: 52, sell: 54 },
  },
];

mergeData.mockReturnValue(mockData);

test('filters and renders currency list based on search term', () => {
  render(<App />);

  const input = screen.getByPlaceholderText('Search...');
  fireEvent.change(input, { target: { value: 'Fiji' } });

  expect(screen.getByText('Fiji')).toBeInTheDocument();
  expect(screen.queryByText('New Zealand')).not.toBeInTheDocument();
});
