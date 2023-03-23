import { useCallback, useEffect, useState } from 'react';

import instance from '../apis/instance';
import { TODAY } from '../constants/constant';
import { IOrder } from '../types/type';
import useFilter from './useFilter';
import useSort from './useSort';

const useOrderData = () => {
  const [orderData, setOrderData] = useState<IOrder[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const sortedData = useSort(orderData);
  const filterData = useFilter(sortedData);

  const fetchData = useCallback(() => {
    instance
      .get('')
      .then(({ data }) =>
        setOrderData(() => {
          let newData = [...data];
          newData = newData.filter(
            (order: IOrder) => order.transaction_time.split(' ')[0] === TODAY
          );

          return newData;
        })
      )
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 5000);

    return () => clearInterval(intervalId);
  }, [fetchData]);

  return { filterData, isLoading };
};

export default useOrderData;
