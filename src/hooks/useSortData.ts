import { useContext, useEffect, useState } from 'react';

import DataContext from '../apis/contextAPI';

function useSortData() {
  const { filteredData, index, idSort, transactionSort } =
    useContext(DataContext);
  const [sortedData, setSortedData] = useState([...filteredData[index]]);

  const sortData = () => {
    const tmpData = [...sortedData];
    if (idSort) {
      setSortedData(
        tmpData.sort(function (a, b) {
          if (a.customer_id > b.customer_id) return -1;
          else if (b.customer_id > a.customer_id) return 1;
          else return 0;
        })
      );
      return;
    }
    if (transactionSort) {
      setSortedData(
        tmpData.sort(function (a, b) {
          if (a.transaction_time > b.transaction_time) return -1;
          else if (b.transaction_time > a.transaction_time) return 1;
          else return 0;
        })
      );
      return;
    }
  };
  const init = () => {
    setSortedData([...filteredData[index]]);
  };
  useEffect(() => {
    init();
    sortData();
  }, [idSort, transactionSort, index]);

  return [sortedData];
}
export default useSortData;
