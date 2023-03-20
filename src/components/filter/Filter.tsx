import { Box, Button, Flex, Input, Select } from '@chakra-ui/react';
import { ChangeEvent, FormEvent, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

const Filter = () => {
  const [params, setParams] = useSearchParams();
  const inputValue = useRef<HTMLInputElement>(null);
  const isFilter = params.get('filter') || 'whole';

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

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;

    if (value === 'true') {
      params.set('filter', 'true');
    } else if (value === 'false') {
      params.set('filter', 'false');
    } else {
      params.set('filter', 'whole');
    }
    setParams(params);
  };

  return (
    <Flex gap='10'>
      <Flex alignItems='center' gap='2'>
        <Box whiteSpace='nowrap'>주문상태</Box>
        <Select defaultValue={isFilter} onChange={handleSelect} width='32'>
          <option value='whole'>전체</option>
          <option value='true'>체결</option>
          <option value='false'>미체결</option>
        </Select>
      </Flex>
      <form onSubmit={handleSubmit}>
        <Box display='flex' alignItems='center' gap='2'>
          <Box whiteSpace='nowrap'>이름검색</Box>
          <Input ref={inputValue} type='text' />
          <Button type='submit'>검색</Button>
          <Button onClick={handleSearchInit}>초기화</Button>
        </Box>
      </form>
    </Flex>
  );
};

export default Filter;
