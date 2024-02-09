import React from 'react'
import AdminMenu from '../../../Components/Admin/AdminMenu/AdminMenu'
import EditCustomerForm from '../../../Components/Commen/Form/EditCustomerForm'
import { useLocation, useNavigate } from 'react-router-dom';

function EditCustomer() {
  const navigator  = useNavigate();
  const location = useLocation();
  const { data } = location.state || {};

  return (
    <div className="container m-0 p-0">
    <div className="row">
      <div className="col-4">
      <AdminMenu  />
      </div>
      <div className="col-8 mt-3">
          <div className="inner-column">
            <div className="contact-form">
            <div><EditCustomerForm data={data} /></div>
            </div>
          </div>
      </div>
    </div>
</div>  
  )
}

export default EditCustomer