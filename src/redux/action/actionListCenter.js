import axios from "axios";
import { FETCH_LISTCENTER } from "../constants/constants";
// import {Constants }  from "../constants/constants.js";

export const ListCenterAction = (values)=>async(dispatch)=>{
console.log(values,"action");
    await dispatch({
        type: FETCH_LISTCENTER.REQUEST,
        payload:{loading:true},
    });

        const options = {
            method: 'GET',
            headers: { "Authorization": `Bearer ${localStorage.getItem("accessToken")}` },
            data: values,
          };
      

    try{
        const { data }=await axios.get(`https://dev-api.playzeon.com/api/v1/centers?organizationId.equals=${values}`
         , options
        // ,values
        );
        await dispatch({
            type: FETCH_LISTCENTER.SUCCESS ,
            payload:{loading:false ,data:data },
        });
    }
    catch(error){
        await dispatch({
             type:FETCH_LISTCENTER.ERROR,
             payload:{loading :false, data:{}},

        });
        console.error('An error occured during login:', error);

    }

};


// The payload of an API is the data you are interested in transporting to the server when you make an API request.
// A type property to indicate the type of action to be carried out
// A payload object that contains the information that should be used to change the state
