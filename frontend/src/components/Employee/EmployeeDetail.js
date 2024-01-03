import { Box, Button, FormLabel, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EmployeeDetail = () => {
  const [inputs, setInputs] = useState();
  const id = useParams().id;
  const history = useNavigate();

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/employees/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.employee));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5000/employees/${id}`, {
        employeeId: String(inputs.employeeId),
        employeeName: String(inputs.employeeName),
        band: String(inputs.band),
        subdBand: String(inputs.subdBand),
        level: String(inputs.level),
        rm: String(inputs.rm),
        city: String(inputs.city),
        country: String(inputs.country),
        region: String(inputs.region),
        dateOfJoining: String(inputs.dateOfJoining),
        group: String(inputs.group),
        rex: String(inputs.rex),
        tex: String(inputs.tex),
        skill: String(inputs.skill),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/employees"));
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
            <FormLabel>Employee Id</FormLabel>
            <TextField
              value={inputs.employeeId}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="employeeId"
            />
            <FormLabel>Name</FormLabel>
            <TextField
              value={inputs.employeeName}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="employeeName"
            />
            <FormLabel>Name</FormLabel>
            <TextField
              value={inputs.employeeName}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="employeeName"
            />
            <FormLabel>Band</FormLabel>
            <TextField
              value={inputs.band}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="band"
            />
            <FormLabel>Subd Band</FormLabel>
            <TextField
              value={inputs.subdBand}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="subdBand"
            />
            <FormLabel>Level</FormLabel>
            <TextField
              value={inputs.level}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="level"
            />
            <FormLabel>RM</FormLabel>
            <TextField
              value={inputs.rm}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="rm"
            />
            <FormLabel>City</FormLabel>
            <TextField
              value={inputs.city}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="city"
            />
            <FormLabel>Country</FormLabel>
            <TextField
              value={inputs.country}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="country"
            />
            <FormLabel>Region</FormLabel>
            <TextField
              value={inputs.region}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="region"
            />
            <FormLabel>Date of Joining</FormLabel>
            <TextField
              value={inputs.dateOfJoining}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="dateOfJoining"
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
            <FormLabel>REx</FormLabel>
            <TextField
              value={inputs.rex}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="rex"
            />
            <FormLabel>TEx</FormLabel>
            <TextField
              value={inputs.tex}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="tex"
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

            <Button variant="contained" type="submit">
              Update Employee
            </Button>
          </Box>
        </form>
      )}
    </div>
  );
};

export default EmployeeDetail;
