/* eslint-disable*/
import { SetURLSearchParams } from 'react-router-dom';

export type OrderType = 'asc' | 'desc';
export type SortFunctionType = (order: OrderType) => void;

export interface IContextProps {
  children: JSX.Element | JSX.Element[];
}

export interface IFilterContextProps extends IContextProps {
  orderData: IOrder[];
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
  isLoading: boolean;
}

export interface IFilterHooks {
  filterData: IOrder[];
  handleSortById: SortFunctionType;
  handleSortByTime: SortFunctionType;
}
