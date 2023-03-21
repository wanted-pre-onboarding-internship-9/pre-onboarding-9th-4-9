import { FormEvent } from "react";
import styled from "styled-components";
import { TFilter } from "../types/mockDataTypes";

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
    }

    return (
        <StSearchWrap>
            <div>
                <button onClick={() => setFilters({ ...filters, status: 'all' })}>주문번호</button>
                {/* <button onClick={() => setFilters({ ...filters, id: filters.id === 'asc' ? 'desc' : 'asc' })}>주문번호</button> */}
                <button onClick={() => setFilters({ ...filters, sortKey: 'transaction_time', sortValue: 'desc' })}>
                    거래일&거래시간
                </button>
            </div>
            <form onSubmit={onSubmit}>
                <label>
                    <input data-testid="modify-input" type="text" />
                </label>
                <button data-testid="submit-button" type="submit">검색</button>
            </form>
        </StSearchWrap>
    );
};

export default Search;

const StSearchWrap = styled.div`
  display:flex;
  justify-content: center;
`;