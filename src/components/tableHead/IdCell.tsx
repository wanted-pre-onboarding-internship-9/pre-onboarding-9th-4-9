import { Select, Th } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const IdCell = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [placeholder, setPlaceholder] = useState<string>(
    searchParams.get('sort-id') || '정렬 선택'
  );
  const selectRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    setPlaceholder(searchParams.get('sort-id') || '정렬 선택');
  }, [searchParams]);

  const handleSortById: React.ChangeEventHandler<HTMLSelectElement> = event => {
    setSearchParams(searchParams => {
      searchParams.delete('sort-time');
      searchParams.delete('page');
      searchParams.set('sort-id', event.target.value);
      return new URLSearchParams(searchParams);
    });

    if (selectRef.current) {
      selectRef.current.selectedIndex = 0;
    }
  };

  return (
    <Th scope='col'>
      주문 번호
      <Select
        placeholder={placeholder}
        onChange={handleSortById}
        ref={selectRef}>
        <option value='오름차순'>오름차순</option>
        <option value='내림차순'>내림차순</option>
      </Select>
    </Th>
  );
};

export default IdCell;
