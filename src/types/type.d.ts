import { SetURLSearchParams } from 'react-router-dom';

export interface IContextProps {
  children: JSX.Element | JSX.Element[];
}

export interface IOrder {
  currency: string;
  customer_id: number;
  customer_name: string;
  id: number;
  status: boolean;
  transaction_time: string;
}

export interface IOrderDataHooks {
  orderData: IOrder[];
  offset: number;
  total: number;
  page: number;
  handleSortById: () => void;
  params: URLSearchParams;
  setParams: SetURLSearchParams;
}
