import { FETCH_ALL_FACILITIES_LIST_RESERVATION } from "../constants/constants";

const initialValues={
      allfacilitylistreservation : [],

};//api response data is stored in the initial value , allfacilitylistreservation  is used to store data from the api 
// allfacilitylistreservation is used for all sports api 

export const allFacilitylistReducer = (value = initialValues, action) => {
        switch (action?.type) {
                case  FETCH_ALL_FACILITIES_LIST_RESERVATION.REQUEST:
                    return {allfacilitylistreservation: action?.payload };
                    // the api is receiving the data and it is stored in the intialvalue of addfaciltydisplayPage array
                case FETCH_ALL_FACILITIES_LIST_RESERVATION.SUCCESS:
                    return {allfacilitylistreservation: action?.payload };
                case FETCH_ALL_FACILITIES_LIST_RESERVATION.ERROR:
                    return {allfacilitylistreservation: action?.payload };
                default:
                    return value;
            }
        };