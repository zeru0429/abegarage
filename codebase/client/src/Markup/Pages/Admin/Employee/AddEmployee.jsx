import React from 'react'
import AdminMenu from '../../../Components/Admin/AdminMenu/AdminMenu'
import AddEmployeeForm from '../../../Components/Commen/Form/AddEmployeeForm'



function AddEmployees() {


  return (
    <div className="container m-0 p-0">
    <div className="row">
      <div className="col-4">
      <AdminMenu  />
      </div>
      <div className="col-8">
      <div className='mt-4'>
        <h2 className='mb-3'>Add new Employee __</h2>
      <div className="form-column col-lg-7">
				<div className="inner-column">
        <AddEmployeeForm />
        </div>
        </div>

        </div>
      </div>
    </div>
</div>  
  )
}

export default AddEmployees