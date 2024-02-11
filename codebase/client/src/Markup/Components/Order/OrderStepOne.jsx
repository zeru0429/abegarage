import React, { useState } from 'react'
import { Form } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import OrderStepTwo from './OrderStepTwo';
function OrderStepOne() {
  const navigator = useNavigate();
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const hadleSubmit = async (e) => {
		e.preventDefault();

		console.log(form) 
  
  }

  return (
    <> 
    <div className="contact-form">
          <div className="row clearfix">
            <div className="form-group col-md-12">
              <input
                  type="text"
                  name="userInput"
                  placeholder="Search for customer using first name,last name, email address or phone number"
                  required
                  onChange={(e) => {
                    setForm({
                        ...form,
                        userInput: e.target.value,
                    });
                  }}
              />
              <span id='searchIcon' >
										<SearchIcon />
							</span>

              {errors.userInput && (
                  <div className="validation-error" role="alert">
                    {errors.userInput}
                  </div>
              )}
            </div>
            <div className="form-group col-md-12">
                <OrderStepTwo />
            </div>
          
            <div className="form-group col-md-12">
              <button
                className="theme-btn btn-style-one"
                onClick={()=>{navigator('/admin/add-customer')}}
                data-loading-text="Please wait..."
              >
                <span>Add New Customer</span>
              </button>
            </div>
          </div>                 
    </div>
    </>
  )
}

export default OrderStepOne