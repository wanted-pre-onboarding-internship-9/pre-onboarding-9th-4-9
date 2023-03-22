export const TO_DAY = '2023-03-08';

export const ONE_PAGE_ITEM_LENGTH = 50;

export const PAGE_LENGTH = 2;

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
  totalPageCount: number;
};

export type TPagingItems = {
  pages: number[];
  totalPageCount: number;
};

export type TFilter = {
  currentPageNumber: number;
  sortKey: 'id' | 'transaction_time';
  sortValue: 'asc' | 'desc';
  status: 'all' | 'true' | 'false';
  customer_name: string;
};
