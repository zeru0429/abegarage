import React from 'react'
import AdminMenu from '../../../Components/Admin/AdminMenu/AdminMenu'
import CustomerDetail from '../../../Components/Customer/CustomerDetail'
import { useLocation } from 'react-router-dom';

function AddVehicle() {
  const location = useLocation();
  const { data } = location.state || {};
  console.log(data);
  return (
    <div className="container m-0 p-0">
      <div className="row">
        <div className="col-4">
        <AdminMenu  />
        </div>
        <div className="col-8">
        <CustomerDetail data={data}/>
        </div>
      </div>
    </div> 
  )
}

export default AddVehicle