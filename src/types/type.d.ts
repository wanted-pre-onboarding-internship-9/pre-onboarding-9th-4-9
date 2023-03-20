export interface DataType {
  id: number;
  transaction_time: string;
  status: boolean;
  customer_id: number;
  customer_name: string;
  currency: string;
}

export interface contextValue {
  filteredData: DataTypeArray[];
  index: number;
  idSort: boolean;
  transactionSort: boolean;
}
export type DataTypeArray = DataType[];

export type FunctionType = (value: string) => string;
