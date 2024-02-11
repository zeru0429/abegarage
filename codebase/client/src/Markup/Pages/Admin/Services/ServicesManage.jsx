import React, { useEffect, useState } from 'react';
import AdminMenu from '../../../Components/Admin/AdminMenu/AdminMenu';
import ServiceCard from '../../../Components/Services/ServiceCard';
import AddServiceForm from '../../../Components/Commen/Form/AddServiceForm';
import ServicesService from '../../../../Service/ServicesService';
import EditServiceForm from '../../../Components/Commen/Form/EditServicesForm';

function ServicesManage() {
  const [garageService, setGarageService] = useState([]);
  const [selectedService, setSelectedService] = useState({});
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const handlePopup = () => {
    setOpen(!open);
  };

  const fetchData = async () => {
    const response = await ServicesService.getAllService();
    console.log(response);
    setGarageService(response);
  };

  return (
    <div className="container m-0 p-0">
      <div className="row">
        <div className="col-4">
          <AdminMenu />
        </div>
        <div className="col-8 p-0">
          <div className="sec-title style-two">
            <h2>Services we provide</h2>
            <div className="text">
              Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.
            </div>
            {garageService && garageService.map((single) => (
              <ServiceCard
                setOpen={setOpen}
                open={open}
                setSelectedService={setSelectedService}
                key={single.service_id}
                fetchData={fetchData}
                data={single}
              />
            ))}
          </div>
          <AddServiceForm fetchData={fetchData} />
        </div>
      </div>
      {open && (
        <div className="popup">
          <div className="popup-content">
          <div className="btn btn-danger popup-close" onClick={()=>setOpen(!open)}>
          X
        </div>
            <EditServiceForm
              data={selectedService}
              setOpen={setOpen}
              open={open}
              fetchData={fetchData}
              setSelectedService={setSelectedService}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ServicesManage;