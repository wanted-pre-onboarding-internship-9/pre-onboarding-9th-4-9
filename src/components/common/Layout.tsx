import { Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Flex justify='center'>
      <Flex w='70%' direction='column'>
        {children}
      </Flex>
    </Flex>
  );
};

export default Layout;
