
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import useGetOrders from '../hooks/useGetOrders';
import { TMockData } from '../types/mockDataTypes';


const MainPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { toDayMockData, pages, totalPageNumber, isLoading } = useGetOrders();

    console.log(toDayMockData);
    console.log(pages);
    console.log(isLoading);


    return (
        <div>
            <div>
                <StTable>
                    <thead>
                        <tr>
                            <th>index</th>
                            <th>주문번호</th>
                            <th>거래시간</th>
                            <th>주문처리상태</th>
                            <th>고객번호</th>
                            <th>고객이름</th>
                            <th>가격</th>
                        </tr>
                    </thead>
                    <StTbody>
                        {
                            toDayMockData?.filter((item: TMockData) => (
                                item.index >= 0 && item.index < 50
                            )).map((item: TMockData) => (
                                <tr key={item.index}>
                                    <td>{item.index}</td>
                                    <td>{item.id}</td>
                                    <td>{item.transaction_time}</td>
                                    <td>{item.status}</td>
                                    <td>{item.customer_id}</td>
                                    <td>{item.customer_name}</td>
                                    <td>{item.currency}</td>
                                </tr>
                            ))
                        }
                    </StTbody>
                </StTable>
                <StPageBtnWrap>
                    {
                        pages?.map((page) => (
                            <button key={page}>{page}</button>
                        ))

                    }
                </StPageBtnWrap>
            </div>

        </div>
    );


};

export default MainPage;

const StTable = styled.table`
    th {
        border:solid 1px red;
    }
    td{
        border:solid 1px green;
    }
`
const StTbody = styled.tbody`
    
`

const StPageBtnWrap = styled.div`
    display:flex;
    justify-content:center;
    gap: 10px;
    button {
        border:solid 1px blue;
    }
`