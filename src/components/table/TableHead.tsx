import { Th, Thead, Tr } from '@chakra-ui/react';

import { useOrderData } from '../../hooks/useOrderData';

const TableHead = () => {
  const { handleSortById } = useOrderData();

  return (
    <Thead>
      <Tr>
        <Th onClick={handleSortById}>주문번호</Th>
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
