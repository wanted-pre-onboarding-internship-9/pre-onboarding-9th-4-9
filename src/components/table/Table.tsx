import {
  TableContainer,
  Table as TableMain,
  Tbody,
  Td,
  Tr,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { LIMIT } from '../../constants/constant';
import { IOrder } from '../../types/type';
import TableHead from './TableHead';
import TableRow from './TableRow';

const Table = ({ data }: { data: IOrder[] }) => {
  const [params, setParams] = useSearchParams();

  const page = Number(params.get('page')) || 1;
  const offset = (Number(page) - 1) * LIMIT;

  const pageData = data.slice(offset, offset + LIMIT);

  useEffect(() => {
    if (pageData.length === 0) {
      params.set('page', '1');
      setParams(params);
    }
  }, [data]);

  return (
    <TableContainer>
      <TableMain colorScheme='orange'>
        <TableHead />
        <Tbody>
          {pageData.map(element => (
            <TableRow key={element.id} element={element} />
          ))}
          {pageData.length === 0 && (
            <Tr>
              <Td textAlign='center' colSpan={7}>
                데이터가 없습니다.
              </Td>
            </Tr>
          )}
        </Tbody>
      </TableMain>
    </TableContainer>
  );
};

export default Table;
