const Employee = require("../model/Employee");

const getAllEmployees = async (req, res, next) => {
  try {
    const employees = await Employee.find();
    if (!employees || employees.length === 0) {
      return res.status(404).json({ message: "No employees found" });
    }
    return res.status(200).json({ employees });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const getEmployeeById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const employee = await Employee.findById(id);
    if (!employee) {
      return res.status(404).json({ message: "No employee found" });
    }
    return res.status(200).json({ employee });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const addEmployee = async (req, res, next) => {
  const {
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
  } = req.body;
  try {
    const employee = new Employee({
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
    });
    await employee.save();
    return res.status(201).json({ employee });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Unable to add employee" });
  }
};

const updateEmployee = async (req, res, next) => {
  const id = req.params.id;
  const {
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
  } = req.body;
  try {
    let employee = await Employee.findByIdAndUpdate(id, {
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
    });
    if (!employee) {
      return res.status(404).json({ message: "Unable to update. Employee not found" });
    }
    employee = await employee.save();
    return res.status(200).json({ employee });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteEmployee = async (req, res, next) => {
  const id = req.params.id;
  try {
    const employee = await Employee.findByIdAndDelete(id);
    if (!employee) {
      return res.status(404).json({ message: "Unable to delete. Employee not found" });
    }
    return res.status(200).json({ message: "Employee successfully deleted" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  getAllEmployees,
  addEmployee,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
};
