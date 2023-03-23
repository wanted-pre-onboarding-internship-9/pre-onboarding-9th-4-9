import { BellIcon, EmailIcon, QuestionIcon } from '@chakra-ui/icons';
import { Box, Flex } from '@chakra-ui/react';

const Header = () => {
  return (
    <Flex
      zIndex='banner'
      height='16'
      bgColor='gray.200'
      position='fixed'
      top='0'
      insetX='0'
      paddingX='10'
      justifyContent='flex-end'
      alignItems='center'>
      <Flex alignItems='center' gap='5'>
        <Flex gap='3'>
          <EmailIcon w='7' h='7' />
          <BellIcon w='7' h='7' />
        </Flex>
        <Flex gap='3'>
          <QuestionIcon w='7' h='7' color='gray.400' />
          <Box>Admin</Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
