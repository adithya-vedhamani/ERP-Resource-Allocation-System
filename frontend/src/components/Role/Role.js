import React from "react";
import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Role.css";

const Role = (props) => {
  const history = useNavigate();
  const {
    _id,
    roleId,
    role,
    rateCard,
    currency,
    experience,
    location,
    onOff,
    unit,
    roleDescription,
    skill,
  } = props.role;

  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/roles/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/roles"));
  };

  const buttonStyles = {
    updateButton: {
      mt: "auto",
    },
    deleteButton: {
      mt: "auto",
      color: "error",
    },
  };

  return (
    <div className="card">
      <p>Role ID: {roleId}</p>
      <h3>Role: {role}</h3>
      <p>Rate Card: {rateCard}</p>
      <p>Currency: {currency}</p>
      <p>Experience: {experience}</p>
      <p>Location: {location}</p>
      <p>OnOff: {onOff}</p>
      <p>Unit: {unit}</p>
      <p>Role Description: {roleDescription}</p>
      <p>Skill: {skill}</p>
      <Button
        LinkComponent={Link}
        to={`/roles/${_id}`}
        sx={{ ...buttonStyles.updateButton }}
      >
        Update
      </Button>
      <Button
        color="error"
        onClick={deleteHandler}
        sx={{ ...buttonStyles.deleteButton }}
      >
        Delete
      </Button>
    </div>
  );
};

export default Role;
