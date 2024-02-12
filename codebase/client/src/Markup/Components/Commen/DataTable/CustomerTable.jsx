import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import ConfirmationDialog from '../Dialog/ConfirmationDialog';
import { Slide } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import  CustomerService from '../../../../Service/CustomerService'
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 1,
  },
}));

function createData(customer_id, active, firstName, lastName, email, phoneNumber, addedDate) {
  return { customer_id, active, firstName, lastName, email, phoneNumber, addedDate };
}

export default function CustomerTable(props) {
  const [open, setOpen] = React.useState(false);
  const [selectedRow,setSelectedRow] = React.useState({});
  
  const handleClose = () => {
    setOpen(false);
    props.setDisplayAlert(false);
    props.setDisplayMessage({});
 
  };
  const handleClickOpen = (row) => {
    //console.log(row)
    setSelectedRow(row);
    setOpen(true);
  };

  const handleDelete =async (id)=>{
    const response = await CustomerService.deleteCustomer(id)
    // console.log(response);
     alert(response.message);
      props.setDisplayAlert(true);

      if(response.success){
        props.setDisplayMessage({message: response.message,type:"success"});
      }else{
        props.setDisplayMessage({message: response.message, type:"error"});
      }
      props.fetchData();
      handleClose();
    }


  const rows = props.data.map((single) => {
    return createData(
      single.customer_id,
      single.active,
      single.firstName,
      single.lastName,
      single.email,
      single.phoneNumber,
      single.addedDate
    );s
  });

  return (
    <Table sx={{ minWidth: 800 }} aria-label="customized table" className="m-0 p-0">
      <TableHead>
        <TableRow>
          <StyledTableCell align="right">Active</StyledTableCell>
          <StyledTableCell align="right">First Name</StyledTableCell>
          <StyledTableCell align="right">Last Name</StyledTableCell>
          <StyledTableCell align="right">Email</StyledTableCell>
          <StyledTableCell align="right">Phone Number</StyledTableCell>
          <StyledTableCell align="right">Added Date</StyledTableCell>
          <StyledTableCell align="right">Edit / Delete</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.length==0 && <p className='center'>no record is found</p>}
        {rows && rows.map((row) => (
          <StyledTableRow key={row.customer_id}>
            <StyledTableCell component="th" scope="row">
              {row.active ? "Yes": "No"}
            </StyledTableCell>
            <StyledTableCell align="right">{row.firstName}</StyledTableCell>
            <StyledTableCell align="right">{row.lastName}</StyledTableCell>
            <StyledTableCell align="right">{row.email}</StyledTableCell>
            <StyledTableCell align="right">{row.phoneNumber}</StyledTableCell>
            <StyledTableCell align="right">{row.addedDate}</StyledTableCell>
           
            <StyledTableCell className="container pr-3">
              <div className="row">
                <div className="col-4">
                  <Link to="/admin/customer/edit/:id" state={{ data: row }}>
                    <EditIcon />
                  </Link>
                </div>
                <div className="col-4">
               
                    <DeleteIcon onClick={()=>handleClickOpen(row)} />
                  
                </div> 
                <Link to= '/admin/customer/{customerId}' state={{ data: row }}>
                   <InfoIcon  />
                </Link>
               
              </div>
            </StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
      <ConfirmationDialog 
        message='Are you sure you want to delete?'
        open={open}
        firstName={selectedRow.firstName + " " + selectedRow.lastName}
        handleDelete={handleDelete}
        handleClose={handleClose}
        Transition={Transition}
        id={selectedRow.customer_id}
        />

    </Table>
  );
}