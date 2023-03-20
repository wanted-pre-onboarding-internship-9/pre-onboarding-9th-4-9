import { Select, Th } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const TimeCell = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [sortByTimePlaceholder, setSortByTimePlaceholder] = useState(
    searchParams.get('sort-time') || '정렬 선택'
  );

  const handleSortByTime: React.ChangeEventHandler<
    HTMLSelectElement
  > = event => {
    searchParams.delete('sort-id');
    searchParams.set('sort-time', event.target.value);
    setSearchParams(searchParams);
  };

  return (
    <Th scope='col'>
      거래 시간
      <Select placeholder={sortByTimePlaceholder} onChange={handleSortByTime}>
        <option value='오름차순'>오름차순</option>
        <option value='내림차순'>내림차순</option>
      </Select>
    </Th>
  );
};

export default TimeCell;
