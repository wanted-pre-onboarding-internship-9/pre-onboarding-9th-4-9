import { CalendarIcon } from '@chakra-ui/icons';
import { Box, Flex } from '@chakra-ui/react';

const SideBar = () => {
  return (
    <Flex
      position='fixed'
      left='0'
      insetY='0'
      width='56'
      bgColor='orange.300'
      padding='17px'
      direction='column'>
      <Box fontSize='3xl' mb='12'>
        switchone
      </Box>
      <Box>
        <Flex alignItems='center' gap='10px' color='gray.800' cursor='pointer'>
          <CalendarIcon />
          <Box>주문내역관리</Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default SideBar;
