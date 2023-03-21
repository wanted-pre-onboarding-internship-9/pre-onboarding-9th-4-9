import { Table, Th, Thead, Tr } from '@chakra-ui/react';

import Pagination from '../components/Pagination';
import TableBody from '../components/TableBody';
import * as Tablehead from '../components/tableHead';
import useGetOrders from '../hooks/useGetOrders';

const OrderListPage = () => {
  const { isLoading, pageItems, totalPage } = useGetOrders();
  const hasOrder = (pageItems && pageItems.length > 0) || false;

  return (
    <>
      <Table>
        <caption>주문 내역</caption>
        <Thead>
          <Tr>
            <Tablehead.IdCell />
            <Tablehead.DateCell />
            <Tablehead.TimeCell />
            <Tablehead.StatusCell />
            <Th scope='col'>고객 번호</Th>
            <Tablehead.ClientNameCell />
            <Th scope='col'>가격</Th>
          </Tr>
        </Thead>
        <TableBody isLoading={isLoading} pageItems={pageItems} />
      </Table>
      <Pagination hasOrder={hasOrder} totalPage={totalPage} />
    </>
  );
};

export default OrderListPage;
