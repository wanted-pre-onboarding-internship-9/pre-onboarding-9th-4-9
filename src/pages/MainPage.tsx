import styled from 'styled-components';
import Paging from '../components/Paging';
import Search from '../components/Search';
import TableItem from '../components/TableItem';
import useFilter from '../hooks/useFilter';
import useGetOrders from '../hooks/useGetOrders';
import { ONE_PAGE_ITEM_LENGTH, TMockData } from '../types/mockDataTypes';

const MainPage = () => {
  const { toDayMockData, isLoading } = useGetOrders();

  const [orders, pagingItems, filters, setFilters] = useFilter(
    toDayMockData,
    isLoading
  );

  const { pages, totalPageCount } = pagingItems;

  return (
    <StMainPageWrap>
      <StSearchBox>
        <Search filters={filters} setFilters={setFilters} />
      </StSearchBox>

      <StTableWrap>
        <StTableHead>
          <div>번호</div>
          <div>주문번호</div>
          <div>거래시간</div>
          <div>주문처리상태</div>
          <div>고객번호</div>
          <div>고객이름</div>
          <div>가격</div>
        </StTableHead>

        <StTableBody>
          {orders.map((item: TMockData, index: number) => {
            const itemNumber =
              index +
              1 +
              (filters.currentPageNumber - 1) * ONE_PAGE_ITEM_LENGTH;
            return (
              <TableItem key={item.id} item={item} itemNumber={itemNumber} />
            );
          })}
        </StTableBody>
        <Paging
          pages={pages}
          totalPageCount={totalPageCount}
          filters={filters}
          setFilters={setFilters}
        />
      </StTableWrap>
    </StMainPageWrap>
  );
};

export default MainPage;

const StMainPageWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const StSearchBox = styled.div`
  height: 5%;
`;

const StTableWrap = styled.div`
  width: 80%;
  height: 70%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StTableHead = styled.div`
  display: grid;
  text-align: center;
  grid-template-columns: repeat(7, 1fr);
  div {
    font-weight: bold;
    background-color: orange;
    color: white;
    border-radius: 5px;
    border: solid 1px white;
    padding: 4px;
  }
`;

const StTableBody = styled.div`
  height: 100%;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 2px;
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: lightgray;
    border-radius: 6px;
  }
`;
