import { Button, Flex } from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';

import { LIMIT } from '../../constants/constant';
import PageButton from './PageButton';

const Pagination = ({ total }: { total: number }) => {
  const [params, setParams] = useSearchParams();

  const page = Number(params.get('page')) || 1;
  const numPages = Math.ceil(total / LIMIT) || 1;

  const handlePage = (setPage: number) => {
    if (setPage === page) return;
    params.set('page', String(setPage));
    setParams(params);
  };
  const handleLeftPage = (setPage: number) => {
    if (setPage === 1) return;
    params.set('page', String(setPage - 1));
    setParams(params);
  };
  const handleRightPage = (setPage: number) => {
    if (setPage >= numPages) return;
    params.set('page', String(setPage + 1));
    setParams(params);
  };

  return (
    <Flex gap='3'>
      <Button
        onClick={() => handleLeftPage(page)}
        fontWeight='bold'
        bgColor='transparent'>
        &lt;
      </Button>
      {Array(numPages)
        .fill(0)
        .map((_, i) => (
          <PageButton
            key={i + 1}
            text={i + 1}
            onClick={() => handlePage(i + 1)}
            isActive={page === i + 1}
          />
        ))}
      <Button
        onClick={() => handleRightPage(page)}
        fontWeight='bold'
        bgColor='transparent'>
        &gt;
      </Button>
    </Flex>
  );
};
export default Pagination;
