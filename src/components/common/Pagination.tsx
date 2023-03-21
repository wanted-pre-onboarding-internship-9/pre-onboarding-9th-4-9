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

  const currentPage = Number(searchParams.get('page')) || 1;

  const totalPageNumbers = Array.from({ length: totalPage }, (_, i) => i + 1);

  const firstPageInGroup = (currentPageGroup - 1) * 5;

  const lastPageInGroup = currentPageGroup * 5;

  const visiblePageNumbers = totalPageNumbers.slice(
    firstPageInGroup,
    lastPageInGroup
  );

  const isLastGroup = currentPageGroup === Math.ceil(totalPage / 5);

  return (
    <Flex paddingTop='20px' w='100%' justify='center'>
      {hasOrder && (
        <nav>
          <Flex gap='10px'>
            <Button
              size='sm'
              variant='ghost'
              onClick={() => setCurrentPageGroup(group => group - 1)}
              isDisabled={currentPageGroup === 1}>{`< 이전`}</Button>
            {visiblePageNumbers.map(pageNumber => (
              <Button
                h='30px'
                size='sm'
                variant='ghost'
                border={`1px solid ${
                  currentPage === pageNumber ? '#C1C1C1' : 'white'
                }`}
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}>
                {pageNumber}
              </Button>
            ))}
            <Button
              size='sm'
              variant='ghost'
              onClick={() => setCurrentPageGroup(group => group + 1)}
              isDisabled={isLastGroup}>{`다음 >`}</Button>
          </Flex>
        </nav>
      )}
    </Flex>
  );
};

export default Pagination;
