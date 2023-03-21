import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { OrderType } from '../types';

const useFilter = (orders: OrderType[] | undefined) => {
  const [filteredOrders, setFilteredOrders] = useState<OrderType[]>([]);
  const [searchParams] = useSearchParams();
  const requestedDate = searchParams.get('date') || '2023-03-08';
  const requestedStatus =
    searchParams.get('status') === '완료'
      ? true
      : searchParams.get('status') === '미완료'
      ? false
      : null;
  const requestedName = searchParams.get('search');

  useEffect(() => {
    let tempFilteredOrders = orders || [];

    if (requestedDate) {
      tempFilteredOrders = tempFilteredOrders.filter(order =>
        order.transaction_time.startsWith(requestedDate)
      );
    }

    if (requestedStatus !== null) {
      tempFilteredOrders = tempFilteredOrders.filter(
        order => order.status === requestedStatus
      );
    }

    if (requestedName) {
      tempFilteredOrders = tempFilteredOrders.filter(order =>
        order.customer_name
          .toUpperCase()
          .includes(requestedName.toLocaleUpperCase())
      );
    }

    setFilteredOrders(tempFilteredOrders);
  }, [orders, requestedDate, requestedStatus, requestedName]);

  return filteredOrders;
};

export default useFilter;
