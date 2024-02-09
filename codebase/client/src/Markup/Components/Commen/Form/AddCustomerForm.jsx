import FormValidator from '../../../../Utility/FormValidator';
import CustomerService from '../../../../Service/CustomerService'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AddCustomerForm() {
  const [form, setForm] = useState({});
	const [errors, setErrors] = useState({});
  const navigator = useNavigate();

	const hadleSubmit = async (e) => {
		e.preventDefault();
    const formData = FormValidator.customerForm(form);
		const isValid = formData.isValid;
		if(!isValid){
			const errorData = formData.errors;
			console.log(errorData)
			setErrors(errorData)
			return;
		}
		else{
      setErrors({})
      const response = await CustomerService.register(form);
      if(!response.sucess){
        alert(response.message);
        setForm({})
        setErrors({})
        navigator('/admin/customers');
		}
		else{

		}

		}

	};

  return (
   <>
    <form onSubmit={hadleSubmit} id="contact-form">
      <div className="row clearfix">
        <div className="form-group col-md-12">
          <input
            type="email"
            name="customer_email"
            placeholder="Customer_Email"
            required
            onChange={(e) => {
              setForm({
                ...form,
                customer_email: e.target.value,
              });
            }}
          />
          {errors.customer_email && (
						<div className="validation-error" role="alert">
							{errors.customer_email}
						</div>
					)}
        </div>
        <div className="form-group col-md-12">
          <input
            type="text"
            name="customer_first_name"
            placeholder="customer First Name"
            required
            onChange={(e) => {
              setForm({
                ...form,
                customer_first_name: e.target.value,
              });
            }}
          />
             {errors.customer_first_name && (
						<div className="validation-error" role="alert">
							{errors.customer_first_name}
						</div>
					)}
        </div>
        <div className="form-group col-md-12">
          <input
            type="text"
            name="customer_last_name"
            placeholder="customer last  Name"
            required
            onChange={(e) => {
              setForm({
                ...form,
                customer_last_name: e.target.value,
              });
            }}
          />
             {errors.customer_last_name && (
						<div className="validation-error" role="alert">
							{errors.customer_last_name}
						</div>
					)}
        </div>
        <div className="form-group col-md-12">
          <input
            type="text"
            name="customer_phone_number"
            placeholder="customer_phone_number"
            required
            onChange={(e) => {
              setForm({
                ...form,
                customer_phone_number: e.target.value,
              });
            }}
          />
             {errors.customer_phone_number && (
						<div className="validation-error" role="alert">
							{errors.customer_phone_number}
						</div>
					)}
        </div>

        <div className="form-group col-md-12">
          <button
            className="theme-btn btn-style-one"
            type="submit"
            data-loading-text="Please wait..."
          >
            <span>Add Customer</span>
          </button>
        </div>
      </div>
    </form>
   </>
  )
}

export default AddCustomerForm