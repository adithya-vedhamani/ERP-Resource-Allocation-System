import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
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
import AddRas from "./components/AddRas";
import Rass from "./components/Ras/Rass";
import RasDetail from "./components/Ras/RasDetail";

function App() {
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
  
        
          <Route path="/addRas" element={<AddRas />} exact />
         <Route path="/rass" element={<Rass />} exact />
         <Route path="/rass/:id" element={<RasDetail />} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
