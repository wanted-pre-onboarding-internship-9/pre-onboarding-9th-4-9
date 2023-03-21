import { Th, Tr } from '@chakra-ui/react';

import {
  ClientNameCell,
  DateCell,
  IdCell,
  StatusCell,
  TimeCell,
} from '../tableHeader';

const FilterSort = () => {
  return (
    <Tr>
      <IdCell />
      <DateCell />
      <TimeCell />
      <StatusCell />
      <Th />
      <ClientNameCell />
      <Th />
    </Tr>
  );
};

export default FilterSort;
