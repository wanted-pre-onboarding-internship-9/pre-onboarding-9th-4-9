import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import DataContext from './apis/contextAPI';
import Table from './components/Table';
import useFilterData from './hooks/useFilterData';

function App() {
  const [filteredData] = useFilterData();
  const [index, setIndex] = useState(1);
  const [idSort, setIdSort] = useState(false);
  const [transactionSort, setTransactionSort] = useState(false);

  const [buttons, setButtons] = useState<number[]>([]);

  const handleButton = (index: number) => {
    setIndex(index);
  };

  const handleIdButton = () => {
    setIdSort(prev => !prev);
    setTransactionSort(false);
  };

  const handleTransactionButton = () => {
    setTransactionSort(prev => !prev);
    setIdSort(false);
  };

  useEffect(() => {
    if (filteredData) {
      setButtons(
        Array.from(
          { length: filteredData?.length - 1 },
          (_, index) => index + 1
        )
      );
    }
  }, [filteredData]);

  if (filteredData) {
    return (
      <DataContext.Provider
        value={{ filteredData, index, idSort, transactionSort }}>
        <Outlet />

        <table>
          <thead>
            <tr>
              <th>
                <button onClick={handleIdButton}>
                  주문번호<span>{idSort ? '↑' : '↓'}</span>
                </button>
              </th>
              <th>
                <button onClick={handleTransactionButton}>
                  거래일 & 거래시간<span>{transactionSort ? '↑' : '↓'}</span>
                </button>
              </th>
              <th>주문처리상태</th>
              <th>고객번호</th>
              <th>고객이름</th>
              <th>가격</th>
            </tr>
          </thead>
          <Table />
        </table>
        {buttons.map(item => (
          <button onClick={() => handleButton(item)} key={item}>
            {item}
          </button>
        ))}
      </DataContext.Provider>
    );
  }

  return <Outlet />;
}

export default App;
