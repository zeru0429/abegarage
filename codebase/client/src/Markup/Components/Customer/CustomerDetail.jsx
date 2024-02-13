import React, { useEffect, useState } from 'react'
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import Avator from '../../Components/Commen/Avator/Avator'
import AddVehicleForm from '../../Components/Commen/Form/AddVehicleForm'
import AddEmployeeForm from '../Commen/Form/AddEmployeeForm';
import { Link } from 'react-router-dom';
import VehicleService from '../../../Service/VehicleService';
import { Table } from '@mui/material';
import PanToolAltIcon from '@mui/icons-material/PanToolAlt';
import OrderService from '../../../Service/OrderService';



function CustomerDetail({data}) {
  const [popUp,setPopUp] = useState(true);
  const [showVehicleFom,setVehicleForm] = useState(false);
  const [vehicle,setVehicles] = useState([]);
  const [orders,setOrders] = useState([]);


  const handleClick =()=>{
    console.log("kkk");
    // setPopUp(false);
  }

  const handleClickVehicleForm = () =>{
    setVehicleForm(true);

  }

  useEffect(() => {
    handleVehicleSearch();
    handleOrderSearch();

  }, []);

  const  handleVehicleSearch = async () => {
    if(data !==null){
    const response = await VehicleService.getSingleCustomerVehicle(data.customer_id);
    console.log(response);
    setVehicles(response);
    
    }
    //console.log(singleVehicle);
  }

  const handleOrderSearch = async () => {
    if(data !==null){
    const response = await OrderService.getSingleCustomerOrder(data.customer_id);
    console.log(response);
    setOrders(response);
    
    }
    //console.log(singleVehicle);
  }


  return (
      <div className='pt-5 pb-5 pl-1 pr-5'>
        <h1>kkkk</h1>
        <div className="container p-4">
          <div className="row p-0 m-0">
            <div className="col-4"> 
                <Avator data="Info" />
            </div>
            <div className="col-8">
                <h5 className='pb-3'><b>Customer: {data.firstName} {data.lastName}</b></h5>
                <div><b>Email: </b> {data.email} </div>
                <div><b>Phone: </b>{data.phoneNumber} </div>
                <div><b>Active Customer: </b>{data.active== 0 ? "No" : "Yes"} </div>
                <div><b>Edit Customer info: </b> 
                    <Link to="/admin/customer/edit/:id" state={{ data: data }}>
                      <BorderColorOutlinedIcon  />
                  </Link> </div>
            </div>
          </div>
        </div>



       {vehicle && vehicle.map((singleVehicle)=>{console.log(singleVehicle);
        return <div className="container p-4">
        <div className="row p-0 m-0">
          <div className="col-4"> 
              <Avator data="Car" />
          </div>
          <div className="col-8">
              <h5 className='pb-3'><b>Vehicle for: {data.firstName} </b></h5>
                <div>
                  <b>Vehicle color : </b> <span className='text'>{singleVehicle.vehicle_color}</span>
                </div>
                <div>
                  <b>Vehicle tag: </b> <span className='text'> {singleVehicle.vehicle_tag}</span>
                </div>
                <div>
                  <b>Vehicle year : </b> <span className='text'> {singleVehicle.vehicle_year}</span>
                </div>
                <div>
                  <b>Vehicle mileage : </b> <span className='text'>{singleVehicle.vehicle_mileage} </span>
                </div>
                <div>
                  <b>Vehicle serial: </b> <span className='text'>{singleVehicle.vehicle_serial}</span>
                </div>
                <div><b>Edit Customer info: </b> 
                <Link to="/admin/customer/edit/:id" state={{ data: singleVehicle}}>
                  <BorderColorOutlinedIcon  />
              </Link> </div>
          </div>
        </div>
        </div>
       })}

       {vehicle.length==0 &&  <div className="container p-4">
          <div className="row p-0 m-0">
            <div className="col-4"> 
                <Avator data="Cars" />
            </div>
            <div className="col-8">
                <h5 className='pb-3'><b>Vehicle for {data.firstName} {data.lastName} </b></h5>
                <input type="text" value="" placeholder='No vehicle found' /> <br /><br />
                <div className="theme-btn btn-style-one" onClick={handleClickVehicleForm}>ADD NEW VEHICLE</div>
            </div>
          </div>
        </div>}

      {showVehicleFom &&  <div className="container p-4">
            <div className="row">
              <div className="col-12">
                <button onClick={handleClick} className='float-right btn btn-danger'>X</button>
                <AddVehicleForm data={data} />
              </div>
            </div>
        </div>
      }
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