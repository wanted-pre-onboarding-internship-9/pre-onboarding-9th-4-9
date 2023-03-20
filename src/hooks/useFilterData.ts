import { useEffect, useState } from 'react';

import { get } from '../apis/instance';
import { DataType, FunctionType } from '../types/type';

const today = '2023-03-08';
function useFilterData() {
  const [filteredData, setFilteredData] = useState<DataType[][]>();
  let data: DataType[] | null = null;
  const findDate = (date: string) => {
    const todayDate = new Date(date);
    const tmp = [];
    tmp.push(todayDate.getFullYear());
    tmp.push((todayDate.getMonth() + 1).toString().padStart(2, '0'));
    tmp.push(todayDate.getDate().toString().padStart(2, '0'));
    return tmp.join('-').toString();
  };
  const filterTodayData = (findDate: FunctionType) => {
    const todayData = data?.filter(
      item => today === findDate(item.transaction_time)
    );
    return todayData;
  };
  const pagenationData = (data: DataType[]) => {
    const arr = [];
    for (let i = 0; i < data.length; i += 50) {
      arr.push(data.slice(i, i + 50));
    }
    setFilteredData(arr);
  };

  const init = async () => {
    await get().then(response => (data = response.data));
    const todayData = filterTodayData(findDate); //data :filteredData
    if (todayData) {
      pagenationData(todayData);
    }
  };
  useEffect(() => {
    init();
  }, []);
  return [filteredData];
}

export default useFilterData;
