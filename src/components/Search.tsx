import { ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';

import { TFilter } from '../types/mockDataTypes';

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
    }

    const setSort = (sortKey: 'id' | 'transaction_time') => {

        setFilters({ ...filters, sortKey, sortValue: filters.sortValue === 'asc' ? 'desc' : 'asc' });
    }

    return (
        <StSearchWrap>
            <div>
                <button onClick={() => setSort('id')}>주문번호</button>
                <button onClick={() => setSort('transaction_time')}>거래일&거래시간</button>
                <select name="space" onChange={setStatus}>
                    <option value='all'>주문처리 전체</option>
                    <option value='true'>주문처리 true</option>
                    <option value='false'>주문처리 false</option>
                </select>
            </div>
            <form onSubmit={onSubmit}>
                <label>
                    <input data-testid='modify-input' type='text' />
                </label>
                <button data-testid='submit-button' type='submit'>
                    검색
                </button>
            </form>
        </StSearchWrap>
    );
};

export default Search;

const StSearchWrap = styled.div`
  display: flex;
  justify-content: center;
`;
