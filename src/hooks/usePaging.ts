import { useSearchParams } from 'react-router-dom';

import { OrderType } from '../types';

const usePaging = (orders: OrderType[] | undefined) => {
  const [searchParams] = useSearchParams();
  const requestedPage = Number(searchParams.get('page')) || 1;

  const totalPage = orders ? Math.ceil(orders.length / 50) : 0;
  const startIndex = (requestedPage - 1) * 50;
  const endIndex = startIndex + 50;
  const pageItems = orders?.slice(startIndex, endIndex);
  return { totalPage, pageItems };
};

export default usePaging;
