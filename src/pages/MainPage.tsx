import { useState } from 'react';
import styled from 'styled-components';

import ListTable from '../components/ListTable';
import Paginations from '../components/Pagination';
import useGetList from '../hooks/useGetList';

const MainPage = () => {
  const { data } = useGetList();
  const [page, setPage] = useState(1);
  const [items, setItems] = useState(50);

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  // console.log(items * (page - 1), items * (page - 1) + items);

  return (
    <>
      <Title>
        <img
          src='http://www.switchwon.com/assets/img/210716-Logo.png'
          width='200px'
        />
      </Title>

      <ListTable data={data} items={items} page={page} />
      <Paginations page={page} handlePageChange={handlePageChange} />
    </>
  );
};

export default MainPage;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  padding-top: 30px;
  margin-bottom: 50px;
`;
