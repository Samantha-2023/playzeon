import { FETCH_RESERVATION_FACILITY_TYPE_GET } from "../constants/constants";

const initialValues={
      reservationfacilitytype : [],

};//api response data is stored in the initial value , reservationfacilitytype  is used to store data from the api 

export const reservationFacilityTypeReducer = (value = initialValues, action) => {
        switch (action?.type) {
                case  FETCH_RESERVATION_FACILITY_TYPE_GET.REQUEST:
                    return {reservationfacilitytype: action?.payload };
                    // the api is receiving the data and it is stored in the intialvalue of addfaciltydisplayPage array
                case FETCH_RESERVATION_FACILITY_TYPE_GET.SUCCESS:
                    return {reservationfacilitytype: action?.payload };
                case FETCH_RESERVATION_FACILITY_TYPE_GET.ERROR:
                    return {reservationfacilitytype: action?.payload };
                default:
                    return value;
            }
        };