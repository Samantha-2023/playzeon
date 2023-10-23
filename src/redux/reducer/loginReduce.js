import {Constants} from "../constants/constants";

const initialState={
    login:[],
    partner:[],
};


export const offersListReduce= (state = initialState,{type,payload})=>{
    switch(type){
        case  Constants.FETCH_LOGIN:
            return {...state, login:payload};
            case  Constants.FETCH_ORGANISATION:
                return {...state, organization:payload};

                default:
                    return state;
    }
};