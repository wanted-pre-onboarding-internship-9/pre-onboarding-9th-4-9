import { Table, TableContainer, Thead } from '@chakra-ui/react';

import { OrderType } from '../../types';
import FilterSort from './FilterSort';
import HeaderNames from './HeaderNames';
import TableBody from './TableBody';

const TableBox = ({
  isLoading,
  pageItems,
}: {
  isLoading: boolean;
  pageItems: OrderType[] | undefined;
}) => {
  return (
    <TableContainer
      border='1px solid #8a8a8a'
      borderRadius='5px'
      h='80vh'
      overflowY='scroll'>
      <Table variant='unstyled'>
        <Thead position='sticky' top='0' bg='#F1F1F1'>
          <HeaderNames />
          <FilterSort />
        </Thead>
        <TableBody isLoading={isLoading} pageItems={pageItems} />
      </Table>
    </TableContainer>
  );
};

export default TableBox;
