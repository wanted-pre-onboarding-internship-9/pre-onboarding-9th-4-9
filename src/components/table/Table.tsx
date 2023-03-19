import {
  TableCaption,
  TableContainer,
  Table as TableMain,
  Tbody,
} from '@chakra-ui/react';

import { LIMIT } from '../../constants/constant';
import { useOrderData } from '../../hooks/useOrderData';
import TableHead from './TableHead';
import TableRow from './TableRow';

const Table = ({ caption }: { caption: string }) => {
  const { orderData, offset } = useOrderData();

  return (
    <TableContainer>
      <TableMain variant='simple'>
        <TableCaption placement='top'>{caption}</TableCaption>
        <TableHead />
        <Tbody>
          {orderData.slice(offset, offset + LIMIT).map(element => (
            <TableRow key={element.id} element={element} />
          ))}
        </Tbody>
      </TableMain>
    </TableContainer>
  );
};

export default Table;
