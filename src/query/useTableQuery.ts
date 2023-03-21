import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { IOrder } from '../types/type';

export function useTableQuery(data: IOrder[] = []) {
  const [searchParams, setSearchParams] = useSearchParams();
  const status = searchParams.get('status');

  const [tableData, setTableData] = useState<IOrder[]>(data);

  useEffect(() => {
    setTableData(data);
  }, [data]);

  useEffect(() => {
    status ? filterStatus(status) : filterStatus('전체');
  }, [status]);

  const pageLength = useMemo(
    () => Math.ceil(tableData.length / 50),
    [tableData.length]
  );

  function filterStatus(status: string) {
    if (status === '완료') {
      const list = data.filter((el: IOrder) => el.status);
      setTableData(list);
    } else if (status === '미완료') {
      const list = data.filter((el: IOrder) => !el.status);
      setTableData(list);
    } else {
      setTableData(data);
    }
  }
  return { tableData, pageLength };
}
