import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { IOrder } from '../types/type';

const useSort = (orderData: IOrder[]) => {
  const [searchParams] = useSearchParams();
  const [sortedOrders, setSortedOrders] = useState<IOrder[]>([]);

  useEffect(() => {
    setSortedOrders(orderData);
  }, [orderData]);

  const [type, order] = (searchParams.get('sort') || ' ').split(':');

  useEffect(() => {
    if (type === 'id') {
      const sortById = (a: IOrder, b: IOrder) => {
        if (order === 'desc') {
          return b.id - a.id;
        } else {
          return a.id - b.id;
        }
      };

      setSortedOrders(orders => {
        const newOrders = [...orders];
        newOrders.sort(sortById);
        return newOrders;
      });
    }

    if (type === 'time') {
      const splitDateAndTime = (dateWithTime: string) => {
        const [date, time] = dateWithTime.split(' ');
        return { date, time };
      };

      const sortByTime = (a: IOrder, b: IOrder) => {
        if (order === 'desc') {
          return splitDateAndTime(b.transaction_time).time.localeCompare(
            splitDateAndTime(a.transaction_time).time
          );
        } else {
          return splitDateAndTime(a.transaction_time).time.localeCompare(
            splitDateAndTime(b.transaction_time).time
          );
        }
      };

      setSortedOrders(orders => {
        const newOrders = [...orders];
        newOrders.sort(sortByTime);
        return newOrders;
      });
    }
  }, [type, order, orderData]);

  return sortedOrders;
};

export default useSort;
