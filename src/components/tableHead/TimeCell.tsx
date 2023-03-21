import { Select, Th } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const TimeCell = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [placeholder, setPlaceholder] = useState<string>(
    searchParams.get('sort-time') || '정렬 선택'
  );
  const selectRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    setPlaceholder(searchParams.get('sort-time') || '정렬 선택');
  }, [searchParams]);

  const handleSortByTime: React.ChangeEventHandler<
    HTMLSelectElement
  > = event => {
    searchParams.delete('sort-id');
    searchParams.delete('page');
    searchParams.set('sort-time', event.target.value);
    setSearchParams(searchParams);

    if (selectRef.current) {
      selectRef.current.selectedIndex = 0;
    }
  };

  return (
    <Th scope='col'>
      거래 시간
      <Select
        placeholder={placeholder}
        onChange={handleSortByTime}
        ref={selectRef}>
        <option value='오름차순'>오름차순</option>
        <option value='내림차순'>내림차순</option>
      </Select>
    </Th>
  );
};

export default TimeCell;
