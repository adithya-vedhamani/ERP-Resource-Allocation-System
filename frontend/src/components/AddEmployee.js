import React, { useState } from "react";
import {
  Button,
  TextField,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    employeeId: "",
    employeeName: "",
    band: "",
    subdBand: "",
    level: "",
    rm: "",
    city: "",
    country: "",
    region: "",
    dateOfJoining: "",
    group: "",
    rex: "",
    tex: "",
    skill: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const validateForm = () => {
    const errors = {};
    Object.entries(inputs).forEach(([key, value]) => {
      if (!value.trim()) {
        errors[key] = "This field is required.";
      }
    });
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const sendRequest = async () => {
    await axios.post("http://localhost:5000/employees", {
      ...inputs,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      sendRequest().then(() => history("/employees"));
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        component={Paper}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        maxWidth={600}
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
          Add Employee
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <TextField
              label="Employee ID"
              value={inputs.employeeId}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="employeeId"
              error={!!formErrors.employeeId}
              helperText={formErrors.employeeId}
            />
            <TextField
              label="Employee Name"
              value={inputs.employeeName}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="employeeName"
              error={!!formErrors.employeeName}
              helperText={formErrors.employeeName}
            />
            <TextField
              label="Band"
              value={inputs.band}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="band"
              error={!!formErrors.band}
              helperText={formErrors.band}
            />
            <TextField
              label="Subd Band"
              value={inputs.subdBand}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="subdBand"
              error={!!formErrors.subdBand}
              helperText={formErrors.subdBand}
            />
            <TextField
              label="REx"
              value={inputs.rex}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="rex"
              error={!!formErrors.rex}
              helperText={formErrors.rex}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <TextField
              label="Level"
              value={inputs.level}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="level"
              error={!!formErrors.level}
              helperText={formErrors.level}
            />
            <TextField
              label="RM"
              value={inputs.rm}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="rm"
              error={!!formErrors.rm}
              helperText={formErrors.rm}
            />
            <TextField
              label="Skill"
              value={inputs.skill}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="skill"
              error={!!formErrors.skill}
              helperText={formErrors.skill}
            />
            <TextField
              label="Group"
              value={inputs.group}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="group"
              error={!!formErrors.group}
              helperText={formErrors.group}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <TextField
              label="City"
              value={inputs.city}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="city"
              error={!!formErrors.city}
              helperText={formErrors.city}
            />
            <TextField
              label="Country"
              value={inputs.country}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="country"
              error={!!formErrors.country}
              helperText={formErrors.country}
            />
            <TextField
              label="Region"
              value={inputs.region}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="region"
              error={!!formErrors.region}
              helperText={formErrors.region}
            />
            <TextField
              label="Date of Joining"
              value={inputs.dateOfJoining}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="dateOfJoining"
              error={!!formErrors.dateOfJoining}
              helperText={formErrors.dateOfJoining}
            />
            <TextField
              label="TEx"
              value={inputs.tex}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="tex"
              error={!!formErrors.tex}
              helperText={formErrors.tex}
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
          Add Employee
        </Button>
      </Box>
    </form>
  );
};

export default AddEmployee;
