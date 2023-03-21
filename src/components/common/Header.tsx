import { Flex, Heading, Text } from '@chakra-ui/react';

const Header = () => {
  return (
    <Flex margin='30px'>
      <Heading as='h1'>
        <Flex direction='row'>
          <Text fontSize='3xl'>switch</Text>
          <Text fontSize='3xl' color='#F7941D'>
            one
          </Text>
        </Flex>
      </Heading>
    </Flex>
  );
};

export default Header;
