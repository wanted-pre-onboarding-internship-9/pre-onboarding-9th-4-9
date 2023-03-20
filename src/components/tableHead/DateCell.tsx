import { Input, Th } from '@chakra-ui/react';
import React from 'react';
import { useSearchParams } from 'react-router-dom';

const DateCell = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedDate = searchParams.get('date') || '2023-03-08';

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    searchParams.set('date', event.target.value);
    setSearchParams(searchParams);
  };

  return (
    <Th scope='col'>
      거래일
      <Input onChange={handleDateChange} type='date' value={requestedDate} />
    </Th>
  );
};

export default DateCell;
