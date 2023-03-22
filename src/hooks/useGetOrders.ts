import { AxiosError } from 'axios';
import { useQuery } from 'react-query';

import instance from '../apis/instance';
import { TMockData, TO_DAY } from '../types/mockDataTypes';

const useGetOrders = () => {
  const getMockData = async () => {
    const response = await instance.get('');
    return response.data;
  };

  const { data, isLoading } = useQuery<TMockData[], AxiosError>(
    'orders',
    () => getMockData(),
    {
      select: response => {
        const toDayMockData = response
          .filter(data => data.transaction_time.includes(TO_DAY))
          .map((filterData: TMockData, index: number) => ({
            ...filterData,
            index: index + 1,
          }));

        return toDayMockData;
      },
      staleTime: 1000 * 5,
      cacheTime: 1000 * 5,
      refetchInterval: 1000 * 5,
      refetchIntervalInBackground: true,
    }
  );

  return {
    toDayMockData: data,
    isLoading,
  };
};

export default useGetOrders;
