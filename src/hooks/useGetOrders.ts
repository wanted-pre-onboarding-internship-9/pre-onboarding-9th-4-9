import { UseQueryResult, useQuery } from 'react-query';

import { getOrdersApi } from '../apis';
import { OrderType } from '../types';
import useFilter from './useFilter';
import usePaging from './usePaging';
import useSort from './useSort';

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

  const filteredOrders = useFilter(orders);
  const sortedOrders = useSort(filteredOrders);
  const { totalPage, pageItems } = usePaging(sortedOrders);

  return { isLoading, totalPage, pageItems };
};

export default useGetOrders;
