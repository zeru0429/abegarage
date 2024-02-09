import React, { useEffect, useState } from 'react'
import AdminMenu from '../../../Components/Admin/AdminMenu/AdminMenu'
import {useNavigate,useLocation} from 'react-router-dom'
import EditEmployeeForm from '../../../Components/Commen/Form/EditEmployeeForm';
import EmployeeService from '../../../../Service/Employee.service';

function EditEmployees() {
  const navigator  = useNavigate();
  const location = useLocation();
  const { data } = location.state || {};
	// console.log(data);
  
  const [roles,setRoles] = useState([]);
  useEffect(()=>{
		fetchRole();
    // data.company_role_id(getRoleId(data.company_role_name));
	},[]);

  
	const fetchRole = async () => {
		const roles =  await EmployeeService.getRoles();
		setRoles(roles);
	}


  const getRoleId = (role)=>{
    roles.map((single)=>{
       if(single.company_role_name== role){
         // console.log(single.company_role_id)
          return single.company_role_id;
       }
    })
 }



  return (
    <div className="container m-0 p-0">
      <div className="row">
        <div className="col-4">
        <AdminMenu  />
        </div>
        <div className="col-8 mt-3">
        <div className="inner-column">
          <div className="contact-form sec-title style-two">
            <br />
            <h2 >Edit:</h2>
            <br />
            <p className="font-weight-bold">Empployee email: {data.email}</p>
            </div>
          
            <div className="contact-form">
            <div><EditEmployeeForm data={data} roles={roles} /></div>
            </div>
          </div>
        </div>
      </div>
   </div>  
  )
}

export default EditEmployees