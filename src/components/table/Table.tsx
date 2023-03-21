import { TableContainer, Table as TableMain, Tbody } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { LIMIT } from '../../constants/constant';
import { useFilter } from '../../hooks/useFilter';
import TableHead from './TableHead';
import TableRow from './TableRow';

const Table = () => {
  const { filterData } = useFilter();
  const [params, setParams] = useSearchParams();

  const page = Number(params.get('page')) || 1;
  const offset = (Number(page) - 1) * LIMIT;

  const pageData = filterData.slice(offset, offset + LIMIT);

  useEffect(() => {
    if (pageData.length === 0) {
      params.set('page', '1');
      setParams(params);
    }
  }, []);

  return (
    <TableContainer>
      <TableMain colorScheme='orange'>
        <TableHead />
        <Tbody>
          {pageData.map(element => (
            <TableRow key={element.id} element={element} />
          ))}
        </Tbody>
      </TableMain>
    </TableContainer>
  );
};

export default Table;
