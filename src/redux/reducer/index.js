import { combineReducers } from "redux";
import {offersListReduce}  from "./loginReduce";
import { addCenterReducer } from "./reducerAddCenter";
import { listCenterReducer } from "./reducerListCenter";
import { accountReducer } from "./reducerAccount";

const reducers = combineReducers({
    offersListData:offersListReduce,
    addCenterData:addCenterReducer,
    listCenterData:listCenterReducer,
    accountdata:accountReducer,

});

export default reducers;