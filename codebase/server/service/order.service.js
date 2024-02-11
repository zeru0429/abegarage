import { query } from "../config/pool.js";
import orderQuery from "../query/order.query.js";

const orderService = {
    insertOrder: async (data) => {
        try {
            const row = await query(orderQuery.insertOrder, [
                data.employee_id,
                data.customer_id,
                data.vehicle_id,
                data.active_order,
                data.order_hash
            ]);
            return row;
        } catch (error) {
            console.log(error);
            throw new Error("Error inserting order");
        }
    },

    updateOrder: async (data, id) => {
        try {
            const row = await query(orderQuery.updateOrder, [
                data.customer_id,
                data.vehicle_id,
                data.active_order,
                id
            ]);
            return row;
        } catch (error) {
            console.log(error);
            throw new Error("Error updating order");
        }
    },

    deleteOrder: async (id) => {
        try {
            const row = await query(orderQuery.deleteOrder, [id]);
            return row;
        } catch (error) {
            console.log(error);
            throw new Error("Error deleting order");
        }
    },

    getOrderById: async (id) => {
        try {
            const rows = await query(orderQuery.getOrderById, [id]);
            return rows;
        } catch (error) {
            console.log(error);
            throw new Error("Error getting order by ID");
        }
    },

    getAllOrders: async () => {
        try {
            const rows = await query(orderQuery.getAllOrders);
            return rows;
        } catch (error) {
            console.log(error);
            throw new Error("Error getting all orders");
        }
    }
};

export default orderService;
