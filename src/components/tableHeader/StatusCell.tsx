import { Select, Th } from '@chakra-ui/react';
import React from 'react';
import { useSearchParams } from 'react-router-dom';

const StatusCell = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFilterBySatus: React.ChangeEventHandler<
    HTMLSelectElement
  > = event => {
    if (event.target.value === '') {
      searchParams.delete('status');
      setSearchParams(searchParams);
    } else {
      searchParams.delete('page');
      searchParams.set('status', event.target.value);
      setSearchParams(searchParams);
    }
  };

  return (
    <Th scope='col' fontSize='sm' textAlign='center'>
      <Select
        bg='white'
        size='xs'
        placeholder='선택'
        onChange={handleFilterBySatus}>
        <option value='완료'>완료</option>
        <option value='미완료'>미완료</option>
      </Select>
    </Th>
  );
};

export default StatusCell;
