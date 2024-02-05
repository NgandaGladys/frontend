import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function FormDialog({ addNewUser }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        onClick={handleClickOpen}
        variant="contained"
        style={{
          background: '#5F7D09',
          fontSize: 12,
          padding: '0.5rem',
        }}>
        Add User
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const userName = formJson.userName;
            const userLevel = formJson.userLevel;
            addNewUser({ userName, userLevel });
            handleClose();
          },
        }}>
        <DialogTitle>Add New User</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="userName"
            name="userName"
            label="User Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="userLevel"
            name="userLevel"
            label="User Level"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

const UserContent = () => {
  const [rows, setRows] = useState([]);
  const [editedData, setEditedData] = useState(null);
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);

  let rowsData = [
    // data...

  ];

  function openEditForm() {
    setIsEditFormVisible(true);
  }

  function closeEditForm() {
    setIsEditFormVisible(false);
  }

  function handleUpdate() {
    // handleUpdate logic

    // Close the edit form after updating
    closeEditForm();
  }

  function handleEdit(id) {
    const rowIndex = rows.findIndex((row) => row.id === id);

    if (rowIndex !== -1) {
      openEditForm();
      setEditedData(rows[rowIndex]);
    } else {
      console.error("Row not found for id:", id);
    }
  }

  function handleUpdate() {
    const rowIndex = rows.findIndex((row) => row.id === editedData.id);

    if (rowIndex !== -1) {
      setRows((currentRows) => {
        const newRows = [...currentRows];
        newRows[rowIndex] = editedData;
        return newRows;
      });

      closeEditForm();
    } else {
      console.error("Row not found for id:", editedData.id);
    }
  }

  function handleDelete(id) {
    setRows((currentRows) => currentRows.filter((row) => row.id !== id));
    console.log('Delete button clicked', id);
  }

  function addNewUser(userData) {
    let newUser = {
      id: rows.length > 0 ? rows[rows.length - 1].id + 1 : 1,
      name: userData.userName,
      level: userData.userLevel,
      actions: { edit: handleEdit, delete: handleDelete },
    };

    setRows((currentRows) => [...currentRows, newUser]);
    console.log('New user added', newUser);
  }

  useEffect(() => {
    setRows(rowsData);
  }, []);

  return (
    <>
      <div className="flex w-full justify-between items-center">
        <h1 className="font-bold text-lg">All Users</h1>
        <FormDialog addNewUser={(data) => addNewUser(data)} />
      </div>
      <TableContainer component={Paper} style={{ marginTop: 20 }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>UserName</StyledTableCell>
              <StyledTableCell align="right">Level</StyledTableCell>
              <StyledTableCell align="right">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.level}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.actions.edit && (
                    <Button onClick={() => row.actions.edit(row.id)}>
                      Edit
                    </Button>
                  )}
                  {row.actions.delete && (
                    <Button
                      onClick={() => row.actions.delete(row.id)}
                      variant="text"
                      color="error">
                      Delete
                    </Button>
                  )}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default UserContent;
