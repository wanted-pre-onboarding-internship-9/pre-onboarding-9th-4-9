export const TO_DAY = '2023-03-08';

export const ONE_PAGE_LENGTH = 50;

export type TMockData = {
  id: number;
  transaction_time: string;
  status: boolean;
  customer_id: number;
  customer_name: string;
  currency: string;
  index: number;
};

export type TToDayMockData = {
  toDayMockData: TMockData[];
  pages: number[];
  totalPageNumber: number;
};

export type TFilter = {
  currentPageNumber: string;
  id: string;
  transaction_time: string;
  status: string;
  customer_name: string;
};
