import React from "react";
import AdminMenu from "../../../Components/Admin/AdminMenu/AdminMenu";
import AddEmployeeForm from "../../../Components/Commen/Form/AddEmployeeForm";
import { useAuth } from "../../../../Context/AuthContext";
import Login from "../../Root/Login/Login";
import UnauthorizedPage from "../../UnauthorizedPage";

function AddEmployees() {
  const { isLogged, setIsLogged, employee, isAdmin, fetchData } = useAuth();
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
              <h2 className="mb-3">Add new Employee __</h2>
              <div className="form-column col-lg-7">
                <div className="inner-column">
                  <AddEmployeeForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AddEmployees;
