import React from 'react'
import AdminMenu from '../../../Components/Admin/AdminMenu//AdminMenu'
import AddCustomerForm from '../../../Components/Commen/Form/AddCustomerForm'
function AddCustomer() {
  return (
    <div className="container m-0 p-0">
        <div className="row">
          <div className="col-4">
          <AdminMenu  />
          </div>
          <div className="col-8 pt-4">
          <div className="form-column col-lg-7">
            <h2 className='pb-3'>Add new Customer __</h2>
				    <div className="inner-column">
					    <div className="contact-form">
                <div><AddCustomerForm /></div>
              </div>
              </div>
              </div>
          </div>
        </div>
    </div>  
  )
}

export default AddCustomer