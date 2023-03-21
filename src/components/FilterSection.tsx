import { ChangeEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

export default function FilterSection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const status = searchParams.get('status') || '전체';

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const target = e.target.value;
    target === '전체'
      ? searchParams.delete('status')
      : (searchParams.set('status', `${target}`), searchParams.delete('page'));
    setSearchParams(searchParams);
  };
  
  return (
    <Bese>
      주문처리 :
      <Select defaultValue={status} onChange={handleSelect}>
        <Option value='전체'>전체</Option>
        <Option value='완료'>완료</Option>
        <Option value='미완료'>미완료</Option>
      </Select>
    </Bese>
  );
}

const Bese = styled.div``;
const Select = styled.select``;
const Option = styled.option``;
