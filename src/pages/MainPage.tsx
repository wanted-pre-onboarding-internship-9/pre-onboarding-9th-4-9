import { Box } from '@chakra-ui/react';

import Pagination from '../components/pagination/Pagination';
import Table from '../components/table/Table';

const MainPage = () => {
  return (
    <Box w='80%'>
      <Table caption='주문내역관리' />
      <Box>
        <Pagination />
      </Box>
    </Box>
  );
};

export default MainPage;
