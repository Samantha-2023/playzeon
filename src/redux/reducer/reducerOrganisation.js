import { FETCH_ORGANIZATION } from "../constants/constants";
import { FETCH_ORGANIZATIONPUTDATA } from "../constants/constants";

const initialValues={
        organisationdata:[],
    };
const initialValuesPut={
    organisationputdata:[],
}    



export const organisationDataReducer =(value =initialValues, action)=>{
    switch (action?.type) {
        case FETCH_ORGANIZATION.REQUEST:
            return { organisationdata: action?.payload };
            // organisationdata is the initial values specified above 

         case FETCH_ORGANIZATION.SUCCESS:
            return{organisationdata:action?.payload};

         case FETCH_ORGANIZATION.ERROR:
              return{organisationdata:action?.payload};

 default:
    return value;

}
}


// REDUCER FOR PUT organisation data 
export const organisationPutDataReducer =(value =initialValuesPut, action)=>{
    switch (action?.type) {
        case FETCH_ORGANIZATIONPUTDATA.REQUEST:
            return { organisationputdata: action?.payload };

         case FETCH_ORGANIZATIONPUTDATA.SUCCESS:
            return{organisationputdata:action?.payload};

         case FETCH_ORGANIZATIONPUTDATA.ERROR:
              return{organisationputdata:action?.payload};

 default:
    return value;

}
}