import { SearchIcon, SmallCloseIcon } from '@chakra-ui/icons';
import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Pagination from '../components/Pagination';
import useGetOrders from '../hooks/useGetOrders';

const OrderListPage = () => {
  const { isLoading, pageItems, totalPage } = useGetOrders();
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedDate = searchParams.get('date') || '2023-03-08';
  const searchInputRef = useRef<HTMLInputElement>(null);

  const [sortByIdPlaceholder, setSortByIdPlaceholder] = useState(
    searchParams.get('sort-id') || '정렬 선택'
  );
  const [sortByTimePlaceholder, setSortByTimePlaceholder] = useState(
    searchParams.get('sort-time') || '정렬 선택'
  );
  const [filterByStatusPlaceholder, setFilterByStatusPlaceholder] = useState(
    searchParams.get('status') || '정렬 선택'
  );

  const splitDateAndTime = (dateWithTime: string) => {
    const [date, time] = dateWithTime.split(' ');
    return { date, time };
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    searchParams.set('date', event.target.value);
    setSearchParams(searchParams);
  };

  const handleSortById: React.ChangeEventHandler<HTMLSelectElement> = event => {
    setSortByTimePlaceholder('정렬 선택');
    searchParams.delete('sort-time');
    searchParams.set('sort-id', event.target.value);
    setSearchParams(searchParams);
  };

  const handleSortByTime: React.ChangeEventHandler<
    HTMLSelectElement
  > = event => {
    setSortByIdPlaceholder('정렬 선택');
    searchParams.delete('sort-id');
    searchParams.set('sort-time', event.target.value);
    setSearchParams(searchParams);
  };

  const handleFilterBySatus: React.ChangeEventHandler<
    HTMLSelectElement
  > = event => {
    searchParams.set('status', event.target.value);
    setSearchParams(searchParams);
  };

  const handleSearchName: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();
    const targetEl = event.target as HTMLFormElement;
    const inputValue = (targetEl[0] as HTMLInputElement).value;

    searchParams.set('search', inputValue);
    setSearchParams(searchParams);
  };

  const handleResetSearch = () => {
    if (searchInputRef.current) {
      searchInputRef.current.value = '';
      searchParams.delete('search');
      setSearchParams(searchParams);
    }
  };

  const hasOrder = pageItems && pageItems.length > 0;

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Table>
          <caption>주문 내역</caption>
          <Thead>
            <Tr>
              <Th scope='col'>
                주문 번호
                <Select
                  placeholder={sortByIdPlaceholder}
                  onChange={handleSortById}>
                  <option value='오름차순'>오름차순</option>
                  <option value='내림차순'>내림차순</option>
                </Select>
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
                <Select
                  placeholder={sortByTimePlaceholder}
                  onChange={handleSortByTime}>
                  <option value='오름차순'>오름차순</option>
                  <option value='내림차순'>내림차순</option>
                </Select>
              </Th>
              <Th scope='col'>
                주문 처리 상태
                <Select
                  placeholder={filterByStatusPlaceholder}
                  onChange={handleFilterBySatus}>
                  <option value='완료'>완료</option>
                  <option value='미완료'>미완료</option>
                </Select>
              </Th>
              <Th scope='col'>고객 번호</Th>
              <Th scope='col'>
                고객 이름
                <form onSubmit={handleSearchName}>
                  <InputGroup>
                    <Input ref={searchInputRef} />
                    <InputRightElement>
                      <IconButton
                        type='submit'
                        aria-label='Search database'
                        icon={<SearchIcon />}
                      />
                      <IconButton
                        onClick={handleResetSearch}
                        type='button'
                        aria-label='Search database'
                        icon={<SmallCloseIcon />}
                      />
                    </InputRightElement>
                  </InputGroup>
                </form>
              </Th>
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
