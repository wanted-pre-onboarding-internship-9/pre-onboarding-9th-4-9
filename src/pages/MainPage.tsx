import { useQuery } from 'react-query';

import { getDataAPI } from '../apis/instance';
import { IOrderList } from '../types/type';

const MainPage = () => {
  const { isLoading, data } = useQuery('getData', () => getDataAPI());

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <h1>switchwon</h1>
      {data?.data.map((item: IOrderList) => (
        <ol key={item.id}>
          <li>{item.id}</li>
          <li>{item.transaction_time.toString()}</li>
          <li>{item.status}</li>
          <li>{item.customer_id}</li>
          <li>{item.customer_name}</li>
          <li>{item.currency}</li>
        </ol>
      ))}
    </>
  );
};

export default MainPage;
