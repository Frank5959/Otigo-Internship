import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../components/SearchBar";

test("renders the search bar and handles input changes", () => {
  const mockOnSearch = jest.fn();
  render(<SearchBar searchTerm="" onSearch={mockOnSearch} />);

  const input = screen.getByPlaceholderText("Search currencies...");
  expect(input).toBeInTheDocument();

  fireEvent.change(input, { target: { value: "USD" } });
  expect(mockOnSearch).toHaveBeenCalledWith("USD");
});
