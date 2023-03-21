import { useSearchParams } from 'react-router-dom';

import { OrderType } from '../types';

const useFilter = (orders: OrderType[] | undefined) => {
  const [searchParams] = useSearchParams();

  const requestedSortById = searchParams.get('sort-id');
  const requestedSortByTime = searchParams.get('sort-time');

  let sortedOrders = orders;

  if (requestedSortById) {
    const sortById = (a: OrderType, b: OrderType) => {
      if (requestedSortById === '내림차순') {
        return b.id - a.id;
      } else {
        return a.id - b.id;
      }
    };

    sortedOrders = sortedOrders?.sort(sortById);
  }

  if (requestedSortByTime) {
    const splitDateAndTime = (dateWithTime: string) => {
      const [date, time] = dateWithTime.split(' ');
      return { date, time };
    };

    const sortByTime = (a: OrderType, b: OrderType) => {
      if (requestedSortByTime === '내림차순') {
        return splitDateAndTime(b.transaction_time).time.localeCompare(
          splitDateAndTime(a.transaction_time).time
        );
      } else {
        return splitDateAndTime(a.transaction_time).time.localeCompare(
          splitDateAndTime(b.transaction_time).time
        );
      }
    };

    sortedOrders = sortedOrders?.sort(sortByTime);
  }

  return sortedOrders;
};

export default useFilter;
