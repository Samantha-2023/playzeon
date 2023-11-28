import axios from "axios";
import { FETCH_SPORTSPHOTOS } from "../constants/constants";
// import {Constants }  from "../constants/constants.js";

export const SportsPhotosAction = (values)=>async(dispatch)=>{
console.log(values,"action");
    await dispatch({
        type: FETCH_SPORTSPHOTOS.REQUEST,
        payload:{loading:true},
    });

    try{
        const options = {
            method: 'GET',
            headers: { "Authorization":`Bearer ${localStorage.getItem("accessToken")} `},
            data: values,
            url:"https://dev-api.playzeon.com/api/v1/sport-photos",
          };

        const { data }=await axios(options);
        //data any name  data is a variable ... we are using this instead of . then  respone --promise
        await dispatch({
            type: FETCH_SPORTSPHOTOS.SUCCESS ,
            payload:{loading:false ,data:data },
        });
    }
    catch(error){
        await dispatch({
             type:FETCH_SPORTSPHOTOS.ERROR,
             payload:{loading :false, data:{}},

        });
        console.error('An error occured during login:', error);

    }

};