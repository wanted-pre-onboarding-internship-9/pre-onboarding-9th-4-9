import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useSearchParams } from 'react-router-dom';

import instance from '../apis/instance';
import { TODAY } from '../constants/constant';
import {
  IContextProps,
  IOrder,
  IOrderDataHooks,
  OrderType,
} from '../types/type';

const OrderContext = createContext({});

export const useOrderData = () => useContext(OrderContext) as IOrderDataHooks;

const OrderProvider = ({ children }: IContextProps) => {
  const [orderData, setOrderData] = useState<IOrder[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [params] = useSearchParams();

  const sortType = params.get('sort');

  const handleSortById = useCallback((order: OrderType) => {
    setOrderData(prev => {
      const newArray = [...prev];
      newArray.sort((current, next) =>
        order === 'asc' ? current.id - next.id : next.id - current.id
      );
      return newArray;
    });
  }, []);

  const handleSortByTime = useCallback((order: OrderType) => {
    setOrderData(prev => {
      const newArray = [...prev];
      newArray.sort((current, next) =>
        order === 'asc'
          ? new Date(current.transaction_time).getTime() -
            new Date(next.transaction_time).getTime()
          : new Date(next.transaction_time).getTime() -
            new Date(current.transaction_time).getTime()
      );
      return newArray;
    });
  }, []);

  useEffect(() => {
    instance
      .get('')
      .then(({ data }) =>
        setOrderData(() => {
          let newData = [...data];
          newData = newData.filter(
            (order: IOrder) => order.transaction_time.split(' ')[0] === TODAY
          );

          return newData;
        })
      )
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    if (!isLoading && sortType) {
      const [standard, order] = sortType.split(':');
      if (standard === 'id') handleSortById(order as OrderType);
      if (standard === 'time') handleSortByTime(order as OrderType);
    }
  }, [isLoading, sortType]);

  return (
    <OrderContext.Provider
      value={{
        orderData,
        isLoading,
      }}>
      {children}
    </OrderContext.Provider>
  );
};

export { OrderProvider };
