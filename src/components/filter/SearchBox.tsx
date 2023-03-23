import { Box, Button, Input } from '@chakra-ui/react';
import { FormEvent, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchBox = () => {
  const [params, setParams] = useSearchParams();
  const inputValue = useRef<HTMLInputElement>(null);
  const search = params.get('search') || '';

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputValue.current) {
      params.set('search', inputValue.current.value);
      setParams(params);
    }
  };

  const handleSearchInit = () => {
    if (inputValue.current) inputValue.current.value = '';
    params.delete('search');
    setParams(params);
  };

  useEffect(() => {
    if (inputValue.current) {
      inputValue.current.value = search;
    }
  }, [search]);

  return (
    <form onSubmit={handleSubmit}>
      <Box display='flex' alignItems='center' gap='2'>
        <Box as='label' htmlFor='search_input' whiteSpace='nowrap'>
          이름검색
        </Box>
        <Input
          id='search_input'
          ref={inputValue}
          defaultValue={search}
          type='text'
          placeholder='이름을 검색하세요'
          data-testid={search}
        />
        <Button type='submit' colorScheme='orange'>
          검색
        </Button>
        <Button px='7' onClick={handleSearchInit} colorScheme='orange'>
          검색 초기화
        </Button>
      </Box>
    </form>
  );
};

export default SearchBox;
