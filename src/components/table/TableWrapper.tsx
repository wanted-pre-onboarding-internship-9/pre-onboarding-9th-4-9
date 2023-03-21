import { Box } from '@chakra-ui/react';

import { FilterProvider } from '../../hooks/useFilter';
import { useOrderData } from '../../hooks/useOrderData';
import Pagination from '../pagination/Pagination';
import Table from './Table';

const TableWrapper = () => {
  const { orderData } = useOrderData();

  return (
    <FilterProvider orderData={orderData}>
      <Box width='80vw'>
        <Table />
      </Box>
      <Box alignSelf='center'>
        <Pagination />
      </Box>
    </FilterProvider>
  );
};

export default TableWrapper;
