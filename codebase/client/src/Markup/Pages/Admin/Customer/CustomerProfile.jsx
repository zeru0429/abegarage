import React from "react";
import AdminMenu from "../../../Components/Admin/AdminMenu/AdminMenu";
import CustomerDetail from "../../../Components/Customer/CustomerDetail";
import UnauthorizedPage from "../../UnauthorizedPage";
import Login from "../../Root/Login/Login";

function CustomerProfile() {
  const {
    isLogged,
    setIsLogged,
    employee,
    isAdmin,
    fetchData,
    isManager,
    setIsManager,
  } = useAuth();

  return (
    <>
      {!isLogged ? (
        <Login />
      ) :  (!isAdmin && !isManager) ? (
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
            <CustomerDetail />
          </div>
        </div>
      )}
    </>
  );
}

export default CustomerProfile;
