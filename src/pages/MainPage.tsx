import _ from 'lodash';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

import useGetOrders from '../hooks/useGetOrders';
import { TFilter, TMockData } from '../types/mockDataTypes';

const MainPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { toDayMockData, pages, totalPageNumber, isLoading } = useGetOrders();
  const [ordersState, setOrdersState] = useState<TMockData[]>([]);
  const [filter, setFilter] = useState<TFilter>({
    currentPageNumber: '1',
    id: 'false',
    transaction_time: 'false',
    status: 'all',
    customer_name: '',
  });

  const setFiltering = (key: string, value?: string) => {
    switch (key) {
      case 'id':
        setFilter({
          ...filter,
          [key]: filter.id === 'true' ? 'false' : 'true',
        });
        break;
      case 'transaction_time':
        setFilter({
          ...filter,
          [key]: filter.transaction_time === 'true' ? 'false' : 'true',
        });
        break;
      default:
        setFilter({ ...filter, [key]: value });
        break;
    }
  };

  useEffect(() => {
    if (toDayMockData === undefined) return;
    setOrdersState(toDayMockData);
  }, [toDayMockData]);

  useEffect(() => {
    if (toDayMockData === undefined) return;
    setOrdersState(
      toDayMockData?.filter(
        (item: TMockData) =>
          item.index >= 1 + (Number(filter.currentPageNumber) - 1) * 50 &&
          item.index <= Number(filter.currentPageNumber) * 50
      )
    );
  }, [filter.currentPageNumber]);

  useEffect(() => {
    setOrdersState(
      filter.id === 'false'
        ? _.sortBy(ordersState, 'id')
        : _.sortBy(ordersState, 'id').reverse()
    );
  }, [filter.id]);

  useEffect(() => {
    setOrdersState(
      filter.transaction_time === 'false'
        ? _.sortBy(ordersState, 'transaction_time')
        : _.sortBy(ordersState, 'transaction_time').reverse()
    );
  }, [filter.transaction_time]);

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
            {ordersState
              ?.filter(
                (item: TMockData) =>
                  item.index >=
                    1 + (Number(filter.currentPageNumber) - 1) * 50 &&
                  item.index <= Number(filter.currentPageNumber) * 50
              )
              .map((item: TMockData) => (
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
              <button
                key={page}
                onClick={() =>
                  setFiltering('currentPageNumber', page.toString())
                }>
                {page}
              </button>
            ))}
          </StPageBtnWrap>
          <div>
            <button onClick={() => setFiltering('id')}>주문번호</button>
            <br />
            <button onClick={() => setFiltering('transaction_time')}>
              거래일&거래시간
            </button>
          </div>
        </div>
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

const StSearchWrap = styled.div`
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
