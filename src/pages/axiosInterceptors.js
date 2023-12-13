import axios from "axios";
import { toast } from "react-toastify";


//not necessary const API_URL = 'https://fts-backend.onrender.com';
const API_URL = '';

// ////////////////

const REFRESH_TOKEN_URL = 'https://fts-backend.onrender.com/admin/refreshToken'; // Your refresh token endpoint

const axiosInstance = axios.create({
  baseURL: API_URL,
});

 //Function to refresh the token
async function refreshToken() {
  try {
    const refreshToken = localStorage.getItem('refreshToken');
    if (refreshToken) {
      const response = await axiosInstance.post(REFRESH_TOKEN_URL, { refreshToken });

      const newToken = response.data.token;
      localStorage.setItem('authToken', newToken);

      // Update the axiosInstance with the new token
      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;

      return newToken;
    }
  } catch (error) {
    // not necessary Handle refresh token error, e.g., redirect to login page
    throw error;
  }
}

// //////////////





// Add a request interceptor
axiosInstance.interceptors.request.use(async function (config) {  
        const token = localStorage.getItem('authToken');
         if(token){
          console.log("token",token);
            config.headers['Authorization']=`Bearer ${token}`;
         }
         return config;
    
  }, async function (error) {
    if(error.response && error.response.status === 401){
      //Token expired attempt to refresh it
      try{
        const newToken = await refreshToken();
        //retry the original request with the new token 
        error.config.headers['Authorization']= `Bearer ${newToken}`;
        return axiosInstance(error.config);
      } catch (refreshError) {
        // Handle refresh token error, e.g., redirect to login page
        throw refreshError;
      }
    }
    return Promise.reject(error);
  });
  
  


 // not necessary 
  const api = axios.create({
    baseURL:API_URL
  })
 // not necessary 

// Add a response interceptor
axiosInstance.interceptors.response.use(function (response) {
    switch (response?.status) {      
        case 200:
            // toast("Api Call Success");   
            console.log("Api call success");         
            break;
        default:
           return response;
    }
    return response;
  }, function (error) {
    toast.error("error")
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

export default axiosInstance

  