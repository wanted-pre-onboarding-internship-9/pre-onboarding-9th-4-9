import { UseQueryResult, useQuery } from 'react-query';

import { getOrdersApi } from '../apis';
import { OrderType } from '../types';
import useFilter from './useFilter';

const useGetOrders = () => {
  const { isLoading, data: orders }: UseQueryResult<OrderType[]> = useQuery(
    'orders',
    () => getOrdersApi(),
    {
      refetchInterval: 5 * 1000,
      refetchOnWindowFocus: 'always',
      refetchIntervalInBackground: true,
    }
  );

  const { totalPage, pageItems } = useFilter(orders);

  return { isLoading, totalPage, pageItems };
};

export default useGetOrders;
