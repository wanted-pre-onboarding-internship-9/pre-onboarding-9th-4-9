import { useQuery } from 'react-query';

import { getDataAPI } from '../apis/instance';
import { IOrderList } from '../types/type';

const useGetList = () => {
  return useQuery(['getData'], getDataAPI, {
    refetchInterval: 5000,
    refetchIntervalInBackground: true, //브라우저에 focus 되어있지 않아도 refetch가 되게해준다.

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
