import { UseQueryResult, useQuery } from 'react-query';

import { getOrdersApi } from '../apis';
import { OrderType } from '../types';
import useFilter from './useFilter';

const useGetOrders = () => {
  const {
    isLoading,
    isFetching,
    data: orders,
  }: UseQueryResult<OrderType[]> = useQuery(['orders'], () => getOrdersApi(), {
    refetchOnWindowFocus: false,
  });

  const { totalPage, pageItems } = useFilter(orders);

  return { isLoading, isFetching, totalPage, pageItems };
};

export default useGetOrders;
