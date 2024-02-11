import React, { useState } from 'react'
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import Avator from '../../Components/Commen/Avator/Avator'
import AddVehicleForm from '../../Components/Commen/Form/AddVehicleForm'
import AddEmployeeForm from '../Commen/Form/AddEmployeeForm';

function CustomerDetail() {
  const [popUp,setPopUp] = useState(true);

  const handleClick =()=>{
    console.log("kkk");
    // setPopUp(false);
  }



  return (
      <div className='pt-5 pb-5 pl-1 pr-5'>
        <div className="container p-4">
          <div className="row p-0 m-0">
            <div className="col-4"> 
                <Avator data="Info" />
            </div>
            <div className="col-8">
                <h5 className='pb-3'><b>Customer: Adugna Bekele</b></h5>
                <div><b>Email: </b> mihiretutigistu@gmail.com </div>
                <div><b>Phone: </b> 0949229226 </div>
                <div><b>Active Customer: </b> yes </div>
                <div><b>Edit Customer info: </b> <BorderColorOutlinedIcon  /> </div>
            </div>
          </div>
        </div>

        <div className="container p-4">
          <div className="row p-0 m-0">
            <div className="col-4"> 
                <Avator data="Cars" />
            </div>
            <div className="col-8">
                <h5 className='pb-3'><b>Vehicle for Adugna </b></h5>
                <input type="text" value="" placeholder='No vehicle found' /> <br /><br />
                <div className="theme-btn btn-style-one">ADD NEW VEHICLE</div>
            </div>
          </div>
        </div>

        <div className="container p-4">
            <div className="row">
              <div className="col-12">
                <button onClick={handleClick} className='float-right btn btn-danger'>X</button>
                <AddVehicleForm />
              </div>
            </div>
        </div>

        <div className="container p-4">
          <div className="row p-0 m-0">
            <div className="col-4"> 
                <Avator data="Orders" />
            </div>
            <div className="col-8">
                <h5 className='pb-3'><b>Order of Adugna</b></h5>
                <h6>Orders will be displayed here</h6>

            </div>
          </div>
        </div>
      </div>
  )
}

export default CustomerDetail