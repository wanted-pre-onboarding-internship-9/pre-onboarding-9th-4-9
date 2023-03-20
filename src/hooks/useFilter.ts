import { useSearchParams } from 'react-router-dom';

import { OrderType } from '../types';

const useFilter = (orders: OrderType[] | undefined) => {
  const [searchParams] = useSearchParams();

  const requestedDate = searchParams.get('date') || '2023-03-08';
  const requestedSortById = searchParams.get('sort-id');
  const requestedSortByTime = searchParams.get('sort-time');
  const requestedPage = Number(searchParams.get('page')) || 1;

  let filteredOrders = orders;

  filteredOrders = orders?.filter(
    order => requestedDate && order.transaction_time.startsWith(requestedDate)
  );

  if (requestedSortById) {
    const sortById = (a: OrderType, b: OrderType) => {
      if (requestedSortById === '내림차순') {
        return b.id - a.id;
      } else {
        return a.id - b.id;
      }
    };

    filteredOrders = filteredOrders?.sort(sortById);
  }

  if (requestedSortByTime) {
    const sortByTime = (a: OrderType, b: OrderType) => {
      if (requestedSortByTime === '내림차순') {
        return b.transaction_time.localeCompare(a.transaction_time);
      } else {
        return a.transaction_time.localeCompare(b.transaction_time);
      }
    };

    filteredOrders = filteredOrders?.sort(sortByTime);
  }

  const totalPage = filteredOrders ? Math.ceil(filteredOrders.length / 50) : 0;
  const startIndex = (requestedPage - 1) * 50;
  const endIndex = startIndex + 50;
  const pageItems = filteredOrders?.slice(startIndex, endIndex);

  return { totalPage, pageItems };
};

export default useFilter;
