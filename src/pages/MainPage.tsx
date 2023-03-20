import { Flex, Heading } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import Filter from '../components/filter/Filter';
import TableWrapper from '../components/table/TableWrapper';
import { OrderProvider } from '../hooks/useOrderData';

const MainPage = () => {
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    if (!params.get('page')) {
      params.set('page', '1');
      params.set('sort', 'id:asc');
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
      <OrderProvider>
        <TableWrapper />
      </OrderProvider>
    </Flex>
  );
};

export default MainPage;
