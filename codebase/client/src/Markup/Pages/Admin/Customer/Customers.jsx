import React, { useEffect, useState } from 'react'
import AdminMenu from '../../../Components/Admin/AdminMenu/AdminMenu'
import axios from '../../../../Utility/axios';
import CustomerTable from '../../../Components/Commen/DataTable/CustomerTable';
import CustomerService from '../../../../Service/CustomerService';
import CustomeAlert from '../../../Components/Commen/Alerts/Alert';

function Customers() {
  const [customer,setCustomer] = useState([]);
  const [displayAlert,setDisplayAlert] = React.useState(false);
  const [displayMessage,setDisplayMessage] = React.useState({
    message: "",
    type : ""
  });
  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async ()=>{
    try {  
     const response = await CustomerService.getAllCustomers();
  // console.log(response);
     setCustomer(response);
     
    } catch (error) {
     console.log(error);
    }
 
   }

  return (
    <div className="container m-0 p-0">
    <div className="row">
      <div className="col-4">
      <AdminMenu  />
      </div>
      <div className="col-8">
      <div className="row">
          <h2 className='p-5 '>Customers __ </h2>
        </div>
        { <CustomeAlert type={displayMessage.type} message={displayMessage.message}  />}  
        <CustomerTable data={customer} fetchData={fetchData}  setDisplayAlert={setDisplayAlert} setDisplayMessage={setDisplayMessage} />
      </div>
    </div>
</div>  
  )
}

export default Customers