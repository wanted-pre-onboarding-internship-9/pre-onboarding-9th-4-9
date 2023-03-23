import { Box } from '@chakra-ui/react';

import useOrderData from '../../hooks/useOrderData';
import Pagination from '../pagination/Pagination';
import Table from './Table';

const TableWrapper = () => {
  const { filterData } = useOrderData();

  return (
    <>
      <Box width='70vw' marginX='auto'>
        <Table data={filterData} />
      </Box>
      <Box alignSelf='center'>
        <Pagination total={filterData.length} />
      </Box>
    </>
  );
};

export default TableWrapper;
