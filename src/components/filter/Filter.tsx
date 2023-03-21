import { Box, Button, Flex } from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';

import SearchBox from './SearchBox';
import SelectBox from './SelectBox';

const Filter = () => {
  const [params, setParams] = useSearchParams();

  const handleFilterInit = () => {
    params.set('sort', 'id:asc');
    params.delete('search');
    params.delete('filter');
    setParams(params);
  };

  return (
    <Flex
      gap='10'
      alignSelf='center'
      width='full'
      alignItems='center'
      justifyContent='center'>
      <SelectBox />
      <Box width='30vw'>
        <SearchBox />
      </Box>
      <Button onClick={handleFilterInit} colorScheme='orange'>
        필터링 초기화
      </Button>
    </Flex>
  );
};

export default Filter;
