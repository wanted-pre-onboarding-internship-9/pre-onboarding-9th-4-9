import { Tbody, Td, Tr } from '@chakra-ui/react';

import { OrderType } from '../../types';

const TableBody = ({
  isLoading,
  pageItems,
}: {
  isLoading: boolean;
  pageItems: OrderType[] | undefined;
}) => {
  const splitDateAndTime = (dateWithTime: string) => {
    const [date, time] = dateWithTime.split(' ');
    return { date, time };
  };

  const hasOrder = pageItems && pageItems.length > 0;

  return (
    <Tbody>
      {isLoading ? (
        <Tr>
          <Td colSpan={7}>Loading...</Td>
        </Tr>
      ) : hasOrder ? (
        pageItems?.map(item => (
          <Tr key={item.id}>
            <Td textAlign='center'>{item.id}</Td>
            <Td textAlign='center'>
              {splitDateAndTime(item.transaction_time).date}
            </Td>
            <Td textAlign='center'>
              {splitDateAndTime(item.transaction_time).time}
            </Td>
            <Td textAlign='center' color={item.status ? '#6b84ff' : '#ff6b6b'}>
              {item.status ? '완료' : '미완료'}
            </Td>
            <Td textAlign='center'>{item.customer_id}</Td>
            <Td textAlign='center'>{item.customer_name}</Td>
            <Td textAlign='center'>{item.currency}</Td>
          </Tr>
        ))
      ) : (
        <Tr>
          <Td colSpan={7}>주문 내역이 없습니다.</Td>
        </Tr>
      )}
    </Tbody>
  );
};

export default TableBody;
