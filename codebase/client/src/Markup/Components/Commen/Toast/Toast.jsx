import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = (message,success) =>{
	if(success){
	  return toast.success(message, {
		 position: "top-center",
		 autoClose: 3000,
		 hideProgressBar: false,
		 closeOnClick: false,
		 pauseOnHover: true,
		 draggable: true,
		 progress: undefined,
		 theme: "light",
		 transition: toast.Slide,
		 progress: 100
	  });
	}
	else{
	  return toast.error(message, {
		 position: "top-center",
		 autoClose: 3000,
		 hideProgressBar: false,
		 closeOnClick: false,
		 pauseOnHover: true,
		 draggable: true,
		 progress: undefined,
		 theme: "light",
		 transition: toast.Slide,
	  });
	}
 }

 
function Toast() {

  return (
    <>
      <ToastContainer
			position="top-center"
			autoClose={3000}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick={false}
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
			theme="light"
			/>
    </>
  );
}

export  {Toast,notify};
