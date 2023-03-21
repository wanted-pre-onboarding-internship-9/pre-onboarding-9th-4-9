import Header from '../components/common/Header';
import Pagination from '../components/common/Pagination';
import TableBox from '../components/table/TableBox';
import useGetOrders from '../hooks/useGetOrders';

const OrderListPage = () => {
  const { isLoading, pageItems, totalPage } = useGetOrders();
  const hasOrder = (pageItems && pageItems.length > 0) || false;

  return (
    <>
      <Header />
      <TableBox isLoading={isLoading} pageItems={pageItems} />
      <Pagination hasOrder={hasOrder} totalPage={totalPage} />
    </>
  );
};

export default OrderListPage;
