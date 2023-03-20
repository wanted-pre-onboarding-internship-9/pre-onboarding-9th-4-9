import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useTable } from '../query/useTable';

const label: string[] = [
  'no',
  'id',
  'transaction_time',
  'status',
  'customer_id',
  'customer_name',
  'currency',
];

const MainPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageNum = searchParams.get('page') || '1';
  const [page, setPage] = useState<number>(Number(pageNum));

  const { data, isLoading, isFetching, isError } = useTable(page);

  useEffect(() => {
    setSearchParams({ page: `${page}` });
  }, [searchParams, page]);

  if (isLoading) <span>Loading...</span>;
  if (isError) <span>Error</span>;
  return (
    <>
      {/* 페이지 네이션 */}
      <div style={{ background: 'red' }}>
        <button
          onClick={() => setPage(old => Math.max(old - 1, 0))}
          disabled={page === 1}>
          Previous Page
        </button>
        {data?.pageData.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setPage(idx + 1);
            }}>
            {idx + 1}
          </button>
        ))}
        <button
          onClick={() => {
            setPage(old => (data?.hasMore ? old + 1 : old));
          }}
          disabled={!data?.hasMore}>
          Next Page
        </button>
      </div>
      {isFetching && <span> Loading...</span>}
      {/* 테이블 데이터  */}
      <table>
        <thead>
          <tr>
            {label.map(text => (
              <th key={text} className={text}>
                {text}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.pageData[page - 1].map((item, idx) => {
            return (
              <tr key={item.id}>
                <td>No: {(page - 1) * 50 + idx + 1}</td>
                <td>{item.id}</td>
                <td>{item.transaction_time}</td>
                <td>{item.status}</td>
                <td>{item.customer_id}</td>
                <td>{item.customer_name}</td>
                <td>{item.currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default MainPage;
