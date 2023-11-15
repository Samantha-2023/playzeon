import { createAction } from "../../helpers";

export const Constants = {
    FETCH_LOGIN: "FETCH_LOGIN",
    FETCH_ORGANIZATION:"FETCH_ORGANIZATION",
    FETCH_CENTER:"FETCH_CENTER",
    FETCH_LISTCENTER:"FETCH_LISTCENTER",
    FETCH_ACCOUNT:"FETCH_ACCOUNT",
    };

export const  FETCH_CENTER= createAction('FETCH_CENTER');
export const  FETCH_LISTCENTER= createAction('FETCH_LISTCENTER');
export const  FETCH_ACCOUNT=createAction('FETCH_ACCOUNT');