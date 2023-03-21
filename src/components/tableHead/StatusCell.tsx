import { Select, Th } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const StatusCell = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [filterByStatusPlaceholder, setFilterByStatusPlaceholder] = useState(
    searchParams.get('status') || '정렬 선택'
  );

  const handleFilterBySatus: React.ChangeEventHandler<
    HTMLSelectElement
  > = event => {
    searchParams.delete('page');
    searchParams.set('status', event.target.value);
    setSearchParams(searchParams);
  };

  return (
    <Th scope='col'>
      주문 처리 상태
      <Select
        placeholder={filterByStatusPlaceholder}
        onChange={handleFilterBySatus}>
        <option value='완료'>완료</option>
        <option value='미완료'>미완료</option>
      </Select>
    </Th>
  );
};

export default StatusCell;
