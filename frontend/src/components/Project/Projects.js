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
import "./Project.css";

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

const URL = "http://localhost:5000/projects";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    fetchHandler().then((data) => setProjects(data.projects));
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleUpdate = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  const handleDelete = async (projectId) => {
    await axios.delete(`${URL}/${projectId}`);
    fetchHandler().then((data) => setProjects(data.projects));
  };

  return (
    <div>
      {/* Add Project link with a box around it */}
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
          to="/addProject"
          sx={{ color: "#7F00FF" }}
        >
          Add Project
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Project ID</StyledTableCell>
              <StyledTableCell>Project Name</StyledTableCell>
              <StyledTableCell>Project Manager</StyledTableCell>
              <StyledTableCell>Project Type</StyledTableCell>
              <StyledTableCell>Start Date</StyledTableCell>
              <StyledTableCell>End Date</StyledTableCell>
              <StyledTableCell>Value</StyledTableCell>
              <StyledTableCell>Currency</StyledTableCell>
              <StyledTableCell>Customer ID</StyledTableCell>
              <StyledTableCell>Domain</StyledTableCell>
              <StyledTableCell>Location</StyledTableCell>
              <StyledTableCell>Group</StyledTableCell>
              <StyledTableCell>Account Manager</StyledTableCell>
              <StyledTableCell>Category</StyledTableCell>
              <StyledTableCell>Description</StyledTableCell>
              <StyledTableCell>Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? projects.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : projects
            ).map((project, i) => (
              <StyledTableRow key={i}>
                <StyledTableCell>{project.projectId}</StyledTableCell>
                <StyledTableCell>{project.projectName}</StyledTableCell>
                <StyledTableCell>{project.projectManager}</StyledTableCell>
                <StyledTableCell>{project.projectType}</StyledTableCell>
                <StyledTableCell>{project.projectStartDate}</StyledTableCell>
                <StyledTableCell>{project.projectEndDate}</StyledTableCell>
                <StyledTableCell>{project.value}</StyledTableCell>
                <StyledTableCell>{project.currency}</StyledTableCell>
                <StyledTableCell>{project.customerId}</StyledTableCell>
                <StyledTableCell>{project.domain}</StyledTableCell>
                <StyledTableCell>{project.location}</StyledTableCell>
                <StyledTableCell>{project.group}</StyledTableCell>
                <StyledTableCell>{project.accountManager}</StyledTableCell>
                <StyledTableCell>{project.projectCategory}</StyledTableCell>
                <StyledTableCell>{project.projectDescription}</StyledTableCell>
                <StyledTableCell>
                  <Button
                    component={Link}
                    to={`/projects/${project._id}`}
                    sx={{ mr: 1 }}
                  >
                    Update
                  </Button>
                  <Button
                    color="error"
                    onClick={() => handleDelete(project._id)}
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
          count={projects.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </div>
  );
};

export default Projects;
