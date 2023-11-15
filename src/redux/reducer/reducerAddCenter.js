import { FETCH_CENTER } from "../constants/constants";

const initialValues={
       addCenter : [],

};//api response data is stored in the initial value , add center is used to store data from the api 

export const addCenterReducer = (value = initialValues, action) => {
        switch (action?.type) {
                case FETCH_CENTER.REQUEST:
                    return { addCenter: action?.payload };
                    // the api is receiving the data and it is stored in the intialvalue of add center array
                case FETCH_CENTER.SUCCESS:
                    return { addCenter: action?.payload };
                case FETCH_CENTER.ERROR:
                    return {addCenter: action?.payload };
                default:
                    return value;
            }
        };

       