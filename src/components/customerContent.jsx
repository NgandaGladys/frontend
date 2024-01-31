// CustomerList.jsx
import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const CustomerContent = () => {
  const [customerList, setCustomerList] = useState([]);

  useEffect(() => {
    // Retrieve customer data from localStorage
    const storedData = localStorage.getItem('customerData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setCustomerList(parsedData);
    }
  }, []);

  return (
    <div>
      <h1>Customer List</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Message</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customerList.map((customer, index) => (
              <TableRow key={index}>
                <TableCell>{customer.customerName}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{customer.message}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CustomerContent;

