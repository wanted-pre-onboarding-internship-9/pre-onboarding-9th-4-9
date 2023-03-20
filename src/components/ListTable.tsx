import { IOrderList } from '../types/type';

const ListTable = ({ data, items, page }: any) => {
  return (
    <div>
      {data?.data
        .slice(items * (page - 1), items * (page - 1) + items)
        ?.map((item: IOrderList) => (
          <ol key={item.id}>
            <li>{item.id}</li>
            <li>{item.transaction_time.toString()}</li>
            <li>{item.status}</li>
            <li>{item.customer_id}</li>
            <li>{item.customer_name}</li>
            <li>{item.currency}</li>
          </ol>
        ))}
    </div>
  );
};

export default ListTable;
