import express from "express";
import orderController from "../controller/order.controller.js";

const orderRoute = express.Router();

orderRoute.post("/api/order", orderController.createOrder);
orderRoute.put("/api/orders/:id", orderController.updateOrder);
orderRoute.delete("/api/orders/:id", orderController.deleteOrder);
orderRoute.get("/api/orders/:id", orderController.getOrderById);
orderRoute.get("/api/orders", orderController.getAllOrders);

export default orderRoute;
