import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

import { useTableQuery } from '../query/useTableQuery';
import { IOrder } from '../types/type';

export default function PaginationSection({ data = [] }: { data?: IOrder[] }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') || '1';

  const { pageLength } = useTableQuery(data);

  const handlePage = (target: number) => {
    searchParams.set('page', `${target}`);
    setSearchParams(searchParams);
  };
  const handleNext = () => {
    searchParams.set('page', `${Number(page) + 1}`);
    setSearchParams(searchParams);
  };
  const handlePrev = () => {
    searchParams.set('page', `${Number(page) - 1}`);
    setSearchParams(searchParams);
  };
  return (
    <Bese>
      <ArrowButton onClick={handlePrev} disabled={Number(page) === 1}>
        Previous Page
      </ArrowButton>
      {[...Array(pageLength)].map((_, idx) => (
        <Button key={idx} onClick={() => handlePage(idx + 1)}>
          {idx + 1}
        </Button>
      ))}
      <ArrowButton onClick={handleNext} disabled={pageLength === Number(page)}>
        Next Page
      </ArrowButton>
    </Bese>
  );
}

const Bese = styled.div`
  background: red;
`;
const ArrowButton = styled.button``;
const Button = styled.button``;
