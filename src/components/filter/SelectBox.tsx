import { Box, Flex, Select } from '@chakra-ui/react';
import { ChangeEvent, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

const SelectBox = () => {
  const [params, setParams] = useSearchParams();
  const selectRef = useRef<HTMLSelectElement>(null);
  const isFilter = params.get('filter') || 'whole';

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

  useEffect(() => {
    if (selectRef.current) {
      selectRef.current.value = isFilter;
    }
  }, [isFilter]);

  return (
    <Flex alignItems='center' gap='2'>
      <Box whiteSpace='nowrap'>주문상태</Box>
      <Select
        ref={selectRef}
        defaultValue={isFilter}
        onChange={handleSelect}
        width='32'>
        <option value='whole'>전체</option>
        <option value='true'>체결</option>
        <option value='false'>미체결</option>
      </Select>
    </Flex>
  );
};

export default SelectBox;
