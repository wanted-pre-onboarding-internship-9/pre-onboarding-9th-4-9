import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Table from '../components/table/Table';
import { IOrder } from '../types/type';

describe('Table', () => {
  const data: IOrder[] = [
    {
      id: 1,
      transaction_time: `2023-03-07 17:39:50`,
      status: true,
      customer_id: 15,
      customer_name: 'Holmes Howard',
      currency: '$5.61',
    },
  ];
  it('should render order data table', () => {
    render(
      <BrowserRouter>
        <Table data={data} />
      </BrowserRouter>
    );
    const tableHead = [
      screen.getByText('주문번호'),
      screen.getByText('거래시간'),
      screen.getByText('주문처리상태'),
      screen.getByText('고객번호'),
      screen.getByText('고객이름'),
      screen.getByText('가격'),
    ];
    const tableBody = [
      screen.getByText('1'),
      screen.getByText('2023-03-07 17:39:50'),
      screen.getByText('체결'),
      screen.getByText('15'),
      screen.getByText('Holmes Howard'),
      screen.getByText('$5.61'),
    ];

    tableHead.forEach(head => expect(head).toBeInTheDocument());
    tableBody.forEach(body => {
      expect(body).toBeInTheDocument();
    });
  });
});
