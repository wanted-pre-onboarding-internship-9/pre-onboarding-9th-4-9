import _ from 'lodash';
import styled from 'styled-components';
import Search from '../components/Search';
import TableItem from '../components/TableItem';
import useFilter from '../hooks/useFilter';

import useGetOrders from '../hooks/useGetOrders';
import { TMockData } from '../types/mockDataTypes';

const MainPage = () => {
  const { toDayMockData, pages, totalPageCount, isLoading } = useGetOrders();

  const [orders, filters, setFilters] = useFilter(toDayMockData, isLoading);

  return (
    <StMainPageWrap>
      <StSearchBox>
        <Search filters={filters} setFilters={setFilters} />
      </StSearchBox>
      <StTableWrap>
        <StTable>
          <thead>
            <tr>
              <th>index</th>
              <th>주문번호</th>
              <th>거래시간</th>
              <th>주문처리상태</th>
              <th>고객번호</th>
              <th>고객이름</th>
              <th>가격</th>
            </tr>
          </thead>
          <StTbody>
            {
              orders.map((item: TMockData) => (
                <TableItem key={item.id} item={item} />
              ))}
          </StTbody>
        </StTable>
        <StPageBtnWrap>
          {pages?.map(page => (
            <button
              key={page}
              onClick={() =>
                setFilters({ ...filters, currentPageNumber: page })
              }>
              {page}
            </button>
          ))}
        </StPageBtnWrap>
      </StTableWrap>
    </StMainPageWrap>
  );
};

export default MainPage;

const StMainPageWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const StSearchBox = styled.div`
  width:80%;
  height: 10%;
  background-color: orange;
`;

const StTableWrap = styled.div`
  height: 70%;
`;

const StTable = styled.table`
  height: 80%;
  text-align: center;
  th {
    border: solid 1px red;
  }
  td {
    border: solid 1px green;
  }
`;
const StTbody = styled.tbody`
  height: 100%;
  display: block;
  overflow: auto;
`;

const StPageBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  button {
    border: solid 1px blue;
  }
`;
