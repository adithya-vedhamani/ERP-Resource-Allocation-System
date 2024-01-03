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

const AddCustomer = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    customerId: "",
    customerName: "",
    customerPOC: "",
    customerAddress: "",
    customerEmail: "",
    customerPhone: "",
    customerType: "",
    customerCategory: "",
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
      } else {
        errors[key] = ""; // Reset error when the field is not empty
      }
    });
    setFormErrors(errors);
    return Object.keys(errors).every((key) => !errors[key]);
  };

  const sendRequest = async () => {
    await axios.post("http://localhost:5000/customers", {
      ...inputs,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      sendRequest().then(() => history("/customers"));
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
        justifyContent={"center"}
        maxWidth={600}
        alignItems={"center"}
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
          Add Customer
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <FormLabel>Customer Id</FormLabel>
            <TextField
              value={inputs.customerId}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="customerId"
              error={!!formErrors.customerId}
              helperText={formErrors.customerId}
            />

            <FormLabel>Customer Name</FormLabel>
            <TextField
              value={inputs.customerName}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="customerName"
              error={!!formErrors.customerName}
              helperText={formErrors.customerName}
            />

            <FormLabel>Customer POC</FormLabel>
            <TextField
              value={inputs.customerPOC}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="customerPOC"
              error={!!formErrors.customerPOC}
              helperText={formErrors.customerPOC}
            />

            <FormLabel>Customer Address</FormLabel>
            <TextField
              value={inputs.customerAddress}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="customerAddress"
              error={!!formErrors.customerAddress}
              helperText={formErrors.customerAddress}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <FormLabel>Customer Email</FormLabel>
            <TextField
              value={inputs.customerEmail}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="customerEmail"
              error={!!formErrors.customerEmail}
              helperText={formErrors.customerEmail}
            />

            <FormLabel>Customer Phone</FormLabel>
            <TextField
              value={inputs.customerPhone}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="customerPhone"
              error={!!formErrors.customerPhone}
              helperText={formErrors.customerPhone}
            />

            <FormLabel>Customer Type</FormLabel>
            <TextField
              value={inputs.customerType}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="customerType"
              error={!!formErrors.customerType}
              helperText={formErrors.customerType}
            />

            <FormLabel>Customer Category</FormLabel>
            <TextField
              value={inputs.customerCategory}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="customerCategory"
              error={!!formErrors.customerCategory}
              helperText={formErrors.customerCategory}
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
          Add Customer
        </Button>
      </Box>
    </form>
  );
};

export default AddCustomer;
