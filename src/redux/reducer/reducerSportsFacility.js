import { FETCH_SPORTSFACILITY } from "../constants/constants";
import { FETCH_SPORTSPOSTFACILITY } from "../constants/constants";


const initialValues={
    sportsfacilitypostdata:[],
    sportsfacilityputdata:[],
};  

export const sportsFacilityReducer =(value =initialValues, action)=>{
    switch (action?.type) {
        case FETCH_SPORTSFACILITY.REQUEST:
            return { sportsfacilityputdata:action?.payload };

         case FETCH_SPORTSFACILITY.SUCCESS:
            return{sportsfacilityputdata:action?.payload};

         case FETCH_SPORTSFACILITY.ERROR:
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