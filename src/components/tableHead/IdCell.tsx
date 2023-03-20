import { Select, Th } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const IdCell = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [sortByIdPlaceholder, setSortByIdPlaceholder] = useState(
    searchParams.get('sort-id') || '정렬 선택'
  );

  const handleSortById: React.ChangeEventHandler<HTMLSelectElement> = event => {
    searchParams.delete('sort-time');
    searchParams.set('sort-id', event.target.value);
    setSearchParams(searchParams);
  };

  return (
    <Th scope='col'>
      주문 번호
      <Select placeholder={sortByIdPlaceholder} onChange={handleSortById}>
        <option value='오름차순'>오름차순</option>
        <option value='내림차순'>내림차순</option>
      </Select>
    </Th>
  );
};

export default IdCell;
