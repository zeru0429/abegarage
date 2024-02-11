import React, { useState } from 'react'

function AdditionalRequestForm() {
   const [form, setForm] = useState({});
   const [errors, setErrors] = useState({});

   const hadleSubmit = async (e) => {
		e.preventDefault();
      console.log(form);

   }

  return (
   <div className="container">
   <div className="sec-title style-two m-2">
       <h2>Additional request</h2>
      <div className="contact-form">
         <form onSubmit={hadleSubmit} id="contact-form">
            <div className="row clearfix">
            <div className="form-group col-md-12">
                  <textarea
                     name="serviceDescription"
                     placeholder="Service Description"
                     required
                     onChange={(e) => {
                        setForm({
                           ...form,
                           serviceDescription: e.target.value,
                        });
                     }}
                  ></textarea>
                  {errors.serviceDescription && (
                     <div className="validation-error" role="alert">
                        {errors.serviceDescription}
                     </div>
                  )}
               </div>

               <div className="form-group col-md-12">
                  <input
                     type="text"
                     name="price"
                     placeholder="Price"
                     required
                     onChange={(e) => {
                        setForm({
                           ...form,
                           price: e.target.value,
                        });
                     }}
                  />
                  {errors.price && (
                     <div className="validation-error" role="alert">
                        {errors.price}
                     </div>
                  )}
               </div>
               <div className="form-group col-md-12">
               <button
                  className="theme-btn btn-style-one"
                  type="submit"
               
                  data-loading-text="Please wait..."
               >
                  <span>Add Service</span>
               </button>
               </div>

            </div>
         </form>
      </div>
   </div>
</div>
  )
}

export default AdditionalRequestForm