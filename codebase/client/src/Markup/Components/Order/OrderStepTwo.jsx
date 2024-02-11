import React from 'react'
import Table from 'react-bootstrap/Table';
import PanToolAltIcon from '@mui/icons-material/PanToolAlt';


function OrderStepTwo({customers,setSelectedCustomer}) {
  return (
    <Table striped bordered hover>
      <tbody>
        {customers.length==0 && <p className='text pl-5'>no customer found</p>}
        {customers && customers.map((single)=>{
          return <tr key={single.customer_id}>
                    <td>{single.customer_first_name}</td>
                    <td>{single.customer_last_name}</td>
                    <td>{single.customer_email}</td>
                    <td>{single.customer_phone_number}</td>
                    <td><PanToolAltIcon onClick={()=>setSelectedCustomer(single)} /></td>
                  </tr>
        })}
      
      </tbody>
    </Table>
  )
}

export default OrderStepTwo