export default {
   insertOrder: `INSERT INTO orders (employee_id, customer_id, vehicle_id, order_date, active_order, order_hash) VALUES (?, ?, ?, now(), ?, ?);`,
   updateOrder: `UPDATE orders SET  customer_id=?, vehicle_id=?, active_order=?, WHERE order_id = ?;`,
   deleteOrder: `DELETE FROM orders WHERE order_id = ?;`,
   getOrderById: `SELECT * FROM orders WHERE order_id = ?;`,
   getAllOrders: `SELECT * FROM orders;`
};
