const express = require("express");
const erouter = express.Router();
const Employee = require("../model/Employee");
const employeesController = require("../controllers/employees-controller");

erouter.get("/", employeesController.getAllEmployees);
erouter.post("/", employeesController.addEmployee);
erouter.get("/:id", employeesController.getEmployeeById);
erouter.put("/:id", employeesController.updateEmployee);
erouter.delete("/:id", employeesController.deleteEmployee);

module.exports = erouter;
