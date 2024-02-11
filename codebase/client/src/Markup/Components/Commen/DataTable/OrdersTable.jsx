import React from 'react'

import {format} from 'date-fns'
import {useAuth} from '../../../../Context/AuthContext'
import {Table,Button} from 'react-bootstrap'

function OrdersTable({data}) {
  console.log(data);
  return (
    <>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Order Id</th>
          <th>Customer</th>
          <th>Vehicle</th>
          <th>Order Date</th>
          <th>Recived By</th>
          <th>Order status</th>
          <th>View/Edite</th>
          
        </tr>
      </thead>
      <tbody>
          <tr>

                <td>{"34"}</td>
                <td>
                  Adugna Bekele <br />
                  adugna45@gmail.com <br />
                  098798765456
                  </td>
                <td>
                  BMW 07 <br />
                  2020 <br />
                  4844fgg
                  
                  </td>
                <td>
                  31/12/2023
                </td>
                <td>
                  Tewedaj Shola
                </td>
                <td className='primary'>
                  completed
                  </td> 
                <td>Edite/Delete</td>
            </tr>
      </tbody>
    </Table>

    </>
  )
}

export default OrdersTable



/*

 {!data && <p className='center'>no record is found</p>} 
 {data && data.map((single)=>{
  return <tr>
          <td>{single.orderId==0? "NO": "Yes"}</td>
          <td>{single.customer}</td>
          <td>{single.Vehicle}</td>
          <td>{format(new Date(single.orderDate),'MM-dd-yy | kk:mm')}</td>
          <td>{single.recivedBy}</td>
          <td>{single.orderStatus}</td> 
          <td>Edite/Delete</td>
       </tr>
 })}


*/