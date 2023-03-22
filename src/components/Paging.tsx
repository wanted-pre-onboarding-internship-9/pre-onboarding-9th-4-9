import { useState } from "react";
import styled from "styled-components";
import { TFilter, PAGE_LENGTH } from "../types/mockDataTypes";
import Button from "./Button";

interface IPagingProps {
    pages: number[];
    totalPageCount: number;
    filters: TFilter;
    setFilters: (p: TFilter) => void;
};

const Paging = ({ pages = [], totalPageCount = 0, filters, setFilters }: IPagingProps) => {

    const [pageLength, setPageLength] = useState<number>(PAGE_LENGTH);

    return (
        <StPageBtnWrap>
            {
                filters.currentPageNumber - PAGE_LENGTH > 0 &&
                <Button text="<" onClick={() => {
                    setPageLength(pageLength - PAGE_LENGTH)
                    setFilters({ ...filters, currentPageNumber: filters.currentPageNumber - PAGE_LENGTH })
                }} />
            }
            {
                totalPageCount < PAGE_LENGTH ?
                    pages.map((page: number) => (
                        <Button key={page}
                            text={page}
                            onClick={() => setFilters({ ...filters, currentPageNumber: page })}
                            isOn={filters.currentPageNumber === page}
                        />
                    ))
                    :
                    pages.filter((page: number) =>
                        page <= pageLength &&
                        page > pageLength - PAGE_LENGTH
                    ).map((page: number) => (
                        <Button key={page}
                            text={page}
                            onClick={() => setFilters({ ...filters, currentPageNumber: page })}
                            isOn={filters.currentPageNumber === page}
                        />
                    ))
            }
            {
                pageLength < totalPageCount &&
                <Button text=">" onClick={() => {
                    setPageLength(pageLength + PAGE_LENGTH)
                    setFilters({ ...filters, currentPageNumber: filters.currentPageNumber + PAGE_LENGTH })
                }} />
            }

        </StPageBtnWrap>
    );
};

export default Paging;

const StPageBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  
`;