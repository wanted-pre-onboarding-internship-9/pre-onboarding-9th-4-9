import useSortData from '../hooks/useSortData';

function Table() {
  const [sortedData] = useSortData();
  return (
    <tbody>
      {sortedData?.map(item => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.transaction_time}</td>
          <td>{item.status}</td>
          <td>{item.customer_id}</td>
          <td>{item.customer_name}</td>
          <td>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  );
}
export default Table;
