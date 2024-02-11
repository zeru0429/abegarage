import React from 'react'
import AdminMenu from '../../../Components/Admin/AdminMenu/AdminMenu'
import CustomerDetail from '../../../Components/Customer/CustomerDetail'

function AddVehicle() {
  return (
    <div className="container m-0 p-0">
      <div className="row">
        <div className="col-4">
        <AdminMenu  />
        </div>
        <div className="col-8">
        <CustomerDetail />
        </div>
      </div>
    </div> 
  )
}

export default AddVehicle