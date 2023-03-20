import { Box, Flex, Heading } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import Filter from '../components/filter/Filter';
import Pagination from '../components/pagination/Pagination';
import Table from '../components/table/Table';
import { FilterProvider } from '../hooks/useFilter';
import { useOrderData } from '../hooks/useOrderData';

const MainPage = () => {
  const { orderData } = useOrderData();
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    if (!params.get('page')) {
      params.set('page', '1');
      setParams(params);
    }
  }, []);

  return (
    <Flex direction='column' alignItems='flex-start' gap='20px' padding='10'>
      <Heading
        fontSize='2xl'
        pb='3'
        borderBottom='2px'
        borderColor='orange.300'>
        주문내역관리
      </Heading>
      <Filter />
      <FilterProvider orderData={orderData}>
        <Box width='80vw'>
          <Table />
        </Box>
        <Box alignSelf='center'>
          <Pagination />
        </Box>
      </FilterProvider>
    </Flex>
  );
};

export default MainPage;
