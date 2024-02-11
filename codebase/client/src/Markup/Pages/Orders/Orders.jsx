import React from 'react'
import AdminMenu from '../../Components/Admin/AdminMenu/AdminMenu'
import OrdersTable from '../../Components/Commen/DataTable/OrdersTable'
function Orders() {
  return (
    <div className="container m-0 p-0">
    <div className="row">
      <div className="col-4">
        <AdminMenu  />
      </div>
      <div className="col-8">
        <div className="sec-title style-two">
          <h2>Orders</h2>
         <OrdersTable />
        </div>
      </div>
    </div>
  </div> 
  )
}

export default Orders