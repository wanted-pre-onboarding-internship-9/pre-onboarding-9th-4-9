import { Td, Tr } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { v4 as uuid } from 'uuid';

import { IOrder } from '../../types/type';

const StyledTd = styled(Td)`
  padding: 10px;
  font-size: 1rem;
  text-align: center;
  letter-spacing: -0.5px;
`;

const TableRow = ({ element }: { element: IOrder }) => {
  return (
    <Tr>
      {Object.values(element).map(value => (
        <StyledTd key={uuid()}>
          {typeof value === 'boolean' ? (value ? '체결' : '미체결') : value}
        </StyledTd>
      ))}
    </Tr>
  );
};

export default TableRow;
