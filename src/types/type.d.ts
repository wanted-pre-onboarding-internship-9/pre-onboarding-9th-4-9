export interface IOrderList {
  id: number;
  transaction_time: string;
  status: boolean;
  customer_id: number;
  customer_name: string;
  currency: string;
}

export interface IProps {
  data: IOrderList[];
  items: number;
  page: number;
}
