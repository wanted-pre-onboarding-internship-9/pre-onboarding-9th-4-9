import { Button, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Pagination = ({
  hasOrder,
  totalPage,
}: {
  hasOrder: boolean;
  totalPage: number;
}) => {
  const [currentPageGroup, setCurrentPageGroup] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  const handlePageChange = (pageNumber: number) => {
    searchParams.set('page', pageNumber.toString());
    setSearchParams(searchParams);
  };

  const totalPageNumbers = Array.from({ length: totalPage }, (_, i) => i + 1);

  const firstPageInGroup = (currentPageGroup - 1) * 5;

  const lastPageInGroup = currentPageGroup * 5;

  const visiblePageNumbers = totalPageNumbers.slice(
    firstPageInGroup,
    lastPageInGroup
  );

  const isLastGroup = currentPageGroup === Math.ceil(totalPage / 5);

  return (
    <Flex>
      {hasOrder && (
        <nav>
          <Button
            onClick={() => setCurrentPageGroup(group => group - 1)}
            isDisabled={currentPageGroup === 1}>{`<`}</Button>
          {visiblePageNumbers.map(pageNumber => (
            <Button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}>
              {pageNumber}
            </Button>
          ))}
          <Button
            onClick={() => setCurrentPageGroup(group => group + 1)}
            isDisabled={isLastGroup}>{`>`}</Button>
        </nav>
      )}
    </Flex>
  );
};

export default Pagination;
