import { FETCH_COURT_GET } from "../constants/constants";

const initialValues={
      courtgetdisplay : [],

};//api response data is stored in the initial value , addfaciltydisplayPage  is used to store data from the api 

export const courtGetDisplayReducer = (value = initialValues, action) => {
        switch (action?.type) {
                case  FETCH_COURT_GET.REQUEST:
                    return {courtgetdisplay: action?.payload };
                    // the api is receiving the data and it is stored in the intialvalue of addfaciltydisplayPage array
                case  FETCH_COURT_GET.SUCCESS:
                    return {courtgetdisplay: action?.payload };
                case  FETCH_COURT_GET.ERROR:
                    return {courtgetdisplay: action?.payload };
                default:
                    return value;
            }
        };