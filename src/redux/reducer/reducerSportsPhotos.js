import { FETCH_SPORTSPHOTOS} from "../constants/constants";

const initialValues={
       sportsphotos : [],
    //    data: [], 

};
//api response data is stored in the initial value , sportsphotos is used to store data from the api 

    export const sportsPhotosReducer = (value = initialValues, action) => {
        switch (action?.type) {
                case FETCH_SPORTSPHOTOS.REQUEST:
                    return { sportsphotos: action?.payload };
                    // the api is receiving the data and it is stored in the intialvalue of sportsphotos array
                case FETCH_SPORTSPHOTOS.SUCCESS:
                    return {sportsphotos: action?.payload };
                case FETCH_SPORTSPHOTOS.ERROR:
                    return {sportsphotos: action?.payload };
                default:
                    return value;
            }
        };

       