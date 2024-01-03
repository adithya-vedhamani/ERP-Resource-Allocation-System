import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormLabel,
  TextField,
} from "@mui/material";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

 const RoleDetail = () => {
  const [inputs, setInputs] = useState();
  const id = useParams().id;
  const history = useNavigate();

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/roles/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.role));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5000/roles/${id}`, {
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
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/roles"));
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
            <FormLabel>Role Id</FormLabel>
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
            <FormLabel>Role Description</FormLabel>
            <TextField
              value={inputs.roleDescription}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="roleDescription"
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
              Update Role
            </Button>
          </Box>
        </form>
      )}
    </div>
  );
};

export default RoleDetail;
