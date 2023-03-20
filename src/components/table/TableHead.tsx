import { Th, Thead, Tr } from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';

import { useOrderData } from '../../hooks/useOrderData';

const TableHead = () => {
  const { handleSortById } = useOrderData();
  const [params, setParams] = useSearchParams();

  const sortId = params.get('sort_id');

  const onClickSortById = () => {
    if (!sortId) {
      handleSortById('desc');
      params.set('sort_id', 'desc');
      setParams(params);
    } else {
      handleSortById('asc');
      params.delete('sort_id');
      setParams(params);
    }
  };

  return (
    <Thead>
      <Tr>
        <Th onClick={onClickSortById}>주문번호</Th>
        <Th>거래시간</Th>
        <Th>주문처리상태</Th>
        <Th>고객번호</Th>
        <Th>고객이름</Th>
        <Th>가격</Th>
      </Tr>
    </Thead>
  );
};

export default TableHead;
