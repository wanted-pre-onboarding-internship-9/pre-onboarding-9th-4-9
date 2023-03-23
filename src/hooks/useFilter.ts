import _ from 'lodash';
import { useEffect, useState } from 'react';

import {
  ONE_PAGE_ITEM_LENGTH,
  TFilter,
  TMockData,
  TPagingItems,
} from '../types/mockDataTypes';

const useFilter = (toDayMockData: TMockData[] = [], isLoading: boolean) => {
  const [originDatas, setOriginDatas] = useState<TMockData[]>([]);
  const [orders, setOrders] = useState<any>([]);
  const [pagingItems, setPaingItems] = useState<TPagingItems>({
    pages: [],
    totalPageCount: 0,
  });
  const [filters, setFilters] = useState<TFilter>({
    currentPageNumber: 1,
    sortKey: 'id',
    sortValue: 'asc',
    status: 'all',
    customer_name: '',
  });

  const getPageData = (data: TMockData[] = []): TMockData[] => {
    return data.filter(
      (item: TMockData, index: number) =>
        index >= (filters.currentPageNumber - 1) * ONE_PAGE_ITEM_LENGTH &&
        index < filters.currentPageNumber * ONE_PAGE_ITEM_LENGTH
    );
  };

  const getPaging = (filteringData: TMockData[] = []): TPagingItems => {
    const dividePages = filteringData.length / ONE_PAGE_ITEM_LENGTH;

    const totalPageCount = Number.isInteger(dividePages)
      ? dividePages
      : Math.trunc(dividePages) + 1;

    const pages: number[] = [];
    for (let i = 1; i <= totalPageCount; i++) {
      pages.push(i);
    }

    return { pages, totalPageCount };
  };

  useEffect(() => {
    if (isLoading) return;
    setOrders(getPageData(toDayMockData));
    setPaingItems(getPaging(toDayMockData));
    setOriginDatas(toDayMockData);
  }, [toDayMockData]);

  useEffect(() => {
    const filteringData =
      filters.status === 'all'
        ? originDatas.filter((toDayItem: TMockData) =>
          toDayItem.customer_name.includes(filters.customer_name)
        )
        : originDatas
          .filter(
            (toDayItem: TMockData) =>
              toDayItem.status.toString() === filters.status
          )
          .filter((statusItem: TMockData) =>
            statusItem.customer_name.includes(filters.customer_name)
          );

    setPaingItems(getPaging(filteringData));

    const pageData = getPageData(filteringData);

    const orderDatas = _.orderBy(
      pageData,
      [filters.sortKey],
      [filters.sortValue]
    );
    setOrders(orderDatas);
  }, [filters]);

  return [orders, pagingItems, filters, setFilters];
};

export default useFilter;
