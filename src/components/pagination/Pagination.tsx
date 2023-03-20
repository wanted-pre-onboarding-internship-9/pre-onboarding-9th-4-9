import { Button, Flex } from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';

import { LIMIT } from '../../constants/constant';
import { useFilter } from '../../hooks/useFilter';

const Pagination = () => {
  const { filterData } = useFilter();
  const [params, setParams] = useSearchParams();

  const total = filterData.length;
  const page = Number(params.get('page')) || 1;
  const numPages = Math.ceil(total / LIMIT);

  const handlePage = (page: number) => {
    params.set('page', String(page));
    setParams(params);
    window.scrollTo({ behavior: 'smooth', top: 0, left: 0 });
  };
  const handleLeftPage = (page: number) => {
    if (page === 1) return;
    params.set('page', String(page - 1));
    setParams(params);
    window.scrollTo({ behavior: 'smooth', top: 0, left: 0 });
  };
  const handleRightPage = (page: number) => {
    if (page === numPages) return;
    params.set('page', String(page + 1));
    setParams(params);
    window.scrollTo({ behavior: 'smooth', top: 0, left: 0 });
  };

  return (
    <Flex gap='3'>
      <Button onClick={() => handleLeftPage(page)}>&lt;</Button>
      {Array(numPages)
        .fill(0)
        .map((_, i) => (
          <Button key={i + 1} onClick={() => handlePage(i + 1)}>
            {i + 1}
          </Button>
        ))}
      <Button onClick={() => handleRightPage(page)}>&gt;</Button>
    </Flex>
  );
};
export default Pagination;
