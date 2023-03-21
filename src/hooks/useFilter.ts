import _ from 'lodash';
import { useEffect, useState } from 'react';
import {
  ONE_PAGE_ITEM_LENGTH,
  TMockData,
  TFilter,
} from '../types/mockDataTypes';

const useFilter = (toDayMockData: TMockData[] = [], isLoading: boolean) => {


  const [originDatas, setOriginDatas] = useState<TMockData[]>([]);
  const [orders, setOrders] = useState<any>([]);
  const [filters, setFilters] = useState<TFilter>({
    currentPageNumber: 1,
    sortKey: 'id',
    sortValue: 'asc',
    status: 'all',
    customer_name: '',
  });

  const getPageData = (data: TMockData[]): TMockData[] => {

    return data.filter((item: TMockData, index: number) =>
      index >=
      (filters.currentPageNumber - 1) * ONE_PAGE_ITEM_LENGTH &&
      index < filters.currentPageNumber * ONE_PAGE_ITEM_LENGTH
    )
  }

  useEffect(() => {
    if (isLoading) return;
    setOrders(getPageData(toDayMockData));
    setOriginDatas(toDayMockData);
  }, [toDayMockData])

  useEffect(() => {
    const filteringData =
      filters.status === 'all'
        ? originDatas.filter((toDayItem: TMockData) =>
          toDayItem.customer_name.includes(filters.customer_name)
        )
        : originDatas.filter((toDayItem: TMockData) =>
          toDayItem.status.toString() === filters.status
        ).filter((statusItem: TMockData) =>
          statusItem.customer_name.includes(filters.customer_name)
        )

    const pageData = getPageData(filteringData);

    const orderDatas = _.orderBy(pageData,
      [filters.sortKey], [filters.sortValue]
    );

    setOrders(orderDatas);

  }, [filters])

  return [orders, filters, setFilters];
};

export default useFilter;