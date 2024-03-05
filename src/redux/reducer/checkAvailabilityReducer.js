import {FETCH_CHECK_AVAILABILITY_ACTION } from "../constants/constants";

const initialValues={
    checkavailabilityinitial : [],

};//api response data is stored in the initial value , allfacilitylistreservation  is used to store data from the api 
// allfacilitylistreservation is used for all sports api 

export const checkAvailabilityReducer = (value = initialValues, action) => {
        switch (action?.type) {
                case  FETCH_CHECK_AVAILABILITY_ACTION.REQUEST:
                    return {checkavailabilityinitial: action?.payload };
                    // the api is receiving the data and it is stored in the intialvalue of addfaciltydisplayPage array
                case FETCH_CHECK_AVAILABILITY_ACTION.SUCCESS:
                    return {checkavailabilityinitial: action?.payload };
                case FETCH_CHECK_AVAILABILITY_ACTION.ERROR:
                    return {checkavailabilityinitial: action?.payload };
                default:
                    return value;
            }
        };