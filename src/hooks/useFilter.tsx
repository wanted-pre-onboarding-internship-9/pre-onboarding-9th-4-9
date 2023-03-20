import { createContext, useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { IFilterContextProps, IFilterHooks, IOrder } from '../types/type';

const FilterContext = createContext({});

export const useFilter = () => useContext(FilterContext) as IFilterHooks;

const FilterProvider = ({ children, orderData = [] }: IFilterContextProps) => {
  const [filterData, setFilterData] = useState<IOrder[]>(orderData);
  const [params] = useSearchParams();

  const isFilter = params.get('filter');
  const searchValue = params.get('search');

  useEffect(() => {
    let newData = [...orderData];
    if (isFilter === 'true' || isFilter === 'false') {
      newData = newData.filter((order: IOrder) =>
        isFilter === 'true' ? order.status : !order.status
      );
    }
    if (searchValue) {
      newData = newData.filter((order: IOrder) =>
        order.customer_name
          .toUpperCase()
          .includes(searchValue.toLocaleUpperCase())
      );
    }
    setFilterData(newData);
  }, [orderData, isFilter, searchValue]);

  return (
    <FilterContext.Provider value={{ filterData }}>
      {children}
    </FilterContext.Provider>
  );
};

export { FilterProvider };
