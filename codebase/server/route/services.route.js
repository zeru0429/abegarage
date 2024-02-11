import express from "express";
import servicesController from "../controller/services.contoller.js";
const servicesRoute = express.Router();

servicesRoute.post("/api/services", servicesController.insertCommonService);
servicesRoute.put("/api/services/:id", servicesController.updateCommonService);
servicesRoute.delete("/api/services/:id", servicesController.deleteCommonService);
servicesRoute.get("/api/services/:id", servicesController.getCommonServiceById);
servicesRoute.get("/api/services", servicesController.getAllCommonServices);

export default servicesRoute;
