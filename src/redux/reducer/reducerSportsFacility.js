import {FETCH_SPORTS_PUT_FACILITY } from "../constants/constants";
import { FETCH_SPORTSPOSTFACILITY } from "../constants/constants";


const initialValues={
    sportsfacilitypostdata:[],
    sportsfacilityputdata:[],
};  

export const sportsFacilityReducer =(value =initialValues, action)=>{
    switch (action?.type) {
        case FETCH_SPORTS_PUT_FACILITY.REQUEST:
            return { sportsfacilityputdata:action?.payload };

         case FETCH_SPORTS_PUT_FACILITY.SUCCESS:
            return{sportsfacilityputdata:action?.payload};

         case FETCH_SPORTS_PUT_FACILITY.ERROR:
              return{sportsfacilityputdata:action?.payload};

 default:
    return value;

}
}


// post reducer 
export const sportsPostFacilityReducer =(value =initialValues, action)=>{
    switch (action?.type) {
        case FETCH_SPORTSPOSTFACILITY.REQUEST:
            return { sportsfacilitypostdata:action?.payload };

         case FETCH_SPORTSPOSTFACILITY.SUCCESS:
            return{sportsfacilitypostdata:action?.payload};

         case FETCH_SPORTSPOSTFACILITY.ERROR:
              return{sportsfacilitypostdata:action?.payload};

 default:
    return value;

}
}