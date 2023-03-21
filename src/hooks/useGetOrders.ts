import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import instance from '../apis/instance';
import {
  ONE_PAGE_ITEM_LENGTH,
  TMockData,
  TO_DAY,
  TToDayMockData,
} from '../types/mockDataTypes';

const useGetOrders = () => {
  const getMockData = async () => {
    const response = await instance.get('');
    return response.data;
  };

  const { data, isLoading } = useQuery<TMockData[], AxiosError, TToDayMockData>(
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

        const dividePages = toDayMockData.length / ONE_PAGE_ITEM_LENGTH;

        const totalPageCount = Number.isInteger(dividePages)
          ? dividePages
          : Math.trunc(dividePages) + 1;

        const pages: number[] = [];
        for (let i = 1; i <= totalPageCount; i++) {
          pages.push(i);
        }

        return { toDayMockData, pages, totalPageCount };
      },
      staleTime: 1000 * 5,
      cacheTime: 1000 * 5,
      refetchInterval: 1000 * 5,
      refetchIntervalInBackground: true,
    }
  );

  return {
    toDayMockData: data?.toDayMockData,
    pages: data?.pages,
    totalPageCount: data?.totalPageCount,
    isLoading,
  };
};

export default useGetOrders;
