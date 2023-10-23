import { combineReducers } from "redux";
import {offersListReduce}  from "./loginReduce";
const reducers = combineReducers({
    offersListData:offersListReduce,
});

export default reducers;