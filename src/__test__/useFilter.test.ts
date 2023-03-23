import { renderHook } from '@testing-library/react-hooks';
import { MemoryRouter } from 'react-router-dom';

import useFilter from '../hooks/useFilter';
import { OrderType } from '../types';

const orders: OrderType[] = [
  {
    id: 2,
    transaction_time: '2023-03-09 10:00:00',
    customer_id: 2,
    customer_name: 'bc',
    status: false,
    currency: '$20.2',
  },
  {
    id: 1,
    transaction_time: '2023-03-08 09:00:00',
    customer_id: 1,
    customer_name: 'Ab',
    status: true,
    currency: '$100.1',
  },
  {
    id: 5,
    transaction_time: '2023-03-09 10:00:33',
    customer_id: 23,
    customer_name: 'bdc',
    status: false,
    currency: '$20.22',
  },
  {
    id: 3,
    transaction_time: '2023-03-08 11:00:00',
    customer_id: 3,
    customer_name: 'ac',
    status: true,
    currency: '$3.3',
  },
];

describe('useFilter', () => {
  it('should return orders start with today`s transaction_time if there is no search param', () => {
    const { result } = renderHook(() => useFilter(orders), {
      wrapper: MemoryRouter,
    });

    result.current.forEach(item =>
      expect(item.transaction_time).toMatch(/2023-03-08*/)
    );
  });
});
