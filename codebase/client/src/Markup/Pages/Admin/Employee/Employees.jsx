import React, { useEffect, useState } from 'react'
import AdminMenu from '../../../Components/Admin/AdminMenu/AdminMenu'
import EmployeeTable from '../../../Components/Commen/DataTable/EmployeeTable'
import axios from '../../../../Utility/axios';
import CustomeAlert from '../../../Components/Commen/Alerts/Alert';
import EmployeeService from '../../../../Service/Employee.service';
import BootstrapTable from '../../../Components/Commen/DataTable/BootstrapTable'

function Employees() {
  const [employee,setEmployee] = useState([]);
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
    const response = await EmployeeService. getAllEmployee();
   // console.log(response.data.data);
    setEmployee(response);
    
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
      <div className="col-8 m-0 p-0">
        <div className="">
          <h2 className='pt-5 pl-5'>Employee </h2>
        </div>
    {/* { <CustomeAlert type={displayMessage.type} message={displayMessage.message} />}    */}
      {/* <EmployeeTable  
        className='m-0 p-0' 
        data={employee} 
        fetchData={fetchData} 
        setDisplayAlert={setDisplayAlert}
        setDisplayMessage={setDisplayMessage}
        /> */}
        <BootstrapTable  data={employee}  />
      </div>
    </div>
</div>  
  )
}

export default Employees