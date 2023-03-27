import { useCallback, useEffect, useState } from 'react';

import { instance } from '../apis/instance';
import { IOrderList } from '../types/type';

const useGetList = () => {
  const [orderData, setOrderData] = useState<IOrderList[]>([]);

  const fetchData = useCallback(() => {
    instance.get('').then(({ data }) =>
      setOrderData(
        data
          .sort(function (a: IOrderList, b: IOrderList) {
            return a.id - b.id;
          })
          .filter((item: IOrderList) =>
            item.transaction_time.includes('2023-03-08')
          )
      )
    );
  }, []);

  useEffect(() => fetchData(), []);

  return { orderData };
};

export default useGetList;
