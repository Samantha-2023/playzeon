import { FETCH_FACILITYCOPY, FETCH_FACILITYCOPYGET } from "../constants/constants";

const initialValues={
       copyfacility : [],
       copygetfacility:[],

};//api  response data(if the api has succcessfuly loaded the data from the api should be stored in the initial values) is stored in the initial value , add center is used to store data from the api 

export const copyFacilityReducer = (value = initialValues, action) => {
        switch (action?.type) {
                case FETCH_FACILITYCOPY.REQUEST:
                    return { copyfacility: action?.payload };
                    // the api is receiving the data and it is stored in the intialvalue of add center array
                    //listCenter is the initialvaluesarray
                    // what input we give is payload 
                case FETCH_FACILITYCOPY.SUCCESS:
                    return { copyfacility: action?.payload };
                case FETCH_FACILITYCOPY.ERROR:
                    return {copyfacility: action?.payload };
                default:
                    return value;
            }
        };



        export const copyGetFacilityReducer = (value = initialValues, action) => {
            switch (action?.type) {
                    case FETCH_FACILITYCOPY.REQUEST:
                        return { copygetfacility: action?.payload };
                        // the api is receiving the data and it is stored in the intialvalue of add center array
                        //listCenter is the initialvaluesarray
                        // what input we give is payload 
                    case FETCH_FACILITYCOPY.SUCCESS:
                        return {copygetfacility: action?.payload };
                    case FETCH_FACILITYCOPY.ERROR:
                        return {copygetfacility: action?.payload };
                    default:
                        return value;
                }
            };