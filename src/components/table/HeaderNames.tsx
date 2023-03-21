import { Th, Tr } from '@chakra-ui/react';

const HeaderName = () => {
  const thArray = [
    '주문 번호',
    '거래일',
    '거래 시간',
    '주문 처리 상태',
    '고객 번호',
    '고객 이름',
    '가격',
  ];

  return (
    <Tr>
      {thArray.map(th => (
        <Th key={th} scope='col' fontSize='sm' textAlign='center'>
          {th}
        </Th>
      ))}
    </Tr>
  );
};

export default HeaderName;
