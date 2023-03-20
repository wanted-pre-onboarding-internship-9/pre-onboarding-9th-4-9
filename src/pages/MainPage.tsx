import { useState } from 'react';
import { useQuery } from 'react-query';

import { getDataAPI } from '../apis/instance';
import ListTable from '../components/ListTable';
import Paginations from '../components/Pagination';

const MainPage = () => {
  const { isLoading, data } = useQuery('getData', () => getDataAPI());
  const [page, setPage] = useState(1);
  const [items, setItems] = useState(50);

  const handlePageChange = (page: number) => {
    setPage(page);
  };
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  // console.log(items * (page - 1), items * (page - 1) + items);

  return (
    <>
      <h1>switchwon</h1>
      <ListTable data={data} items={items} page={page} />
      <Paginations page={page} handlePageChange={handlePageChange} />
    </>
  );
};

export default MainPage;
