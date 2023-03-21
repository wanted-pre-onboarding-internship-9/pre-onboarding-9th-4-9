import { Button, ButtonGroup, Checkbox, Input } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useState } from 'react';
import styled from 'styled-components';

import { IOrderList, IProps } from '../types/type';

const ListTable = ({ data, items, page }: IProps) => {
  const [onSort, setOnSort] = useState(false);
  const [onTrue, setOnTrue] = useState(false);
  const [onFalse, setOnFalse] = useState(false);
  const [onSearch, setOnSearch] = useState(false);
  const [sortData, setSortData] = useState(data);
  const [customerName, setCustomerName] = useState('');

  const handleSortByTime = () => {
    setSortData(
      data?.sort(function (a: IOrderList, b: IOrderList) {
        return (
          new Date(b.transaction_time).getTime() -
          new Date(a.transaction_time).getTime()
        );
      })
    );
  };

  const handleSortById = () => {
    setSortData(
      data?.sort(function (a: IOrderList, b: IOrderList) {
        return b.id - a.id;
      })
    );
  };

  const handleSortByTrue = (type: boolean) => {
    if (type === true)
      setSortData(data?.filter((item: IOrderList) => item.status === true));
    if (type === false)
      setSortData(data?.filter((item: IOrderList) => item.status === false));
  };

  const handleSearch = () => {
    if (!customerName) {
      setSortData(data);
    }
    setOnSearch(!onSearch);
    setSortData(
      data?.filter((item: IOrderList) => item.customer_name === customerName)
    );
    setCustomerName('');
  };

  return (
    <>
      <Input
        value={customerName}
        onChange={e => setCustomerName(e.target.value)}
      />
      <Button onClick={handleSearch}>검색</Button>
      <Button onClick={handleSearch}>전체</Button>
      <TableContainer component={Paper}>
        <Table size='small' sx={{ minWidth: 700 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='center'>
                <ButtonGroup>
                  <Button
                    onClick={() => {
                      setOnTrue(!onTrue);
                      handleSortByTrue(true);
                    }}>
                    true
                  </Button>
                  <Button
                    onClick={() => {
                      setOnFalse(!onFalse);
                      handleSortByTrue(false);
                    }}>
                    false
                  </Button>
                </ButtonGroup>
              </TableCell>
              <TableCell align='center'>
                거래시간
                <StButton
                  onClick={() => {
                    setOnSort(!onSort);
                    handleSortByTime();
                  }}>
                  ▼
                </StButton>
              </TableCell>
              <TableCell align='center'>
                주문번호
                <StButton
                  onClick={() => {
                    setOnSort(!onSort);
                    handleSortById();
                  }}>
                  ▼
                </StButton>
              </TableCell>
              <TableCell align='center'>고객번호</TableCell>
              <TableCell align='center'>고객이름</TableCell>
              <TableCell align='center'>가격</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {onSort || onTrue || onFalse || onSearch
              ? sortData
                  ?.slice(items * (page - 1), items * (page - 1) + items)
                  ?.map((item: IOrderList) => (
                    <TableRow
                      key={item.id}
                      sx={{
                        '&:last-child td, &:last-child th': { border: 0 },
                      }}>
                      <TableCell align='center' padding='checkbox'>
                        <Checkbox color='primary' checked={item.status} />
                      </TableCell>
                      <TableCell component='th' scope='row' align='center'>
                        {item.transaction_time.toString()}
                      </TableCell>
                      <TableCell align='center'>{item.id}</TableCell>
                      <TableCell align='center'>{item.customer_id}</TableCell>
                      <TableCell align='center'>{item.customer_name}</TableCell>
                      <TableCell align='center'>{item.currency}</TableCell>
                    </TableRow>
                  ))
              : data
                  ?.slice(items * (page - 1), items * (page - 1) + items)
                  ?.map((item: IOrderList) => (
                    <TableRow
                      key={item.id}
                      sx={{
                        '&:last-child td, &:last-child th': { border: 0 },
                      }}>
                      <TableCell align='center' padding='checkbox'>
                        <Checkbox color='primary' checked={item.status} />
                      </TableCell>
                      <TableCell component='th' scope='row' align='center'>
                        {item.transaction_time.toString()}
                      </TableCell>
                      <TableCell align='center'>{item.id}</TableCell>
                      <TableCell align='center'>{item.customer_id}</TableCell>
                      <TableCell align='center'>{item.customer_name}</TableCell>
                      <TableCell align='center'>{item.currency}</TableCell>
                    </TableRow>
                  ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ListTable;

const StButton = styled.button`
  cursor: pointer;
  color: #fd7e14;
`;
