import React from "react";
import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Project.css"; // Make sure to adjust the CSS file name

const Project = (props) => {
  const history = useNavigate();
  const {
    _id,
    projectId,
    projectName,
    projectManager,
    projectType,
    projectStartDate,
    projectEndDate,
    value,
    currency,
    customerId,
    domain,
    location,
    group,
    accountManager,
    projectCategory,
    projectDescription,
  } = props.project;

  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/projects/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/projects"));
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
      <p>Project ID: {projectId}</p>
      <p>Project Name: {projectName}</p>
      <p>Project Manager: {projectManager}</p>
      <p>Project Type: {projectType}</p>
      <p>Project Start Date: {projectStartDate}</p>
      <p>Project End Date: {projectEndDate}</p>
      <p>$ Value: {value}</p>
      <p>Currency: {currency}</p>
      <p>Customer ID: {customerId}</p>
      <p>Domain: {domain}</p>
      <p>Location: {location}</p>
      <p>Group: {group}</p>
      <p>Account Manager: {accountManager}</p>
      <p>Project Category: {projectCategory}</p>
      <p>Project Description: {projectDescription}</p>

      <Button
        LinkComponent={Link}
        to={`/projects/${_id}`}
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

export default Project;
