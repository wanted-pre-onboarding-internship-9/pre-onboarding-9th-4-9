import { useCallback, useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';

import instance from '../apis/instance';
import FilterSection from '../components/FilterSection';
import PaginationSection from '../components/PaginationSection';
import SearchSection from '../components/SearchSection';
import TableSection from '../components/TableSection';
import { IOrder } from '../types/type';

export async function fetchProjects() {
  const { data } = await instance.get('');
  return data;
}

const MainPage = () => {
  const [search, setSearch] = useState<string>('');

  const handleSearch = useCallback(
    (data: IOrder[]) => {
      return data.filter(
        obj =>
          obj.customer_name.includes(search) &&
          obj.transaction_time.includes('2023-03-08')
      );
    },
    [search]
  );

  const { data, isLoading, isError } = useQuery('order', fetchProjects, {
    select: handleSearch,
    refetchInterval: 5000,
    refetchIntervalInBackground: true,
  });
  if (isLoading) <span>Loading...</span>;
  if (isError) <span>Error...</span>;
  return (
    <Main>
      <SearchSection setSearch={setSearch} />
      <FilterSection />
      {data && <PaginationSection data={data} />}
      {data && <TableSection data={data} />}
    </Main>
  );
};

export default MainPage;

const Main = styled.main``;
