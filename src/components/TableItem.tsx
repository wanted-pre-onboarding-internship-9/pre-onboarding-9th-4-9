import styled from 'styled-components';

import { TMockData } from '../types/mockDataTypes';

type TProps = {
  item: TMockData;
  itemNumber: number;
};
const TableItem = ({ item, itemNumber }: TProps) => {
  return (
    <StItemWrap>
      <div>{itemNumber}</div>
      <div>{item.id}</div>
      <div data-testid='transaction_time'>{item.transaction_time}</div>
      <div>{item.status ? '완료' : '처리중'}</div>
      <div>{item.customer_id}</div>
      <div>{item.customer_name}</div>
      <div>{item.currency}</div>
    </StItemWrap>
  );
};

export default TableItem;

const StItemWrap = styled.div`
  display: grid;
  text-align: center;
  grid-template-columns: repeat(7, 1fr);
`;
