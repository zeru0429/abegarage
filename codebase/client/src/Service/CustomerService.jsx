import axios from "../Utility/axios"
export default{
   register: async (data)=>{
      try {
         const response = await axios.post('api/customer', data);
         console.log(response.data)
         return{sucess: true, message: response.data.message}
      } catch (error) {
         console.log(error.response.data.message)
         return {sucess: false,message: error.response.data.message}
      }
   },
   updateCustomer: async (data,id)=>{
      try {
         const response = await axios.put(`api/customer/:${id}`,data);
         return{sucess: true, message: response.data.message}
      } catch (error) {
         console.log(error.response.data.message)
         return {sucess: false,message: error.response.data.message}
      }
   },

   getAllCustomers: async()=>{
      try {
         const response =  await axios.get('api/customer'); 
         return response.data.data;
      } catch (error) {
         console.log(error.response.data)
         return null;
      }
   }
   
}