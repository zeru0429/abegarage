import React from 'react'
import { Link } from "react-router-dom";

function AdminMenu() {
  return (
    <div className="bg-container">
    <div className="admin-container">
      <h4>
        <a href="/admin">ADMIN MENU</a>
      </h4>
      <div className="list-container">
        <ul className="admin-list">
          <li>
            <Link to="/admin">Dashbord</Link>
          </li>
          <li>
            <Link to="/admin/orders">Orders</Link>
          </li>
          <li>
            <Link to="/admin/order">New order</Link>
          </li>
          <li>
            <Link to="/admin/add-employee">Add employee</Link>
          </li>
          <li>
            <Link to="/admin/employees">Employee</Link>
          </li>
          <li>
            <Link to="/admin/add-customer">Add customer</Link>
          </li>
          <li>
            <Link to="/admin/customers">Customers</Link>
          </li>
          <li>
            <Link to="/admin/services">Servies</Link>
          </li>
        </ul>
        
      </div>
    </div>
  </div>
  )
}

export default AdminMenu