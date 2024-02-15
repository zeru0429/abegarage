import React from "react";
import AdminMenu from "../../../Components/Admin/AdminMenu/AdminMenu";
import EditCustomerForm from "../../../Components/Commen/Form/EditCustomerForm";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../../Context/AuthContext";
import UnauthorizedPage from "../../UnauthorizedPage";
import { Login } from "@mui/icons-material";

function EditCustomer() {
  const { isLogged, setIsLogged, employee, isAdmin, fetchData } = useAuth();
  const navigator = useNavigate();
  const location = useLocation();
  const { data } = location.state || {};

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
            <div className="inner-column">
              <div className="contact-form">
                <div>
                  <EditCustomerForm data={data} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default EditCustomer;
