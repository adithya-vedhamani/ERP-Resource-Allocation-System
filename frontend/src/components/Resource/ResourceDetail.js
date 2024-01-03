import React, { useEffect, useState } from "react";
import { Box, Button, FormLabel, TextField } from "@mui/material";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ResourceDetail = () => {
  const [inputs, setInputs] = useState();
  const id = useParams().id;
  const history = useNavigate();

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/resources/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.resource));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5000/resources/${id}`, {
        resourceId: String(inputs.resourceId),
        projectId: String(inputs.projectId),
        employeeId: String(inputs.employeeId),
        assignmentStartDate: String(inputs.assignmentStartDate),
        assignmentEndDate: String(inputs.assignmentEndDate),
        role: String(inputs.role),
        billingStatus: String(inputs.billingStatus),
        allocationPercentage: String(inputs.allocationPercentage),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/resources"));
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      {inputs && (
        <form onSubmit={handleSubmit}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent={"center"}
            maxWidth={700}
            alignContent={"center"}
            alignSelf="center"
            marginLeft={"auto"}
            marginRight="auto"
            marginTop={10}
          >
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
            <FormLabel>Billing Status</FormLabel>
            <TextField
              value={inputs.billingStatus}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="billingStatus"
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

            <Button variant="contained" type="submit">
              Update Resource
            </Button>
          </Box>
        </form>
      )}
    </div>
  );
};

export default ResourceDetail;
