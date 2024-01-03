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
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";
import "./Resource.css";

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


const URL = "http://localhost:5000/resources";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Resources = () => {
  const [resources, setResources] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    fetchHandler().then((data) => setResources(data.resources));
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleUpdate = (resourceId) => {
    navigate(`/resources/${resourceId}`);
  };

  const handleDelete = async (resourceId) => {
    await axios.delete(`${URL}/${resourceId}`);
    fetchHandler().then((data) => setResources(data.resources));
  };

  return (
    <div>
      {/* Add Resource link with a box around it */}
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
          to="/addResource"
          sx={{ color: "#7F00FF" }}
        >
          Add Resource
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Resource ID</StyledTableCell>
              <StyledTableCell>Project ID</StyledTableCell>
              <StyledTableCell>Employee ID</StyledTableCell>
              <StyledTableCell>Assignment Start Date</StyledTableCell>
              <StyledTableCell>Assignment End Date</StyledTableCell>
              <StyledTableCell>Role</StyledTableCell>
              <StyledTableCell>Billing Status</StyledTableCell>
              <StyledTableCell>Allocation Percentage</StyledTableCell>
              <StyledTableCell>Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? resources.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : resources
            ).map((resource, i) => (
              <StyledTableRow key={i}>
                <StyledTableCell>{resource.resourceId}</StyledTableCell>
                <StyledTableCell>{resource.projectId}</StyledTableCell>
                <StyledTableCell>{resource.employeeId}</StyledTableCell>
                <StyledTableCell>{resource.assignmentStartDate}</StyledTableCell>
                <StyledTableCell>{resource.assignmentEndDate}</StyledTableCell>
                <StyledTableCell>{resource.role}</StyledTableCell>
                <StyledTableCell>{resource.billingStatus}</StyledTableCell>
                <StyledTableCell>{resource.allocationPercentage}</StyledTableCell>
                <StyledTableCell>
                  <Button
                    component={Link}
                    to={`/resources/${resource._id}`}
                    sx={{ mr: 1 }}
                  >
                    Update
                  </Button>
                  <Button
                    color="error"
                    onClick={() => handleDelete(resource._id)}
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
          count={resources.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </div>
  );
};

export default Resources;
