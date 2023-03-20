import {
  Button,
  Input,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React from 'react';
import { useSearchParams } from 'react-router-dom';

import Pagination from '../components/Pagination';
import useGetOrders from '../hooks/useGetOrders';

const OrderListPage = () => {
  const { isLoading, pageItems, isFetching, totalPage } = useGetOrders();
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedDate = searchParams.get('date') || '2023-03-08';

  const splitDateAndTime = (dateWithTime: string) => {
    const [date, time] = dateWithTime.split(' ');
    return { date, time };
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    searchParams.set('date', event.target.value);
    setSearchParams(searchParams);
  };

  const hasOrder = pageItems && pageItems.length > 0;

  return (
    <>
      {isLoading || isFetching ? (
        <div>Loading...</div>
      ) : (
        <Table>
          <caption>주문 내역</caption>
          <Thead>
            <Tr>
              <Th scope='col'>
                주문 번호
                <Button>정렬</Button>
              </Th>
              <Th scope='col'>
                거래일
                <Input
                  onChange={handleDateChange}
                  type='date'
                  value={requestedDate}
                />
              </Th>
              <Th scope='col'>
                거래 시간
                <Button>정렬</Button>
              </Th>
              <Th scope='col'>주문 처리 상태</Th>
              <Th scope='col'>고객 번호</Th>
              <Th scope='col'>고객 이름</Th>
              <Th scope='col'>가격</Th>
            </Tr>
          </Thead>
          <Tbody>
            {hasOrder ? (
              pageItems?.map(item => (
                <Tr key={item.id}>
                  <Td>{item.id}</Td>
                  <Td>{splitDateAndTime(item.transaction_time).date}</Td>
                  <Td>{splitDateAndTime(item.transaction_time).time}</Td>
                  <Td>{item.status ? '완료' : '미완료'}</Td>
                  <Td>{item.customer_id}</Td>
                  <Td>{item.customer_name}</Td>
                  <Td>{item.currency}</Td>
                </Tr>
              ))
            ) : (
              <Tr>
                <Td colSpan={7}>주문 내역이 없습니다.</Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      )}
      {hasOrder && <Pagination totalPage={totalPage} />}
    </>
  );
};

export default OrderListPage;
