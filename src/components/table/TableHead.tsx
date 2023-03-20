import { Th, Thead, Tr } from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';

import { useOrderData } from '../../hooks/useOrderData';

const TableHead = () => {
  const { handleSortById, handleSortByTime } = useOrderData();
  const [params, setParams] = useSearchParams();

  const sortType = params.get('sort');

  const onClickSortById = () => {
    if (!sortType || sortType !== 'id:desc') {
      handleSortById('desc');
      params.set('sort', 'id:desc');
      setParams(params);
    } else {
      handleSortById('asc');
      params.set('sort', 'id:asc');
      setParams(params);
    }
  };

  const onClickSortByTime = () => {
    if (!sortType || sortType !== 'time:desc') {
      handleSortByTime('desc');
      params.set('sort', 'time:desc');
      setParams(params);
    } else {
      handleSortByTime('asc');
      params.set('sort', 'time:asc');
      setParams(params);
    }
  };

  return (
    <Thead>
      <Tr>
        <Th onClick={onClickSortById}>주문번호</Th>
        <Th onClick={onClickSortByTime}>거래시간</Th>
        <Th>주문처리상태</Th>
        <Th>고객번호</Th>
        <Th>고객이름</Th>
        <Th>가격</Th>
      </Tr>
    </Thead>
  );
};

export default TableHead;
