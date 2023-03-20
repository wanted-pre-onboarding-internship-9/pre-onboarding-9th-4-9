import { TriangleUpIcon } from '@chakra-ui/icons';
import { Box, Th, Thead, Tr } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useSearchParams } from 'react-router-dom';

const StyledTh = styled(Th)`
  font-size: medium;
  font-weight: 600;
  letter-spacing: -1px;
  padding: 15px;
  color: black;
  text-align: center;
  margin: 0px auto;
`;

const StyledUpIcon = styled(TriangleUpIcon)<{ isReverse: boolean }>`
  color: orange;
  transform: ${props => (props.isReverse ? 'rotate(180deg)' : 'none')};
  transition: transform 0.4s ease-in-out;
`;

const TableHead = () => {
  const [params, setParams] = useSearchParams();

  const sortType = params.get('sort');

  const onClickSortById = () => {
    if (!sortType || sortType !== 'id:desc') {
      params.set('sort', 'id:desc');
      setParams(params);
    } else {
      params.set('sort', 'id:asc');
      setParams(params);
    }
  };

  const onClickSortByTime = () => {
    if (!sortType || sortType !== 'time:desc') {
      params.set('sort', 'time:desc');
      setParams(params);
    } else {
      params.set('sort', 'time:asc');
      setParams(params);
    }
  };

  return (
    <Thead>
      <Tr>
        <StyledTh onClick={onClickSortById} cursor='pointer' width='5'>
          <Box display='inline-block' mr='2'>
            주문번호
          </Box>
          <StyledUpIcon isReverse={sortType === 'id:desc'} />
        </StyledTh>
        <StyledTh onClick={onClickSortByTime} cursor='pointer'>
          <Box display='inline-block' mr='2'>
            거래시간
          </Box>
          <StyledUpIcon isReverse={sortType === 'time:desc'} />
        </StyledTh>
        <StyledTh>주문처리상태</StyledTh>
        <StyledTh>고객번호</StyledTh>
        <StyledTh>고객이름</StyledTh>
        <StyledTh>가격</StyledTh>
      </Tr>
    </Thead>
  );
};

export default TableHead;
