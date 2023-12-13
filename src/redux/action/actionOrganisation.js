import axios from  "axios";
import { FETCH_ORGANIZATION } from "../constants/constants";
import {FETCH_ORGANIZATIONPUTDATA} from "../constants/constants";
import {API_URL} from "../../constantsUrl/constantsUrl.js";
import Swal from "sweetalert2";


export const OrganizationAction  = (values)=> async(dispatch)=>{
 
    await dispatch({
        type:FETCH_ORGANIZATION.REQUEST,
        payload:{loading:true},
    })


    const options= {
        method:"GET",
        headers:{"Authorization" : `Bearer ${localStorage.getItem("accessToken")}` , "ngrok-skip-browser-warning": 53},
        data:values,
    };
    console.log(values,"checkkk")

      try{
    const { data }=   await axios.get(`${API_URL}/api/v1/organizations/${values}`
         , options
        );


  await dispatch ({
    type: FETCH_ORGANIZATION.SUCCESS,
    payload:{loading:false,data:data},

  });
    }
    catch(error){
        await dispatch({
            type:FETCH_ORGANIZATION.ERROR,
            payload:{loading:false ,data:{}}
        });
        console.error('An error occured:', error);
    }
   };


  // /////////////// Datas to be put in the organisation form 


  export const OrganizationActionPutData  = (values)=> async(dispatch)=>{
 
    await dispatch({
        type:FETCH_ORGANIZATIONPUTDATA.REQUEST,
        payload:{loading:true},
    })


    const optionss= {
        method:"PUT",
        headers:{"Authorization" : `Bearer ${localStorage.getItem("accessToken")}`, "ngrok-skip-browser-warning": 53 },
        data:values,
        url:`${API_URL}/api/v1/organizations/${values?.id}`
    };
    console.log(values,"checkkkputdata")

      try{
              const { data }= await axios(optionss);    
             
              Swal.fire({
                icon: "success",
                title: "",
                text: "Organization has been updated successfully",
              });


  await dispatch ({
    type: FETCH_ORGANIZATIONPUTDATA.SUCCESS,
    payload:{loading:false,data:data},
  });
    }
    catch(error){
        await dispatch({
            type:FETCH_ORGANIZATIONPUTDATA.ERROR,
            payload:{loading:false ,data:{}}
        });
        console.error('An error occured :', error);
    }
   };

  //  put api for the data to be updated in the organization form 
  //  https://dev-api.playzeon.com/api/v1/centers?organizationId.equals=${values}