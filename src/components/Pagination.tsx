import Pagination from 'react-js-pagination';
import styled from 'styled-components';

const Paginations = ({ page, handlePageChange }: any) => {
  return (
    <PaginationBox>
      <Pagination
        activePage={page} //현재 페이지
        itemsCountPerPage={50} //한 페이지 당 보여줄 리스트 아이템 개수
        totalItemsCount={500} //총 아이템 개수
        pageRangeDisplayed={5} //paginator 내에서 보여줄 페이지의 범위
        prevPageText='<'
        nextPageText='>'
        onChange={handlePageChange}
      />
    </PaginationBox>
  );
};

export default Paginations;

const PaginationBox = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  ul.pagination li {
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid #e2e2e2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }
  ul.pagination li:first-child {
    border-radius: 5px 0 0 5px;
  }
  ul.pagination li:last-child {
    border-radius: 0 5px 5px 0;
  }
  ul.pagination li a {
    text-decoration: none;
    color: #337ab7;
    font-size: 1rem;
  }
  ul.pagination li.active a {
    color: white;
  }
  ul.pagination li.active {
    background-color: #337ab7;
  }
  ul.pagination li a:hover,
  ul.pagination li a.active {
    color: blue;
  }
`;
