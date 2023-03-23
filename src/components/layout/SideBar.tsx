import { CalendarIcon } from '@chakra-ui/icons';
import { Box, Flex, Image } from '@chakra-ui/react';

const SideBar = () => {
  return (
    <Flex
      zIndex='banner'
      position='fixed'
      left='0'
      insetY='0'
      width='60'
      bgColor='orange.100'
      padding='17px'
      direction='column'>
      <Box mb='16'>
        <Image src={`${process.env.PUBLIC_URL}/assets/logo.png`} />
      </Box>
      <Box ml='3'>
        <Flex alignItems='center' gap='10px' color='gray.800' cursor='pointer'>
          <CalendarIcon />
          <Box letterSpacing='tighter'>주문내역관리</Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default SideBar;
