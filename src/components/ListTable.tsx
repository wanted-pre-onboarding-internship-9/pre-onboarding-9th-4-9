import { Checkbox } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { IOrderList } from '../types/type';

function ListTable({ data, items, page }: any) {
  return (
    <TableContainer component={Paper}>
      <Table size='small' sx={{ minWidth: 700 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell align='center'>{''}</TableCell>
            <TableCell align='center'>거래시간</TableCell>
            <TableCell align='center'>주문번호</TableCell>
            <TableCell align='center'>고객번호</TableCell>
            <TableCell align='center'>고객이름</TableCell>
            <TableCell align='center'>가격</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data
            ?.slice(items * (page - 1), items * (page - 1) + items)
            ?.map((item: IOrderList) => (
              <TableRow
                key={item.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
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
  );
}

export default ListTable;
