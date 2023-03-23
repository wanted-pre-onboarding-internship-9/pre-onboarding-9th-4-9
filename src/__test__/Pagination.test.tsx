import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Pagination from '../components/pagination/Pagination';
import { LIMIT } from '../constants/constant';
import { IOrder } from '../types/type';

describe('Pagination', () => {
  const data: IOrder[] = Array.from({ length: 100 }, (order: IOrder) => {
    return order;
  });
  const numPages = Math.ceil(data.length / LIMIT);
  it('should render page number and arrow', () => {
    render(
      <BrowserRouter>
        <Pagination total={100} />
      </BrowserRouter>
    );

    for (let i = 0; i < numPages + 2; i++) {
      let pageNumber;
      if (i === 0) pageNumber = '<';
      else if (i === numPages + 1) pageNumber = '>';
      else pageNumber = i;

      expect(screen.getByText(pageNumber)).toBeInTheDocument();
    }
  });

  it('should change page when button is clicked', async () => {
    render(
      <BrowserRouter>
        <Pagination total={100} />
      </BrowserRouter>
    );

    const button = screen.getByText('2');
    fireEvent.click(button);

    expect(screen.getByTestId('2')).toBeInTheDocument();
  });
});
