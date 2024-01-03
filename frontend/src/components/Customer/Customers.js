import React, { useEffect, useState } from "react";
import {
  Button,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination
} from "@mui/material";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#b070eb",
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  },
  borderBottom: "2px solid #b070eb"
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#efe3fd"
  },
  "&:last-child td, &:last-child th": {
    border: 0
  },
  borderBottom: "2px solid #b070eb",
  borderRadius: "8px"
}));

const URL = "http://localhost:5000/customers";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetchHandler().then((data) => setCustomers(data.customers));
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleUpdate = (customerId) => {
    navigate(`/customers/${customerId}`);
  };

  const handleDelete = async (customerId) => {
    await axios.delete(`${URL}/${customerId}`);
    fetchHandler().then((data) => setCustomers(data.customers));
  };

  const showAddCustomerLink = location.pathname === "/customers";

  return (
    <div>
      {/* Add Customer link with a box around it */}
      {showAddCustomerLink && (
        <Box
          style={{
            position: "absolute",
            top: 20,
            right: 25,
            padding: "2px",
            background: "white",
            borderRadius: "4px",
            border: "2px solid #7F00FF",
            color: "#7F00FF",
            "&:hover": {
              backgroundColor: "#7F00FF",
              color: "white"
            }
          }}
        >
          <Button
            color="inherit"
            component={Link}
            to="/add"
            sx={{ color: "#7F00FF" }}
          >
            Add Customer
          </Button>
        </Box>
      )}

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Customer ID</StyledTableCell>
              <StyledTableCell>Customer Name</StyledTableCell>
              <StyledTableCell>POC</StyledTableCell>
              <StyledTableCell>Address</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Phone</StyledTableCell>
              <StyledTableCell>Type</StyledTableCell>
              <StyledTableCell>Category</StyledTableCell>
              <StyledTableCell>Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? customers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : customers
            ).map((customer, i) => (
              <StyledTableRow key={i}>
                <StyledTableCell>{customer.customerId}</StyledTableCell>
                <StyledTableCell>{customer.customerName}</StyledTableCell>
                <StyledTableCell>{customer.customerPOC}</StyledTableCell>
                <StyledTableCell>{customer.customerAddress}</StyledTableCell>
                <StyledTableCell>{customer.customerEmail}</StyledTableCell>
                <StyledTableCell>{customer.customerPhone}</StyledTableCell>
                <StyledTableCell>{customer.customerType}</StyledTableCell>
                <StyledTableCell>{customer.customerCategory}</StyledTableCell>
                <StyledTableCell>
                  <Button
                    component={Link}
                    to={`/customers/${customer._id}`}
                    sx={{ mr: 1 }}
                  >
                    Update
                  </Button>
                  <Button
                    color="error"
                    onClick={() => handleDelete(customer._id)}
                  >
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
          count={customers.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
 
    </div>
  );
};

export default Customers;
