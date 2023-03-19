import { Td, Tr } from '@chakra-ui/react';
import { v4 as uuid } from 'uuid';

import { IOrder } from '../../types/type';

const TableRow = ({ element }: { element: IOrder }) => {
  return (
    <Tr>
      {Object.values(element).map(value => (
        <Td key={uuid()}>
          {typeof value === 'boolean' ? (value ? '체결' : '미체결') : value}
        </Td>
      ))}
    </Tr>
  );
};

export default TableRow;
