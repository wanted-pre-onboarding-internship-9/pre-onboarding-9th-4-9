import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

type TProps = {
  setSearch: Dispatch<SetStateAction<string>>;
};

export default function SearchSection({ setSearch }: TProps) {
  return (
    <Input
      type='text'
      placeholder='고객이름 조회'
      onChange={e => setSearch(e.target.value)}
    />
  );
}
const Input = styled.input``;
