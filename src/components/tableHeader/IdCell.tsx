import { Select, Th } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const IdCell = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectValue, setSelectValue] = useState<string>(
    searchParams.get('sort-id') || ''
  );

  useEffect(() => {
    const selectedId = searchParams.get('sort-id') || '';
    setSelectValue(selectedId);
  }, [searchParams]);

  const handleSortById: React.ChangeEventHandler<HTMLSelectElement> = event => {
    if (event.target.value === '') {
      searchParams.delete('sort-id');
      setSearchParams(searchParams);
    } else {
      searchParams.delete('sort-time');
      searchParams.delete('page');
      searchParams.set('sort-id', event.target.value);
      setSearchParams(searchParams);
    }
  };

  return (
    <Th scope='col' fontSize='sm' textAlign='center' gap='5px'>
      <Select
        bg='white'
        size='xs'
        value={selectValue}
        placeholder='정렬 선택'
        onChange={handleSortById}>
        <option value='오름차순'>오름차순</option>
        <option value='내림차순'>내림차순</option>
      </Select>
    </Th>
  );
};

export default IdCell;
