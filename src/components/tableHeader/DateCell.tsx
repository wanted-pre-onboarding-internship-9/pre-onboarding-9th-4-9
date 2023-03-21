import { Input, Th } from '@chakra-ui/react';
import React from 'react';
import { useSearchParams } from 'react-router-dom';

const DateCell = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedDate = searchParams.get('date') || '2023-03-08';

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    searchParams.delete('page');
    searchParams.set('date', event.target.value);
    setSearchParams(searchParams);
  };

  return (
    <Th scope='col' textAlign='center'>
      <Input
        bg='white'
        onChange={handleDateChange}
        size='xs'
        type='date'
        border='1px solid black'
        value={requestedDate}
      />
    </Th>
  );
};

export default DateCell;
