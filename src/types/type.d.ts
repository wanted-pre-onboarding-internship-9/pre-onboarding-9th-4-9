export interface IOrderList {
  id: number;
  transaction_time: Date;
  status: boolean;
  customer_id: number;
  customer_name: string;
  currency: string;
}
