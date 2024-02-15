import React, { useEffect, useState } from "react";
import AdminMenu from "../../../Components/Admin/AdminMenu/AdminMenu";
import axios from "../../../../Utility/axios";
import CustomerTable from "../../../Components/Commen/DataTable/CustomerTable";
import CustomerService from "../../../../Service/CustomerService";
import CustomeAlert from "../../../Components/Commen/Alerts/Alert";
import UnauthorizedPage from "../../UnauthorizedPage";
import Login from "../../Root/Login/Login";
import { useAuth } from "../../../../Context/AuthContext";
import SearchIcon from "@mui/icons-material/Search";

function Customers() {
  const { isLogged, setIsLogged, employee, isAdmin } = useAuth();
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [customer, setCustomer] = useState([]);
  const [displayAlert, setDisplayAlert] = React.useState(false);
  const [displayMessage, setDisplayMessage] = React.useState({
    message: "",
    type: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await CustomerService.getAllCustomers();
      // console.log(response);
      setCustomer(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCustomerSearch = async () => {
    try {
      const response = await CustomerService.getAllCustomers();
      // console.log(response);
      setCustomer(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {!isLogged ? (
        <Login />
      ) : !isAdmin ? (
        <div className="row">
          <div className="col-4">
            <AdminMenu />
          </div>
          <UnauthorizedPage />
          
        </div>
      ) : (
        <div className="row">
          <div className="col-4">
            <AdminMenu />
          </div>
          <div className="col-8">
            <div className="row">
              <h2 className="p-5 ">Customers __ </h2>
            </div>
           
             
            {
              <CustomeAlert
                type={displayMessage.type}
                message={displayMessage.message}
              />
            }

            <CustomerTable
              data={customer}
              fetchData={fetchData}
              setDisplayAlert={setDisplayAlert}
              setDisplayMessage={setDisplayMessage}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Customers;
