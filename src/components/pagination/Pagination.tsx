import { Box, Button } from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';

import { LIMIT } from '../../constants/constant';
import { useOrderData } from '../../hooks/useOrderData';

const Pagination = () => {
  const { total, page } = useOrderData();
  const [params, setParams] = useSearchParams();
  const numPages = Math.ceil(total / LIMIT);

  const handlePage = (page: number) => {
    params.set('page', String(page));
    setParams(params);
  };
  const handleLeftPage = (page: number) => {
    if (page === 1) return;
    params.set('page', String(page - 1));
    setParams(params);
  };
  const handleRightPage = (page: number) => {
    if (page === numPages) return;
    params.set('page', String(page + 1));
    setParams(params);
  };

  return (
    <Box>
      <Button onClick={() => handleLeftPage(page)}>&lt;</Button>
      {Array(numPages)
        .fill(0)
        .map((_, i) => (
          <Button key={i + 1} onClick={() => handlePage(i + 1)}>
            {i + 1}
          </Button>
        ))}
      <Button onClick={() => handleRightPage(page)}>&gt;</Button>
    </Box>
  );
};
export default Pagination;
