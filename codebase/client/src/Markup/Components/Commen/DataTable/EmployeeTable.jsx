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

import Slide from '@mui/material/Slide';
import axios from '../../../../Utility/axios';
import ConfirmationDialog from '../Dialog/ConfirmationDialog';
import EmployeeService from '../../../../Service/Employee.service';
import { format } from 'date-fns';



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor:theme.palette.common.black,
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

function createData(employee_id, active_employee,firstname, lastname,email, phone,added_date,company_role_name,company_role_id) {
  return { employee_id, active_employee,firstname, lastname,email, phone,added_date,company_role_name,company_role_id};
}


export default function EmployeeTable(props) {
  const [open, setOpen] = React.useState(false);
  const [selectedRow,setSelectedRow] = React.useState({});

  const handleDelete =async (id)=>{
    console.log(id);
    const response = await EmployeeService.deleteEmployee(id)
    console.log(response);
    alert(response.message);
      props.setDisplayAlert(true);
      console.log(response.sucess);
      if(response.sucess){
        props.setDisplayMessage({message: response.message,type:"success"});
      }else{
        props.setDisplayMessage({message: response.message, type:"error"});
      }
      props.fetchData();
      handleClose();
    }

    const handleClickOpen = (row) => {
      setSelectedRow(row);
      setOpen(true);
    };

    const handleClose = () => {
      props.setDisplayAlert(false);
      props.setDisplayMessage({});
      setOpen(false);
    };

    const rows = props.data.map((single) => {
      return createData(single.employee_id, single.active_employee,single.firstname, single.lastname,single.email, single.phone,single.added_date,single.company_role_name,single.company_role_id)
    
    });

  return (
    <>
      <Table sx={{ minWidth: 700 }} aria-label="customized table" className='m-0 p-0'>
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">Active</StyledTableCell>
            <StyledTableCell align="right">Firstname</StyledTableCell>
            <StyledTableCell align="right">Lastname</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Phone</StyledTableCell>
            <StyledTableCell align="right">Added date</StyledTableCell>
            <StyledTableCell align="right">Role</StyledTableCell>
            <StyledTableCell align="right">Edit / Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {rows.length==0 && <p className='center'>no record is found</p>}
          {rows &&  rows.map((row) =>{
            return<StyledTableRow key={row.employee_id}>
                      <StyledTableCell component="th" scope="row">
                        {row.active_employee? "Yes": "No"}
                      </StyledTableCell>
                      <StyledTableCell align="right">{row.firstname}</StyledTableCell>
                      <StyledTableCell align="right">{row.lastname}</StyledTableCell>
                      <StyledTableCell align="left">{row.email}</StyledTableCell>
                      <StyledTableCell align="right">{row.phone}</StyledTableCell>
                      <StyledTableCell align="left">{format(new Date(row.added_date),'MM-dd-yy')}</StyledTableCell>
                      <StyledTableCell align="right">{row.company_role_name}</StyledTableCell>    
                      <StyledTableCell className='container pr-3' >
                        <div className="row">
                          <div className="col-4 ">
                          <Link to="/admin/employee/edit/:id" state={{ data: row }}>
                            <EditIcon  />
                          </Link>
                          </div>
                          <div className="col-4">
                                <DeleteIcon onClick={()=>handleClickOpen(row)} />
                          </div>
                        </div>
                      </StyledTableCell>  
                </StyledTableRow>
          })}
        </TableBody>
        <ConfirmationDialog 
        message='Are you sure you want to delete?'
        open={open}
        firstName={selectedRow.firstname + " " + selectedRow.lastname}
        handleDelete={handleDelete}
        handleClose={handleClose}
        Transition={Transition}
        id={selectedRow.employee_id}
        />
      </Table>
    </>
  );
}