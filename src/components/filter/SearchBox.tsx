import { Box, Button, Input } from '@chakra-ui/react';
import { FormEvent, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchBox = () => {
  const [params, setParams] = useSearchParams();
  const inputValue = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = event.target as HTMLFormElement;
    const inputValue = (formData[0] as HTMLInputElement).value;

    params.set('search', inputValue);
    setParams(params);
  };

  const handleSearchInit = () => {
    if (inputValue.current) inputValue.current.value = '';
    params.delete('search');
    setParams(params);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box display='flex' alignItems='center' gap='2'>
        <Box whiteSpace='nowrap'>이름검색</Box>
        <Input ref={inputValue} type='text' />
        <Button type='submit'>검색</Button>
        <Button px='7' onClick={handleSearchInit}>
          검색 초기화
        </Button>
      </Box>
    </form>
  );
};

export default SearchBox;
