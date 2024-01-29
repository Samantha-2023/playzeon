import { FETCH_GET_LIST_RESERVATION } from "../constants/constants";

const initialValues={
      listreservationinitial : [],

};//api response data is stored in the initial value , reservationfacilitytype  is used to store data from the api 

export const listReservationReducer = (value = initialValues, action) => {
        switch (action?.type) {
                case FETCH_GET_LIST_RESERVATION.REQUEST:
                    return { listreservationinitial: action?.payload };
                    // the api is receiving the data and it is stored in the intialvalue of listreservationinitial  array
                case FETCH_GET_LIST_RESERVATION.SUCCESS:
                    return { listreservationinitial: action?.payload };
                case FETCH_GET_LIST_RESERVATION.ERROR:
                    return { listreservationinitial: action?.payload };
                default:
                    return value;
            }
        };