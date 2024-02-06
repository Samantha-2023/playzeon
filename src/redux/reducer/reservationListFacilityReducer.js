import { FETCH_RESERVATION_GET_LIST_FACILITY } from "../constants/constants";

//this reducer is  for facilities list  for the choosen sports .
const initialValues={
      reservationlistfacility : [],

};//api response data is stored in the initial value , reservationfacilitytype  is used to store data from the api 

export const reservationFacilitylistReducer = (value = initialValues, action) => {
        switch (action?.type) {
                case  FETCH_RESERVATION_GET_LIST_FACILITY.REQUEST:
                    return {reservationlistfacility: action?.payload };
                    // the api is receiving the data and it is stored in the intialvalue of addfaciltydisplayPage array
                case FETCH_RESERVATION_GET_LIST_FACILITY.SUCCESS:
                    return {reservationlistfacility: action?.payload };
                case FETCH_RESERVATION_GET_LIST_FACILITY.ERROR:
                    return {reservationlistfacility: action?.payload };
                default:
                    return value;
            }
        };