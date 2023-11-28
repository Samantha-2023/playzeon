import axios from  "axios";
import { FETCH_ORGANIZATION } from "../constants/constants";
import {FETCH_ORGANIZATIONPUTDATA} from "../constants/constants";

export const OrganizationAction  = (values)=> async(dispatch)=>{
 
    await dispatch({
        type:FETCH_ORGANIZATION.REQUEST,
        payload:{loading:true},
    })


    const options= {
        method:"GET",
        headers:{"Authorization" : `Bearer ${localStorage.getItem("accessToken")}` },
        data:values,
    };
    console.log(values,"checkkk")

      try{
    const { data }=   await axios.get(`https://dev-api.playzeon.com/api/v1/organizations/${values}`
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
        headers:{"Authorization" : `Bearer ${localStorage.getItem("accessToken")}` },
        data:values,
    };
    console.log(values,"checkkkputdata")

      try{
    const { data }= await axios.put(`https://dev-api.playzeon.com/api/v1/organizations/${values}`, optionss);    
  

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