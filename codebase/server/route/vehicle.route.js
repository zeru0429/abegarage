import express from "express";
import vehicleController from "../controller/vehicle.controller.js";
const vehicleRoute = express.Router();

vehicleRoute.post("/api/vehicles", vehicleController.createVehicle);
vehicleRoute.put("/api/vehicles/:id", vehicleController.updateVehicle);
vehicleRoute.delete("/api/vehicles/:id", vehicleController.deleteVehicle);
vehicleRoute.get("/api/vehicles/:id", vehicleController.getVehicleById);
vehicleRoute.get("/api/vehicles/customer/:id", vehicleController.getVehicleByCustomerId);
vehicleRoute.get("/api/vehicles", vehicleController.getAllVehicles);

export default vehicleRoute;
