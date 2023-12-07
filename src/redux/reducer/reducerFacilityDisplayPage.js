import { FETCH_FACILITYDISPLAYPAGE } from "../constants/constants";

const initialValues={
       addfaciltydisplayPage : [],

};//api response data is stored in the initial value , addfaciltydisplayPage  is used to store data from the api 

export const addFacilityDisplayPageReducer = (value = initialValues, action) => {
        switch (action?.type) {
                case FETCH_FACILITYDISPLAYPAGE.REQUEST:
                    return { addfaciltydisplayPage: action?.payload };
                    // the api is receiving the data and it is stored in the intialvalue of addfaciltydisplayPage array
                case FETCH_FACILITYDISPLAYPAGE.SUCCESS:
                    return { addfaciltydisplayPage: action?.payload };
                case FETCH_FACILITYDISPLAYPAGE.ERROR:
                    return {addfaciltydisplayPage: action?.payload };
                default:
                    return value;
            }
        };