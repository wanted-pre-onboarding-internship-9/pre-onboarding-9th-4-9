import { MinusIcon, TriangleUpIcon } from '@chakra-ui/icons';
import { Box, Th, Thead, Tr } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useSearchParams } from 'react-router-dom';

interface IIconProps {
  isReverse: boolean;
}

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
        <StyledTh width='5'>
          <Box
            display='inline-block'
            mr='2'
            cursor='pointer'
            onClick={onClickSortById}>
            주문번호
          </Box>
          {(sortType || ' ').split(':')[0] === 'id' ? (
            <StyledUpIcon isReverse={sortType === 'id:desc'} />
          ) : (
            <MinusIcon color='orange.300' />
          )}
        </StyledTh>
        <StyledTh>
          <Box
            display='inline-block'
            mr='2'
            cursor='pointer'
            onClick={onClickSortByTime}>
            거래시간
          </Box>
          {(sortType || ' ').split(':')[0] === 'time' ? (
            <StyledUpIcon isReverse={sortType === 'time:desc'} />
          ) : (
            <MinusIcon color='orange.300' />
          )}
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

const StyledTh = styled(Th)`
  font-size: medium;
  font-weight: 600;
  letter-spacing: -1px;
  padding: 15px;
  color: black;
  text-align: center;
  margin: 0px auto;
`;

const StyledUpIcon = styled(TriangleUpIcon, {
  shouldForwardProp: propName => propName !== 'isReverse',
})<IIconProps>`
  color: orange;
  transform: ${props => (props.isReverse ? 'rotate(180deg)' : 'none')};
  transition: transform 0.4s ease-in-out;
`;
