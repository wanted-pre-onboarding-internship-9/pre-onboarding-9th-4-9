import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { IOrder } from '../types/type';

export function useTable(data: IOrder[] = []) {
  const [tableData, setTableData] = useState<IOrder[]>(data);

  const [searchParams] = useSearchParams();
  const status = searchParams.get('status');

  useEffect(() => {
    setTableData(data);
  }, [data]);

  const pageLength = useMemo(
    () => Math.ceil(tableData.length / 50),
    [tableData.length]
  );

  useEffect(() => {
    status ? filterStatus(status) : filterStatus('전체');
  }, [status]);

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
