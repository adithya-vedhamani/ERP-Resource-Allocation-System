import React, { useEffect, useState } from "react";
import { Button,Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { styled } from '@mui/material/styles';
import  { tableCellClasses } from '@mui/material/TableCell';
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor:'#b070eb',
    color: theme.palette.common.white,

  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
  borderBottom: '2px solid #b070eb', // Set the border color to white
  
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: "#efe3fd",
  },
  '&:last-child td, &:last-child th': {
    border: 0,
    
  },
  borderBottom: '2px solid #b070eb', // Set the border color to white
  borderRadius: '8px',
}));



const URL = "http://localhost:5000/employees";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5); // Adjust this based on your preference
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetchHandler().then((data) => setEmployees(data.employees));
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleUpdate = (employeeId) => {
    navigate(`/employees/${employeeId}`);
  };

  const handleDelete = async (employeeId) => {
    await axios.delete(`${URL}/${employeeId}`);
    fetchHandler().then((data) => setEmployees(data.employees));
  };
  const showAddEmployeeLink = location.pathname === "/employees";
  const StyledTableContainer = styled(TableContainer)({
    border: '2px solid #ffffff', // Set the border color to white
    borderRadius: '8px', // Adjust the value based on your preference
    margin: '20px', // Add margin for better appearance
  });
  
  return (
    <div>
      {/* Add Employee link with a box around it */}
      {showAddEmployeeLink && (
        <Box
        style={{
          position: 'absolute',
          top: 20,
          right: 25,
          padding: '2px',
          background: 'white',
          borderRadius: '4px',
          border: '2px solid #7F00FF',
          color: '#7F00FF',
          '&:hover': {
            backgroundColor: '#7F00FF',
            color: 'white',
          },
        }}
      >
        <Button
          color="inherit"
          component={Link}
          to="/addEmployee"
          sx={{ color: '#7F00FF' }}
        >
          Add Employee
        </Button>
      </Box>
      )}

      <StyledTableContainer component={Paper}>
        
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Employee ID</StyledTableCell>
              <StyledTableCell>Employee Name</StyledTableCell>
              <StyledTableCell>Level</StyledTableCell>
              <StyledTableCell>Band</StyledTableCell>
              <StyledTableCell>Subd Band</StyledTableCell>
              <StyledTableCell>RM</StyledTableCell>
              <StyledTableCell>Location</StyledTableCell>
              <StyledTableCell>Region</StyledTableCell>
              <StyledTableCell>Date of Joining</StyledTableCell>
              <StyledTableCell>Group</StyledTableCell>
              <StyledTableCell>REx</StyledTableCell>
              <StyledTableCell>TEx</StyledTableCell>
              <StyledTableCell>Skill</StyledTableCell>
              <StyledTableCell>Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? employees.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : employees
            ).map((employee, i) => (
              <StyledTableRow key={i}>
                <StyledTableCell>{employee.employeeId}</StyledTableCell>
                <StyledTableCell>{employee.employeeName}</StyledTableCell>
                <StyledTableCell>{employee.level}</StyledTableCell>
                <StyledTableCell>{employee.band}</StyledTableCell>
                <StyledTableCell>{employee.subdBand}</StyledTableCell>
                <StyledTableCell>{employee.rm}</StyledTableCell>
                <StyledTableCell>{`${employee.city}, ${employee.country}`}</StyledTableCell>
                <StyledTableCell>{employee.region}</StyledTableCell>
                <StyledTableCell>{employee.dateOfJoining}</StyledTableCell>
                <StyledTableCell>{employee.group}</StyledTableCell>
                <StyledTableCell>{employee.rex}</StyledTableCell>
                <StyledTableCell>{employee.tex}</StyledTableCell>
                <StyledTableCell>{employee.skill}</StyledTableCell>
                <StyledTableCell>
       
                  <Button component={Link} to={`/employees/${employee._id}`} sx={{ mr: 1 }}>
                    Update
                  </Button>
                 
                  <Button color="error" onClick={() => handleDelete(employee._id)}>
                    Delete
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
          
        </Table>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={employees.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
  
      
      </StyledTableContainer>
     
    </div>
  );
};

export default Employees;
