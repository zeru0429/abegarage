import express from "express";
import customerController from "../controller/customer.controller.js";
const customerRoute = express.Router();

customerRoute.post("/api/customer", customerController.createCustomer);
customerRoute.put("/api/customer/:id", customerController.updateCustomer);
customerRoute.delete("/api/customer/:id", customerController.deleteCustomer);
customerRoute.get("/api/customer", customerController.allcustomer);
customerRoute.get("/api/customer/:userInput", customerController.seachCustomer);

// customerRoute.delete("/api/customer/:customerId", customerController.deleteCustomer);

export default customerRoute;
