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

const AddRole = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    roleId: "",
    role: "",
    rateCard: "",
    currency: "",
    experience: "",
    location: "",
    onOff: "",
    unit: "",
    roleDescription: "",
    skill: ""
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    await axios.post("http://localhost:5000/roles", {
      roleId: String(inputs.roleId),
      role: String(inputs.role),
      rateCard: String(inputs.rateCard),
      currency: String(inputs.currency),
      experience: String(inputs.experience),
      location: String(inputs.location),
      onOff: String(inputs.onOff),
      unit: String(inputs.unit),
      roleDescription: String(inputs.roleDescription),
      skill: String(inputs.skill),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/roles"));
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
          Add Role
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <FormLabel>Role ID</FormLabel>
            <TextField
              value={inputs.roleId}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="roleId"
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
            <FormLabel>Rate Card</FormLabel>
            <TextField
              value={inputs.rateCard}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="rateCard"
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <FormLabel>Currency</FormLabel>
            <TextField
              value={inputs.currency}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="currency"
            />
            <FormLabel>Experience</FormLabel>
            <TextField
              value={inputs.experience}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="experience"
            />
            <FormLabel>Location</FormLabel>
            <TextField
              value={inputs.location}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="location"
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <FormLabel>OnOff</FormLabel>
            <TextField
              value={inputs.onOff}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="onOff"
            />
            <FormLabel>Unit</FormLabel>
            <TextField
              value={inputs.unit}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="unit"
            />
            <FormLabel>Skill</FormLabel>
            <TextField
              value={inputs.skill}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="skill"
            />
     
            
          </Grid>
     
        </Grid>
        <FormLabel>Role Description</FormLabel>
            <TextField
              value={inputs.roleDescription}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="roleDescription"
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
          Add Role
        </Button>

      </Box>
    </form>
  );
};

export default AddRole;
