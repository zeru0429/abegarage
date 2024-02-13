export default {
   insertOrder: `INSERT INTO orders (employee_id, customer_id, vehicle_id, order_date, active_order, order_hash) VALUES (?, ?, ?, now(), ?, ?);`,
   updateOrder: `UPDATE orders SET  customer_id=?, vehicle_id=?, active_order=?, WHERE order_id = ?;`,
   deleteOrder: `DELETE FROM orders WHERE order_id = ?;`,
   getOrderById: `SELECT * FROM orders WHERE order_id = ?;`,
   getAllOrders: `SELECT o.order_id,
                cinfo.customer_first_name,
                cinfo.customer_last_name,
                cid.customer_email,
                cid.customer_phone_number,
                cvi.vehicle_model,
                cvi.vehicle_tag,
                cvi.vehicle_year,
                o.order_date,
                einfo.employee_first_name,
                einfo.employee_last_name,
                os.order_status
            FROM
                orders o
                INNER JOIN customer_identifier cid ON o.customer_id = cid.customer_id
                INNER JOIN customer_info cinfo ON o.customer_id = cinfo.customer_id
                INNER JOIN customer_vehicle_info cvi ON o.vehicle_id = cvi.vehicle_id
                INNER JOIN employee_info einfo ON o.employee_id = einfo.employee_id
                INNER JOIN order_status os ON o.order_id = os.order_id;`,
   insertOrderInfo: `INSERT INTO order_info (order_id, order_total_price, additional_request,additional_requests_completed) VALUES (?, ?, ?,?);`,
   insertOrderService: `INSERT INTO order_services (order_id, service_id,service_completed) VALUES (?, ?,?);`,
   insertOrderStatus: `INSERT INTO order_status (order_id, order_status) VALUES (?, ?);`,
   getSingleCustomerOrderById : `SELECT * FROM orders WHERE order_id = ?`
};
