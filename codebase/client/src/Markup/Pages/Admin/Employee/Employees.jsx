import React, { useEffect, useState } from "react";
import AdminMenu from "../../../Components/Admin/AdminMenu/AdminMenu";
import EmployeeTable from "../../../Components/Commen/DataTable/EmployeeTable";
import axios from "../../../../Utility/axios";
import CustomeAlert from "../../../Components/Commen/Alerts/Alert";
import EmployeeService from "../../../../Service/Employee.service";
import BootstrapTable from "../../../Components/Commen/DataTable/BootstrapTable";
import { format } from "date-fns";
import { useAuth } from "../../../../Context/AuthContext";
import UnauthorizedPage from "../../UnauthorizedPage";
import Login from "../../Root/Login/Login";

function Employees() {
  const { isLogged, setIsLogged, employee, isAdmin } = useAuth();
  const [employees, setEmployees] = useState([]);
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
      const response = await EmployeeService.getAllEmployee();
      // console.log(response.data.data);
      setEmployees(response);
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
            <div className="mt-4">
              <h2 className="mb-3">Employee __</h2>
            </div>
            {
              <CustomeAlert
                type={displayMessage.type}
                message={displayMessage.message}
              />
            }
            <EmployeeTable
              className="m-0 p-0"
              data={employees}
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

export default Employees;
