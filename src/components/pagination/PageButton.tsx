import { Button } from '@chakra-ui/react';

type ButtonProps = {
  text: string | number;
  isActive?: boolean;
  onClick: () => void;
};

const PageButton = (props: ButtonProps) => {
  const { text, onClick, isActive } = props;
  return (
    <Button
      onClick={onClick}
      isActive={isActive}
      bgColor='orange.300'
      _hover={{ bgColor: 'orange.400' }}
      _active={{ bgColor: 'orange.500' }}
      color='white'
      fontWeight='bold'>
      {text}
    </Button>
  );
};

export default PageButton;
