import { Button, Flex } from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';

import { LIMIT } from '../../constants/constant';
import { useFilter } from '../../hooks/useFilter';
import PageButton from './PageButton';

const Pagination = () => {
  const { filterData } = useFilter();
  const [params, setParams] = useSearchParams();

  const total = filterData.length;
  const page = Number(params.get('page')) || 1;
  const numPages = Math.ceil(total / LIMIT);

  const handlePage = (page: number) => {
    window.scrollTo({ top: 0, left: 0 });
    params.set('page', String(page));
    setParams(params);
  };
  const handleLeftPage = (page: number) => {
    if (page === 1) return;
    window.scrollTo({ top: 0, left: 0 });
    params.set('page', String(page - 1));
    setParams(params);
  };
  const handleRightPage = (page: number) => {
    if (page === numPages) return;
    window.scrollTo({ top: 0, left: 0 });
    params.set('page', String(page + 1));
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
