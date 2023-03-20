import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

import useGetOrders from '../hooks/useGetOrders';
import { TMockData } from '../types/mockDataTypes';

const MainPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { toDayMockData, pages, totalPageNumber, isLoading } = useGetOrders();

  const currentPageNumber = Number(searchParams.get('currentPageNumber')) || 1;
  const id = searchParams.get('id') === 'true' ? true : false;

  const setCurrentPageNumber = (selectPageNumber: string) => {
    setSearchParams({ ...searchParams, currentPageNumber: selectPageNumber });
  }

  const setFiltering = (key: string, value: string) => {
    setSearchParams({ ...searchParams, [key]: value });
  }

  const setSort = (key: string) => {
    const getKey = searchParams.get(key) || true;
    console.log("get", getKey);

    setSearchParams({ ...searchParams, [key]: !getKey });
  }

  // console.log(toDayMockData);
  // console.log(pages);
  // console.log(isLoading);

  return (
    <StMainPageWrap>
      <StSearchWrap>search</StSearchWrap>
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
            {toDayMockData
              ?.filter((item: TMockData) =>
                item.index >= 1 + ((currentPageNumber - 1) * 50) && item.index <= currentPageNumber * 50
              ).map((item: TMockData) => (
                <tr key={item.index}>
                  <td>{item.index}</td>
                  <td>{item.id}</td>
                  <td>{item.transaction_time}</td>
                  <td>{item.status ? 'true' : 'false'}</td>
                  <td>{item.customer_id}</td>
                  <td>{item.customer_name}</td>
                  <td>{item.currency}</td>
                </tr>
              ))}
          </StTbody>
        </StTable>
        <div>
          <StPageBtnWrap>
            {pages?.map(page => (
              <button key={page} onClick={() => setCurrentPageNumber(page.toString())}>{page}</button>
            ))}
          </StPageBtnWrap>
          <div>
            <button onClick={() => setSort('id')}>주문번호</button>
            <button onClick={() => setSort('transaction_time')}>거래일&거래시간</button>
          </div>
        </div>
      </StTableWrap>
    </StMainPageWrap>
  );
};

export default MainPage;

const StMainPageWrap = styled.div`
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  gap:10px;
`

const StSearchWrap = styled.div`
  height: 10%;
  background-color : orange;
`

const StTableWrap = styled.div`
  height:70%;
`

const StTable = styled.table`
  height: 80%;
  text-align :center;
  th {
    border: solid 1px red;
  }
  td {
    border: solid 1px green;
  }
`;
const StTbody = styled.tbody`
  height: 100%;
  display:block;
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

