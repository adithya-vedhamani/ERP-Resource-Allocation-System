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
import "./Role.css";
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


const URL = "http://localhost:5000/roles";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Roles = () => {
  const [roles, setRoles] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    fetchHandler().then((data) => setRoles(data.roles));
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleUpdate = (roleId) => {
    navigate(`/roles/${roleId}`);
  };

  const handleDelete = async (roleId) => {
    await axios.delete(`${URL}/${roleId}`);
    fetchHandler().then((data) => setRoles(data.roles));
  };

  return (
    <div>
      {/* Add Role link with a box around it */}
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
          to="/addRole"
          sx={{ color: "#7F00FF" }}
        >
          Add Role
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Role ID</StyledTableCell>
              <StyledTableCell>Role</StyledTableCell>
              <StyledTableCell>Rate Card</StyledTableCell>
              <StyledTableCell>Currency</StyledTableCell>
              <StyledTableCell>Experience</StyledTableCell>
              <StyledTableCell>Location</StyledTableCell>
              <StyledTableCell>OnOff</StyledTableCell>
              <StyledTableCell>Unit</StyledTableCell>
              <StyledTableCell>Role Description</StyledTableCell>
              <StyledTableCell>Skill</StyledTableCell>
              <StyledTableCell>Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? roles.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : roles
            ).map((role, i) => (
              <StyledTableRow key={i}>
                <StyledTableCell>{role.roleId}</StyledTableCell>
                <StyledTableCell>{role.role}</StyledTableCell>
                <StyledTableCell>{role.rateCard}</StyledTableCell>
                <StyledTableCell>{role.currency}</StyledTableCell>
                <StyledTableCell>{role.experience}</StyledTableCell>
                <StyledTableCell>{role.location}</StyledTableCell>
                <StyledTableCell>{role.onOff}</StyledTableCell>
                <StyledTableCell>{role.unit}</StyledTableCell>
                <StyledTableCell>{role.roleDescription}</StyledTableCell>
                <StyledTableCell>{role.skill}</StyledTableCell>
                <StyledTableCell>
                  <Button
                    component={Link}
                    to={`/roles/${role._id}`}
                    sx={{ mr: 1 }}
                  >
                    Update
                  </Button>
                  <Button
                    color="error"
                    onClick={() => handleDelete(role._id)}
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
          count={roles.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </div>
  );
};

export default Roles;
