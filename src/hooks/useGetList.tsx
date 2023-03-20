import { useQuery } from 'react-query';

import { getDataAPI } from '../apis/instance';
import { IOrderList } from '../types/type';

const useGetList = () => {
  return useQuery(['getData'], getDataAPI, {
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    select: data => {
      const orderList = data?.data
        .sort(function (a: IOrderList, b: IOrderList) {
          return a.id - b.id;
        })
        .filter((item: IOrderList) =>
          item.transaction_time.includes('2023-03-08')
        );

      return orderList;
    },
  });
};

export default useGetList;
