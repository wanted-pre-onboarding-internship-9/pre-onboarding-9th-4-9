import { createContext } from 'react';

import { contextValue } from '../types/type';

export const DataContext = createContext<contextValue>({
  filteredData: [
    [
      {
        id: 0,
        transaction_time: '',
        status: false,
        customer_id: 0,
        customer_name: '',
        currency: '',
      },
    ],
  ],
  index: 1,
  idSort: false,
  transactionSort: false,
});

export default DataContext;
