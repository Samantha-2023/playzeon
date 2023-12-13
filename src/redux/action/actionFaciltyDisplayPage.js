import axios from "axios";
import {FETCH_FACILITYDISPLAYPAGE} from  "../constants/constants";
import{API_URL} from "../../constantsUrl/constantsUrl.js";

export  const FacilityDisplayPageAction  =(values)=> async(dispatch)=>{
    console.log(values,"getfacilitydisplaypage-dataa");

     await dispatch({
        type: FETCH_FACILITYDISPLAYPAGE.REQUEST,
        payload: {loading:true},
     });

     const options = {
        method: "GET",
        headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}`, "ngrok-skip-browser-warning": 53 },
        data: values,
        url: `${API_URL}/api/v1/facilities?centerId.equals=${values}`
     }

       try{
        const {data} = await axios (options);
        
        await dispatch({
            type:FETCH_FACILITYDISPLAYPAGE.SUCCESS,
            payload:{ loading: false ,   data: data},
        });

       }
       catch (error) {
		await dispatch({
			type: FETCH_FACILITYDISPLAYPAGE,
			payload: { loading: false, data: {} },
		});
		console.error("An error occured to dispaly the faciliy page:", error);
	}





}