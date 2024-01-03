import React, { useState } from "react";
import {
  Button,
  FormLabel,
  TextField,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProject = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    projectId: "",
    projectName: "",
    projectManager: "",
    projectType: "",
    projectStartDate: "",
    projectEndDate: "",
    value: "",
    currency: "",
    customerId: "",
    domain: "",
    location: "",
    group: "",
    accountManager: "",
    projectCategory: "",
    projectDescription: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    await axios.post("http://localhost:5000/projects", {
      projectId: String(inputs.projectId),
      projectName: String(inputs.projectName),
      projectManager: String(inputs.projectManager),
      projectType: String(inputs.projectType),
      projectStartDate: String(inputs.projectStartDate),
      projectEndDate: String(inputs.projectEndDate),
      value: String(inputs.value),
      currency: String(inputs.currency),
      customerId: String(inputs.customerId),
      domain: String(inputs.domain),
      location: String(inputs.location),
      group: String(inputs.group),
      accountManager: String(inputs.accountManager),
      projectCategory: String(inputs.projectCategory),
      projectDescription: String(inputs.projectDescription),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/projects"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        component={Paper}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        maxWidth={900}
        mx="auto"
        my={5}
        p={4}
      >
        <Typography
          variant="h5"
          mb={3}
          sx={{
            color: '#7F00FF',
            borderBottom: '2px solid #7F00FF',
            paddingBottom: '8px',
            marginBottom: '16px',
          }}
        >
          Add Project
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <TextField
              label="Project ID"
              value={inputs.projectId}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="projectId"
            />
            <TextField
              label="Project Name"
              value={inputs.projectName}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="projectName"
            />
            <TextField
              label="Project Manager"
              value={inputs.projectManager}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="projectManager"
            />
            <TextField
              label="Project Type"
              value={inputs.projectType}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="projectType"
            />
                      <TextField
              label="Account Manager"
              value={inputs.accountManager}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="accountManager"
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <TextField
              label="Project Start Date"
              value={inputs.projectStartDate}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="projectStartDate"
            />
            <TextField
              label="Project End Date"
              value={inputs.projectEndDate}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="projectEndDate"
            />
            <TextField
              label="$ Value"
              value={inputs.value}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="value"
            />
            <TextField
              label="Currency"
              value={inputs.currency}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="currency"
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <TextField
              label="Customer ID"
              value={inputs.customerId}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="customerId"
            />
            <TextField
              label="Domain"
              value={inputs.domain}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="domain"
            />
            <TextField
              label="Location"
              value={inputs.location}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="location"
            />
            <TextField
              label="Group"
              value={inputs.group}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="group"
            />
  
            <TextField
              label="Project Category"
              value={inputs.projectCategory}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="projectCategory"
            />
  
          </Grid>
        </Grid>
        <TextField
              label="Project Description"
              value={inputs.projectDescription}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="projectDescription"
            />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{
            backgroundColor: 'white',
            borderRadius: '4px',
            border: '2px solid #7F00FF',
            color: '#7F00FF',
            '&:hover': {
              backgroundColor: '#7F00FF',
              color: 'white',
            },
          }}
        >
          Add Project
        </Button>
      </Box>
    </form>
  );
};

export default AddProject;
