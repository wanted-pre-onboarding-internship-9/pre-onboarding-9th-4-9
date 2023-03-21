import { Tbody, Td, Tr } from '@chakra-ui/react';

import { OrderType } from '../types';

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
  );
};

export default TableBody;
