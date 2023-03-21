import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

import { useTableQuery } from '../query/useTableQuery';
import { IOrder } from '../types/type';

type TSort = {
  tableData: IOrder[];
  sortId: string | null;
  sortTime: string | null;
};

const pageSplit = (arr: IOrder[], chunk: number): Array<IOrder[]> => {
  const result = [];
  for (let i = 0; i < arr.length; i += chunk) result.push(arr.slice(i, i + 50));
  return result;
};
const sort = ({ tableData, sortId, sortTime }: TSort): IOrder[] => {
  // id 기준 정렬
  if (sortId) {
    return sortId === 'asc'
      ? tableData.sort((a, b) => b.id - a.id)
      : tableData.sort((a, b) => a.id - b.id);
  }
  // transaction_time 기준 정렬
  if (sortTime) {
    return sortTime === 'asc'
      ? tableData.sort(
          (a, b) =>
            new Date(b.transaction_time).getTime() -
            new Date(a.transaction_time).getTime()
        )
      : tableData.sort(
          (a, b) =>
            new Date(a.transaction_time).getTime() -
            new Date(b.transaction_time).getTime()
        );
  }
  //기본 id 기준 오름차순
  return tableData.sort((a, b) => a.id - b.id);
};

export default function TableSection({ data }: { data: IOrder[] }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page') || '1');
  const sortId = searchParams.get('sortId');
  const sortTime = searchParams.get('sortTime');

  const { tableData } = useTableQuery(data);

  const list = useMemo(
    () => pageSplit(sort({ tableData, sortId, sortTime }), 50) || [],
    [tableData, sortId, sortTime]
  );

  const sortIdToggle = () => {
    searchParams.set('sortId', `${sortId === 'asc' ? 'desc' : 'asc'}`);
    searchParams.delete('sortTime');
    setSearchParams(searchParams);
  };
  const sortByimeToggle = () => {
    searchParams.set('sortTime', `${sortTime === 'asc' ? 'desc' : 'asc'}`);
    searchParams.delete('sortId');
    setSearchParams(searchParams);
  };
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>No</Th>
          <Th onClick={sortIdToggle}>주문 번호</Th>
          <Th onClick={sortByimeToggle}>거래 시간</Th>
          <Th>주문 처리상태</Th>
          <Th>고객 번호</Th>
          <Th>고객 이름</Th>
          <Th>가격</Th>
        </Tr>
      </Thead>
      {list.length > 0 ? (
        <Tbody>
          {list[Number(page) - 1].map((item, idx: number) => {
            return (
              <Tr key={idx}>
                <Td>{(Number(page) - 1) * 50 + idx + 1}</Td>
                <Td>{item.id}</Td>
                <Td>{item.transaction_time}</Td>
                <Td>{item.status ? '완료' : '미완료'}</Td>
                <Td>{item.customer_id}</Td>
                <Td>{item.customer_name}</Td>
                <Td>{item.currency}</Td>
              </Tr>
            );
          })}
        </Tbody>
      ) : (
        <tbody>
          <tr>
            <td>데이터가 없습니다.</td>
          </tr>
        </tbody>
      )}
    </Table>
  );
}

const Table = styled.table``;
const Thead = styled.thead``;
const Tr = styled.tr``;
const Th = styled.th``;
const Tbody = styled.tbody``;
const Td = styled.td``;
