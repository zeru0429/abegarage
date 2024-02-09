import express from "express";
import employeeController from "../controller/employee.controller.js";
import {auth,isAdmin} from "../auth/auth.js";
const employeeRoute = express.Router();

employeeRoute.post("/api/employee", [auth,isAdmin], employeeController.createEmployee);
employeeRoute.put("/api/employee/:id",[auth,isAdmin], employeeController.updateEmployeeInfo);
employeeRoute.delete("/api/employee/:id",[auth,isAdmin], employeeController.deleteEmployeeInfo);
employeeRoute.get("/api/employees", employeeController.getEmployeeList);
employeeRoute.get("/api/employees/roles", employeeController.getEmployeeRoles);
export default employeeRoute;
