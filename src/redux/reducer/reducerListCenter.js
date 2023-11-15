import { FETCH_LISTCENTER } from "../constants/constants";

const initialValues={
       listCenter : [],

};//api response data is stored in the initial value , add center is used to store data from the api 

export const listCenterReducer = (value = initialValues, action) => {
        switch (action?.type) {
                case FETCH_LISTCENTER.REQUEST:
                    return { listCenter: action?.payload };
                    // the api is receiving the data and it is stored in the intialvalue of add center array
                    //listCenter is the initialvaluesarray
                case FETCH_LISTCENTER.SUCCESS:
                    return { listCenter: action?.payload };
                case FETCH_LISTCENTER.ERROR:
                    return {listCenter: action?.payload };
                default:
                    return value;
            }
        };

       