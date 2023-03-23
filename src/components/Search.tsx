import { ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';

import { TFilter } from '../types/mockDataTypes';
import Button from './Button';

interface IProps {
  filters: TFilter;
  setFilters: (p: TFilter) => void;
}

const Search = ({ filters, setFilters }: IProps) => {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = event.target as HTMLFormElement;
    const inputValue = (formData[0] as HTMLInputElement).value;

    setFilters({ ...filters, customer_name: inputValue });
  };

  const setStatus = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectValue =
      event.target.value !== 'true' && event.target.value !== 'false'
        ? 'all'
        : event.target.value;

    setFilters({ ...filters, status: selectValue });
  };

  const setSort = (sortKey: 'id' | 'transaction_time') => {
    setFilters({
      ...filters,
      sortKey,
      sortValue: filters.sortValue === 'asc' ? 'desc' : 'asc',
    });
  };

  return (
    <StSearchWrap>
      <StSearchFilterWrap>
        <Button
          text='주문번호'
          onClick={() => setSort('id')}
          isOn={
            filters.sortKey === 'id' && filters.sortValue === 'desc'
              ? true
              : false
          }
        />
        <Button
          text='거래일&거래시간'
          onClick={() => setSort('transaction_time')}
          isOn={
            filters.sortKey === 'transaction_time' &&
              filters.sortValue === 'desc'
              ? true
              : false
          }
        />

        <select name='space' onChange={setStatus}>
          <option value='all'>전체</option>
          <option value='true'>완료</option>
          <option value='false'>처리중</option>
        </select>
      </StSearchFilterWrap>
      <StForm onSubmit={onSubmit}>
        <label>
          <StSeachInput data-testid='modify-input' type='text' />
        </label>
        <Button data-testid='submit-button' type='submit' text='검색' />
      </StForm>
    </StSearchWrap>
  );
};

export default Search;

const StSearchWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
`;

const StSearchFilterWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
`;
const StForm = styled.form`
  display: flex;
  gap: 5px;
`;

const StSeachInput = styled.input`
  font-size: 14px;
  font-weight: bold;
  padding: 6px 10px;
  background-color: #fafafa;
`;
