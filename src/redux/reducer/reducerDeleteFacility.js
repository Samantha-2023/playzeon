import { FETCH_FACILITYDELETE, FETCH_FACILITYDELETEGET } from "../constants/constants";

const initialValues={
       deletefacility : [],
      deletegetfacility:[],

};//api  response data(if the api has succcessfuly loaded the data from the api should be stored in the initial values) is stored in the initial value , add center is used to store data from the api 

export const deleteFacilityReducer = (value = initialValues, action) => {
        switch (action?.type) {
                case FETCH_FACILITYDELETE.REQUEST:
                    return {deletefacility: action?.payload };
                    // the api is receiving the data and it is stored in the intialvalue of deletefacility array
                    //deletefacility, deletegetfacility, is the initialvaluesarray
                    // what input we give is payload 
                case FETCH_FACILITYDELETE.SUCCESS:
                    return { deletefacility: action?.payload };
                case FETCH_FACILITYDELETE.ERROR:
                    return {deletefacility: action?.payload };
                default:
                    return value;
            }
        };

        ///////////////Delete get facility  reducer//////////////////////


        export const deleteGetFacilityReducer = (value = initialValues, action) => {
            switch (action?.type) {
                    case FETCH_FACILITYDELETEGET .REQUEST:
                        return {deletegetfacility: action?.payload };
                        // the api is receiving the data and it is stored in the intialvalue of add center array
                        //listCenter is the initialvaluesarray
                        // what input we give is payload 
                    case FETCH_FACILITYDELETEGET .SUCCESS:
                        return {deletegetfacility: action?.payload };
                    case FETCH_FACILITYDELETEGET.ERROR:
                        return {deletegetfacility: action?.payload };
                    default:
                        return value;
                }
            };