import React from "react";
import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Resource.css"; // Ensure you have the appropriate CSS file for styling

const Resource = (props) => {
  const history = useNavigate();
  const {
    _id,
    resourceId,
    projectId,
    employeeId,
    assignmentStartDate,
    assignmentEndDate,
    role,
    billingStatus,
    allocationPercentage,
  } = props.resource;

  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/resources/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/resources"));
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
      <p>Resource ID: {resourceId}</p>
      <p>Project ID: {projectId}</p>
      <p>Employee ID: {employeeId}</p>
      <p>Assignment Start Date: {assignmentStartDate}</p>
      <p>Assignment End Date: {assignmentEndDate || "N/A"}</p>
      <p>Role: {role}</p>
      <p>Billing Status: {billingStatus}</p>
      <p>Allocation Percentage: {allocationPercentage}%</p>
      <Button
        component={Link}
        to={`/resources/${_id}`}
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

export default Resource;
