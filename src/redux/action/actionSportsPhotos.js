import axios from "axios";
import { FETCH_SPORTSPHOTOS } from "../constants/constants";
import {API_URL} from "../../constantsUrl/constantsUrl.js";
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
            headers: { "Authorization":`Bearer ${localStorage.getItem("accessToken")}` , "ngrok-skip-browser-warning": 53},
            data: values,
            url:`${API_URL}/api/v1/sport-photos`,
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