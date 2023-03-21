import { TMockData } from '../types/mockDataTypes';

type TProps = {
  item: TMockData;
};
const TableItem = ({ item }: TProps) => {
  return (
    <tr>
      <td>{item.index}</td>
      <td>{item.id}</td>
      <td>{item.transaction_time}</td>
      <td>{item.status ? 'true' : 'false'}</td>
      <td>{item.customer_id}</td>
      <td>{item.customer_name}</td>
      <td>{item.currency}</td>
    </tr>
  );
};

export default TableItem;
