import React from 'react'
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import Table from 'react-bootstrap/Table';
import PanToolAltIcon from '@mui/icons-material/PanToolAlt';


function OrderStepThree() {
  return (
    <>
   
    <div className="container mb-2" style={{backgroundColor: 'white'}}>
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

    <div className="container mt-2" style={{backgroundColor: 'white'}}>
      <div className="row pt-5" >
          <div className="col-12">
            <h5 className='pb-3'>
                <b>Choose Vehicle d</b>
            </h5>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Mark</th>
                  <th>Model</th>
                  <th>Tag</th>
                  <th>Serial</th>
                  <th>Color</th>
                  <th>Mileage</th>
                  <th>Choose</th>
                </tr>
              </thead>
            
              <tbody>
                <tr>
                  <td>2000</td>
                  <td>BMW</td>
                  <td>X7</td>
                  <td>0101AD</td>
                  <td>49229226</td>
                  <td>Golden</td>
                  <td>12000</td>
                  <td><PanToolAltIcon /></td>
                </tr>
                <tr>
                  <td>2000</td>
                  <td>BMW</td>
                  <td>X7</td>
                  <td>0101AD</td>
                  <td>49229226</td>
                  <td>Golden</td>
                  <td>12000</td>
                  <td><PanToolAltIcon /></td>
                </tr>
                <tr>
                  <td>2000</td>
                  <td>BMW</td>
                  <td>X7</td>
                  <td>0101AD</td>
                  <td>49229226</td>
                  <td>Golden</td>
                  <td>12000</td>
                  <td><PanToolAltIcon /></td>
                </tr>
                <tr>
                  <td>2000</td>
                  <td>BMW</td>
                  <td>X7</td>
                  <td>0101AD</td>
                  <td>49229226</td>
                  <td>Golden</td>
                  <td>12000</td>
                  <td><PanToolAltIcon /></td>
                </tr>       
              </tbody>
            </Table>
          </div>
        </div>
    </div>
    
    </>
  )
}

export default OrderStepThree