import { FETCH_CENTER, FETCH_SPORTS_PHOTOS } from "../constants/constants";

const initialValues={
       addCenter : [],
       photos:[],

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



        export const photosAddCenterReducer = (value = initialValues, action) => {
            switch (action?.type) {
                    case FETCH_SPORTS_PHOTOS.REQUEST:
                        return { photos: action?.payload };
                        // the api is receiving the data and it is stored in the intialvalue of add center array
                    case FETCH_SPORTS_PHOTOS.SUCCESS:
                        return { photos: action?.payload };
                    case  FETCH_SPORTS_PHOTOS.ERROR:
                        return {photos: action?.payload };
                    default:
                        return value;
                }
            };        