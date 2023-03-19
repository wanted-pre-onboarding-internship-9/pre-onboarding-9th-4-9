import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useSearchParams } from 'react-router-dom';

import instance from '../apis/instance';
import { LIMIT, TODAY } from '../constants/constant';
import { IContextProps, IOrder, IOrderDataHooks } from '../types/type';

const OrderContext = createContext({});

export const useOrderData = () => useContext(OrderContext) as IOrderDataHooks;

const OrderProvider = ({ children }: IContextProps) => {
  const [orderData, setOrderData] = useState<IOrder[]>([]);
  const [params, setParams] = useSearchParams();

  const total = orderData.length;
  const page = Number(params.get('page')) || 1;
  const offset = (Number(page) - 1) * LIMIT;

  const handleSortById = useCallback(() => {
    if (params.get('sort_id') === 'asc') {
      setOrderData(prev => {
        const newArray = [...prev];
        newArray.sort((current, next) => next.id - current.id);
        return newArray;
      });
      params.set('sort_id', 'desc');
      setParams(params);
    } else {
      setOrderData(prev => {
        const newArray = [...prev];
        newArray.sort((current, next) => current.id - next.id);
        return newArray;
      });
      params.set('sort_id', 'asc');
      setParams(params);
    }
  }, []);

  useEffect(() => {
    instance
      .get('')
      .then(({ data }) =>
        setOrderData(
          data.filter(
            (order: IOrder) => order.transaction_time.split(' ')[0] === TODAY
          )
        )
      );
  }, []);

  useEffect(() => {
    if (!params.get('page')) {
      params.set('page', '1');
      params.set('sort_id', 'asc');
      setParams(params);
    }
  }, []);

  return (
    <OrderContext.Provider
      value={{
        orderData,
        offset,
        total,
        page,
        params,
        setParams,
        handleSortById,
      }}>
      {children}
    </OrderContext.Provider>
  );
};

export { OrderProvider };
