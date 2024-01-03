import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import axios from "axios";

const customersURL = "http://localhost:5000/customers";
const employeesURL = "http://localhost:5000/employees";
const rolesURL = "http://localhost:5000/roles";
const projectsURL = "http://localhost:5000/projects";

const fetchData = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    return [];
  }
};

const Home = () => {
  const [customerCount, setCustomerCount] = useState(0);
  const [employeeCount, setEmployeeCount] = useState(0);
  const [roleCount, setRoleCount] = useState(0);
  const [projectCount, setProjectCount] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      const customerData = await fetchData(customersURL);
      const employeeData = await fetchData(employeesURL);
      const roleData = await fetchData(rolesURL);
      const projectData = await fetchData(projectsURL);

      setCustomerCount(customerData.customers.length);
      setEmployeeCount(employeeData.employees.length);
      setRoleCount(roleData.roles.length);
      setProjectCount(projectData.projects.length);
    };

    fetchCounts();
  }, []);

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
   
        <div className="widgets">
          <Widget type="customer" count={customerCount} />
          <Widget type="employee" count={employeeCount} />
          <Widget type="role" count={roleCount} />
          <Widget type="project" count={projectCount} />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months Stock" aspect={2 / 1} />
        </div>
      </div>
    </div>
  );
};

export default Home;
