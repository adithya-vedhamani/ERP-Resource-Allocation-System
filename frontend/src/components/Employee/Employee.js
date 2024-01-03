import React from "react";
import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Employee.css"; // Make sure to adjust the CSS file name

const Employee = (props) => {
  const history = useNavigate();
  const {
    _id,
    employeeId,
    employeeName,
    band,
    subdBand,
    level,
    rm,
    city,
    country,
    region,
    dateOfJoining,
    group,
    rex,
    tex,
    skill,
  } = props.employee;

  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/employees/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/employees"));
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
      <p>Employee ID: {employeeId}</p>
      <p>Employee Name: {employeeName}</p>
      <p>Level {level}</p>
      <p>Band: {band}</p>
      <p>Subd Band: {subdBand}</p>
      <p>RM: {rm}</p>
      <p>Location: {city}, {country}</p>
      <p>Region: {region}</p>
      <p>Date of Joining: {dateOfJoining}</p>
      <p>Group: {group}</p>
      <p>REx: {rex}</p>
      <p>TEx: {tex}</p>
      <p>Skill: {skill}</p>
      <Button
        LinkComponent={Link}
        to={`/employees/${_id}`}
        sx={{ ...buttonStyles.updateButton }}
      >
        Update
      </Button>
      <Button
        onClick={deleteHandler}
        sx={{ ...buttonStyles.deleteButton }}
      >
        Delete
      </Button>
    </div>
  );
};

export default Employee;
