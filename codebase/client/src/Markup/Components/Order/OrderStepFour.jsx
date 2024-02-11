import React from 'react'
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'
import { Checkbox } from '@mui/material';
import AdditionalRequestForm from '../Commen/Form/AdditionalRequestForm';

function OrderStepFour() {
  return (
   <div>
      <div className="container m-2 p-2" style={{backgroundColor: 'white'}}>
          <div className="row">
          <div className="col-10 p-4">
              <h5 className='pb-3'>
                <b>Adugna Bekele</b>
              </h5>
              <div>
                <b>Email: </b> <spna className='text'> mihiretutigistu@gmail.com</spna>
              </div>
              <div>
                <b>Phone: </b> <spna className='text'>0949229226</spna>
              </div>
              <div>
                <b>Active Customer: </b><spna className='text'> yes</spna>
              </div>
              <div>
                <b>Edit Customer info: </b> <BorderColorOutlinedIcon  className='danger' /> 
              </div>
          </div>
          <div className="col-1 center m-0 mt-5 " >
            <div className="btn btn-danger">X</div>
          </div>
          </div>
        </div> 
      
        <div className="container m-2 p-2" style={{backgroundColor: 'white'}}>
          <div className="row">
          <div className="col-10 p-4">
              <h5 className='pb-3'>
                <b>BMW X7</b>
              </h5>
              <div>
                <b>Vehicle color : </b> <spna className='text'>Golden</spna>
              </div>
              <div>
                <b>Vehicle tag: </b> <spna className='text'> 0101AD</spna>
              </div>
              <div>
                <b>Vehicle year : </b> <spna className='text'> 2020</spna>
              </div>
              <div>
                <b>Vehicle mileage : </b> <spna className='text'>1200 </spna>
              </div>
              <div>
                <b>Vehicle serial: </b> <spna className='text'>49229226</spna>
              </div>
              
              <div>
                <b>Edit Customer info: </b> <BorderColorOutlinedIcon  className='danger' /> 
              </div>
          </div>
          <div className="col-1 center m-0 mt-5 " >
            <div className="btn btn-danger">X</div>
          </div>
          </div>
        </div> 
        
        <div className="conatainer m-2 p-2" style={{background: 'white'}} >
        <div className="row  m-0 p-0">
            <div className="col-12">
              <h5><b>Oil change</b></h5>
            </div>
          </div>
          <div className="row m-0 p-0">
              <div className="col-10">
                <p className='text'>every 5000 kilometer or so, you need to change the oil in your car to keep your engine in the best possible shap.</p>
              </div>
              <div className="col-1">
              <Checkbox />
              </div>
            </div>
        </div>

        <div className="conatainer m-2 p-2" style={{background: 'white'}} >
          <div className="row  m-0 p-0">
              <div className="col-12">
                <h5><b>Oil change</b></h5>
              </div>
            </div>
          <div className="row m-0 p-0">
              <div className="col-10">
                <p className='text'>every 5000 kilometer or so, you need to change the oil in your car to keep your engine in the best possible shap.</p>
              </div>
              <div className="col-1">
              <Checkbox />
              </div>
            </div>
        </div>

        <div className="conatainer m-2 p-2" style={{background: 'white'}} >
          <div className="row  m-0 p-0">
              <div className="col-12">
                <h5><b>Oil change</b></h5>
              </div>
            </div>
          <div className="row m-0 p-0">
              <div className="col-10">
                <p className='text'>every 5000 kilometer or so, you need to change the oil in your car to keep your engine in the best possible shap.</p>
              </div>
              <div className="col-1">
              <Checkbox />
              </div>
            </div>
        </div>

        
        <div className="container mt-5 mb-5 p-5" style={{background: 'white'}} >

          <AdditionalRequestForm />

        </div>



   </div>
  )
}

export default OrderStepFour