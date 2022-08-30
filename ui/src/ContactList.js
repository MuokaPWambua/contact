import React from 'react';
import {Table, TableContainer, TableBody, TableRow, TableCell, TableHead, Paper} from '@material-ui/core';
import useLastElement from './useLastElement'


export default function ContactList({data, load, setPage, more}) {
  const observer = React.useRef();  
  const lastElement = useLastElement(observer, setPage, load, more)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell align="center">Last Name</TableCell>
            <TableCell align="right">Contact</TableCell>
         </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, i) => (
           (data.length === (i + 1)) ?
           <TableRow key={row.id} ref={lastElement} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell align="center">{row.lastname}</TableCell>
              <TableCell align="right">{row.contact}</TableCell>
           </TableRow>:
           <TableRow key={row.id}  sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell align="center">{row.lastname}</TableCell>
              <TableCell align="right">{row.contact}</TableCell>
           </TableRow>
           ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

