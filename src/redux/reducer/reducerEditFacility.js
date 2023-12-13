import { FETCH_FACILITY_EDIT_GET } from "../constants/constants";

const initialValues={
       editgetfacility:[],

}
export const editFacilityReducer = (value = initialValues, action) => {
        switch (action?.type) {
                case  FETCH_FACILITY_EDIT_GET.REQUEST:
                    return { editgetfacility: action?.payload };
                    // the api is receiving the data and it is stored in the intialvalue of add center array
                    //listCenter is the initialvaluesarray
                    // what input we give is payload 
                case  FETCH_FACILITY_EDIT_GET.SUCCESS:
                    return {editgetfacility: action?.payload };
                case  FETCH_FACILITY_EDIT_GET.ERROR:
                    return {editgetfacility: action?.payload };
                default:
                    return value;
            }
        };



   