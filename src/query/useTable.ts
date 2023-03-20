import { useState } from 'react';
import { useQuery } from 'react-query';

import instance from '../apis/instance';
import { IOrder } from '../types/type';

interface IFilter {
  filterToday: IOrder[];
  hasMore: boolean;
  pageData: Array<IOrder[]>;
}

export async function fetchProjects() {
  const { data } = await instance.get('');
  return data;
}

const pageSplit = (arr: IOrder[], chunk: number): Array<IOrder[]> => {
  const result = [];
  for (let i = 0; i < arr.length; i += chunk) result.push(arr.slice(i, i + 50));
  return result;
};

export function useTable(page = 0) {
  const [filter, setFilter] = useState('');

  const todayFilter = (data: IOrder[], page: number): IFilter => {
    const today = '2023-03-08';
    const filterToday = data.filter(el => el.transaction_time.includes(today));
    const hasMore = Math.ceil(filterToday.length / 50) > page;
    const ascData = filterToday.sort((a, b) => a.id - b.id);
    const pageData = pageSplit(ascData, 50);
    return { filterToday, hasMore, pageData };
  };
  const { data, isLoading, isFetching, isError } = useQuery(
    'order',
    fetchProjects,
    {
      select: (data: IOrder[]) => todayFilter(data, page),
    }
  );
  return { data, isLoading, isFetching, isError, filter, setFilter };
}

export default { useTable };
