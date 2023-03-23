import { act, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import Filter from '../components/filter/Filter';
import SearchBox from '../components/filter/SearchBox';

describe('Filter', () => {
  it('should render components in filter', () => {
    render(
      <BrowserRouter>
        <Filter />
      </BrowserRouter>
    );

    const selectLabel = screen.getByText('주문상태');
    const searchLabel = screen.getByText('이름검색');
    const searchButton = screen.getByText('검색');
    const searchInitButton = screen.getByText('검색 초기화');
    const filterInitButton = screen.getByText('필터링 초기화');

    expect(selectLabel).toBeInTheDocument();
    expect(searchLabel).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
    expect(searchInitButton).toBeInTheDocument();
    expect(filterInitButton).toBeInTheDocument();
  });

  it('should change search param', async () => {
    render(
      <BrowserRouter>
        <SearchBox />
      </BrowserRouter>
    );

    const input = screen.getByRole('textbox') as HTMLInputElement;
    const button = screen.getByText('검색');
    const initButton = screen.getByText('검색 초기화');
    fireEvent.change(input, { target: { value: 'john' } });
    fireEvent.click(button);

    expect(screen.getByTestId('john')).toBeInTheDocument();

    fireEvent.click(initButton);

    expect(screen.getByTestId('')).toBeInTheDocument();
  });

  it('should initialize filter condition when filter init button is clicked', async () => {
    render(
      <BrowserRouter>
        <Filter />
      </BrowserRouter>
    );
    const selectElement = screen.getByRole('combobox');
    const filterInitButton = screen.getByText('필터링 초기화');
    await act(async () => {
      userEvent.selectOptions(selectElement, 'true');
    });
    expect(screen.getByTestId('need to init')).toBeInTheDocument();
    fireEvent.click(filterInitButton);
    expect(screen.getByTestId('already init')).toBeInTheDocument();
  });
});
