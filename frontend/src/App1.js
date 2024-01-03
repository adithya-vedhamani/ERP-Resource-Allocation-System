import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import AddCustomer from "./components/AddCustomer";
import Customers from "./components/Customer/Customers";
import CustomerDetail from "./components/Customer/CustomerDetail";
import AddEmployee from "./components/AddEmployee";
import Employees from "./components/Employee/Employees";
import EmployeeDetail from "./components/Employee/EmployeeDetail";
import AddProject from "./components/AddProject";
import Projects from "./components/Project/Projects";
import ProjectDetail from "./components/Project/ProjectDetail";
import AddRole from "./components/AddRole";
import Roles from "./components/Role/Roles";
import RoleDetail from "./components/Role/RoleDetail";
import AddResource from "./components/AddResource";
import Resources from "./components/Resource/Resources";
import ResourceDetail from "./components/Resource/ResourceDetail";


function App1() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          
          <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<AddCustomer />} exact />
          <Route path="/customers" element={<Customers />} exact />
          <Route path="/customers/:id" element={<CustomerDetail />} exact />

          <Route path="/addEmployee" element={<AddEmployee />} exact />
          <Route path="/employees" element={<Employees />} exact />
          <Route path="/employees/:id" element={<EmployeeDetail />} exact />

          <Route path="/addProject" element={<AddProject />} exact />
          <Route path="/projects" element={<Projects />} exact />
          <Route path="/projects/:id" element={<ProjectDetail />} exact />

          <Route path="/addRole" element={<AddRole />} exact />
          <Route path="/roles" element={<Roles />} exact />
          <Route path="/roles/:id" element={<RoleDetail />} exact />

          <Route path="/addResource" element={<AddResource />} exact />
          <Route path="/resources" element={<Resources />} exact />
          <Route path="/resources/:id" element={<ResourceDetail />} exact />
       
         
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App1;
