import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import instance from '../apis/instance';
import { TMockData, TToDayMockData, TO_DAY, ONE_PAGE_LENGTH } from '../types/mockDataTypes';

const useGetOrders = () => {

    const getMockData = async () => {
        const response = await instance.get('');
        return response.data;
    }

    const { data, isLoading } = useQuery<TMockData[], AxiosError, TToDayMockData>(
        'orders',
        () => getMockData(),
        {
            select: response => {
                const toDayMockData = response
                    .filter(data => data.transaction_time.includes(TO_DAY))
                    .map((filterData: TMockData, index: number) => (
                        { ...filterData, index }
                    ));

                const dividePages = toDayMockData.length / ONE_PAGE_LENGTH;
                const totalPageNumber = Number.isInteger(dividePages) ? dividePages : Math.trunc(dividePages) + 1;
                const pages: number[] = [];
                for (let i = 1; i <= totalPageNumber; i++) {
                    pages.push(i);
                }

                return { toDayMockData, pages, totalPageNumber };
            },
            staleTime: 1000 * 5,
            cacheTime: 1000 * 5,
            refetchInterval: 1000 * 5,
            refetchIntervalInBackground: true,
        }
    );

    return ({
        toDayMockData: data?.toDayMockData,
        pages: data?.pages,
        totalPageNumber: data?.totalPageNumber,
        isLoading
    });
};

export default useGetOrders;