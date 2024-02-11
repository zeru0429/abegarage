import React from 'react'
import Table from 'react-bootstrap/Table';
import PanToolAltIcon from '@mui/icons-material/PanToolAlt';


function OrderStepTwo() {
  return (
    <Table striped bordered hover>
      <tbody>
        <tr>
         
          <td>Mark</td>
          <td>Otto</td>
          <td>marck@gmai.com</td>
          <td>0949229226</td>
          <td><PanToolAltIcon /></td>
        </tr>
        <tr>
      
          <td>Jacob</td>
          <td>Thornton</td>
          <td>kebe@fat.com</td>
          <td>0949229226</td>
          <td><PanToolAltIcon /></td>
        </tr>
        <tr>
       
        <td>Jacob</td>
        <td>Thornton</td>
        <td>kebe@fat.com</td>
        <td>0949229226</td>
        <td><PanToolAltIcon /></td>
        </tr>
        <tr>
     
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo.com</td>
          <td>0949229226</td>
          <td><PanToolAltIcon /></td>
        </tr>
      </tbody>
    </Table>
  )
}

export default OrderStepTwo