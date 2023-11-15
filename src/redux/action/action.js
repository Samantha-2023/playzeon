import axios from "axios";
import {Constants }  from "../constants/constants.js";

export const fetchLogin =({email,password})=> async (dispatch)=>{
  try{
    const response = await axios.post('https://dev-api.playzeon.com/api/user-management/login',{
        userName: email,
        password:password
    });
    console.log(email);
    console.log(password);
    
    if(response.status===200){
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);
        console.log('Login Successfully');
        // window.location.href ="/center"
    }
    else{
        console.error("Login failed try again ");
    }

  const{data} = response;

  dispatch({
    type:Constants.FETCH_LOGIN,
    payload:data,
  });

}
catch(error){
   console.error('An error occured during login:', error);
   }

};
export const fetchOrganization=({organization,fname,lname,phNumber,email,role})=>async(dispatch)=>{
    try{
        const response = await axios.post(' https://dev-api.playzeon.com/api/user-management/create/organization',{
            phoneNumber:phNumber,
            orgName:organization,
            firstName:fname,
            lastName:lname,
            email:email,
            role:role,
        });

        if(response.status===200){
 console.log('created partner');
    }  else{
        console.log("login failed");
    }

    const {data}= response;
    dispatch({
        type:Constants.FETCH_ORGANIZATION,
        payload:data,
    });
}catch(error){
    console.error('An error occured during login:', error);
}
};

 