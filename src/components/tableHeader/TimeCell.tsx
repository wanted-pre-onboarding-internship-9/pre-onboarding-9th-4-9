import { Select, Th } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const TimeCell = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectValue, setSelectValue] = useState<string>(
    searchParams.get('sort-time') || ''
  );

  useEffect(() => {
    const selectedTime = searchParams.get('sort-time') || '';
    setSelectValue(selectedTime);
  }, [searchParams]);

  const handleSortByTime: React.ChangeEventHandler<
    HTMLSelectElement
  > = event => {
    if (event.target.value === '') {
      searchParams.delete('sort-time');
      setSearchParams(searchParams);
    } else {
      searchParams.delete('sort-id');
      searchParams.delete('page');
      searchParams.set('sort-time', event.target.value);
      setSearchParams(searchParams);
    }
  };

  return (
    <Th scope='col' fontSize='sm' textAlign='center'>
      <Select
        bg='white'
        size='xs'
        value={selectValue}
        placeholder='정렬 선택'
        onChange={handleSortByTime}>
        <option value='오름차순'>오름차순</option>
        <option value='내림차순'>내림차순</option>
      </Select>
    </Th>
  );
};

export default TimeCell;
