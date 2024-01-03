import React, { useState } from "react";
import { Button, FormLabel, TextField, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddResource = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    resourceId: "",
    projectId: "",
    employeeId: "",
    assignmentStartDate: "",
    assignmentEndDate: "",
    role: "",
    billingStatus: "",
    allocationPercentage: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    await axios.post("http://localhost:5000/resources", {
      resourceId: String(inputs.resourceId),
      projectId: String(inputs.projectId),
      employeeId: String(inputs.employeeId),
      assignmentStartDate: String(inputs.assignmentStartDate),
      assignmentEndDate: String(inputs.assignmentEndDate),
      role: String(inputs.role),
      billingStatus: String(inputs.billingStatus),
      allocationPercentage: String(inputs.allocationPercentage),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/resources"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        component={Paper}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        maxWidth={800}
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
          Add Resource
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <FormLabel>Resource ID</FormLabel>
            <TextField
              value={inputs.resourceId}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="resourceId"
            />
            <FormLabel>Project ID</FormLabel>
            <TextField
              value={inputs.projectId}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="projectId"
            />
            <FormLabel>Employee ID</FormLabel>
            <TextField
              value={inputs.employeeId}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="employeeId"
            />
          <FormLabel>Billing Status</FormLabel>
            <TextField
              value={inputs.billingStatus}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="billingStatus"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormLabel>Assignment Start Date</FormLabel>
            <TextField
              value={inputs.assignmentStartDate}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="assignmentStartDate"
            />
            <FormLabel>Assignment End Date</FormLabel>
            <TextField
              value={inputs.assignmentEndDate}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="assignmentEndDate"
            />
            <FormLabel>Role</FormLabel>
            <TextField
              value={inputs.role}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="role"
            />

            <FormLabel>Allocation Percentage</FormLabel>
            <TextField
              value={inputs.allocationPercentage}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="allocationPercentage"
            />
          </Grid>
        </Grid>

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
          Add Resource
        </Button>

      </Box>
    </form>
  );
};

export default AddResource;
