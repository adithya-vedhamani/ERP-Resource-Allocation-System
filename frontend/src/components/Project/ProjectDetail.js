import { Box, Button, FormLabel, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProjectDetail = () => {
  const [inputs, setInputs] = useState();
  const id = useParams().id;
  const history = useNavigate();

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/projects/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.project));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5000/projects/${id}`, {
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
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/projects"));
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
            <FormLabel>Project Id</FormLabel>
            <TextField
              value={inputs.projectId}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="projectId"
            />
            <FormLabel>Project Name</FormLabel>
            <TextField
              value={inputs.projectName}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="projectName"
            />
            <FormLabel>Project Manager</FormLabel>
            <TextField
              value={inputs.projectManager}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="projectManager"
            />
            <FormLabel>Project Type</FormLabel>
            <TextField
              value={inputs.projectType}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="projectType"
            />
            <FormLabel>Project Start Date</FormLabel>
            <TextField
              value={inputs.projectStartDate}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="projectStartDate"
            />
            <FormLabel>Project End Date</FormLabel>
            <TextField
              value={inputs.projectEndDate}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="projectEndDate"
            />
            <FormLabel>$ Value</FormLabel>
            <TextField
              value={inputs.value}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="value"
            />
            <FormLabel>Currency</FormLabel>
            <TextField
              value={inputs.currency}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="currency"
            />
            <FormLabel>Customer Id</FormLabel>
            <TextField
              value={inputs.customerId}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="customerId"
            />
            <FormLabel>Domain</FormLabel>
            <TextField
              value={inputs.domain}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="domain"
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
            <FormLabel>Group</FormLabel>
            <TextField
              value={inputs.group}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="group"
            />
            <FormLabel>Account Manager</FormLabel>
            <TextField
              value={inputs.accountManager}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="accountManager"
            />
            <FormLabel>Project Category</FormLabel>
            <TextField
              value={inputs.projectCategory}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="projectCategory"
            />
            <FormLabel>Project Description</FormLabel>
            <TextField
              value={inputs.projectDescription}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="projectDescription"
            />

            <Button variant="contained" type="submit">
              Update Project
            </Button>
          </Box>
        </form>
      )}
    </div>
  );
};

export default ProjectDetail;
