import React from 'react'
import AdminMenu from '../../Components/Admin/AdminMenu/AdminMenu'
import OrderStepOne from '../../Components/Order/OrderStepOne'
import OrderStepTwo from '../../Components/Order/OrderStepTwo'
import OrderStepThree from '../../Components/Order/OrderStepThree'
import OrderStepFour from '../../Components/Order/OrderStepFour'
function AddOrder() {
  return (
    <div className="container m-0 p-0">
    <div className="row">
      <div className="col-4">
      <AdminMenu  />
      </div>
      <div className="col-8 pt-4">
      <div className="sec-title style-two">
        <h2 className='p-3'>Create new Order</h2>
      </div>
        <OrderStepOne />
        <OrderStepThree />
        <OrderStepFour />
      </div>
    </div>
  </div> 
  )
}

export default AddOrder