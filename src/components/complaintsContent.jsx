
// ComplaintsList.jsx
import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ComplaintsContent = () => {
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
      <h1>Complaints</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
            
              <TableCell>Email</TableCell>
              <TableCell>Message</TableCell>
              <TableCell>Reply</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customerList.map((customer, index) => (
              <TableRow key={index}>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{customer.message}</TableCell>
                <TableCell>{customer.reply}</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ComplaintsContent;

