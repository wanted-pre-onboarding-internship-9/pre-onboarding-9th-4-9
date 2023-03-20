import { UseQueryResult, useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';

import { getOrdersApi } from '../apis';
import { OrderType } from '../types';

const useGetOrders = () => {
  const [searchParams] = useSearchParams();

  const {
    isLoading,
    isFetching,
    data: orders,
  }: UseQueryResult<OrderType[]> = useQuery(['orders'], () => getOrdersApi(), {
    refetchOnWindowFocus: false,
  });

  const requestedDate = searchParams.get('date') || '2023-03-08';
  const requestedPage = Number(searchParams.get('page')) || 1;

  const filteredOrders = orders?.filter(
    order => requestedDate && order.transaction_time.startsWith(requestedDate)
  );

  const totalPage = filteredOrders ? Math.ceil(filteredOrders.length / 50) : 0;
  const startIndex = (requestedPage - 1) * 50;
  const endIndex = startIndex + 50;
  const pageItems = filteredOrders?.slice(startIndex, endIndex);

  return { isLoading, isFetching, totalPage, pageItems };
};

export default useGetOrders;
