import { FETCH_ACCOUNT} from "../constants/constants";

const initialValues={
       account : [],

};//api response data is stored in the initial value , account  is used to store data from the api 

export const accountReducer = (value = initialValues, action) => {
        switch (action?.type) {
                case FETCH_ACCOUNT.REQUEST:
                    return { account: action?.payload };
                    // the api is receiving the data and it is stored in the intialvalue of account array
                case FETCH_ACCOUNT.SUCCESS:
                    return {account: action?.payload };
                case FETCH_ACCOUNT.ERROR:
                    return {account: action?.payload };
                default:
                    return value;
            }
        };

       