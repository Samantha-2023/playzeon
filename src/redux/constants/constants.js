import { createAction } from "../../helpers";

export const Constants = {
    FETCH_LOGIN: "FETCH_LOGIN",
    FETCH_ORGANIZATION:"FETCH_ORGANIZATION",
    FETCH_CENTER:"FETCH_CENTER",
    FETCH_LISTCENTER:"FETCH_LISTCENTER",
    FETCH_ACCOUNT:"FETCH_ACCOUNT",
    FETCH_ORGANIZATIONPUTDATA:" FETCH_ORGANIZATIONPUTDATA",
    FETCH_SPORTSPHOTOS:"FETCH_SPORTSPHOTOS",
    FETCH_SPORTSFACILITY:"FETCH_SPORTSFACILITY",
    FETCH_SPORTSPOSTFACILITY:"FETCH_SPORTSPOSTFACILITY",
    FETCH_FACILITYDISPLAYPAGE:"FETCH_FACILITYDISPLAYPAGE",
    FETCH_FACILITYCOPY:"FETCH_FACILITYCOPY",
    FETCH_FACILITYCOPYGET:"FETCH_FACILITYCOPYGET",
    FETCH_FACILITYDELETE:"FETCH_FACILITYDELETE",
    FETCH_FACILITYDELETEGET:"FETCH_FACILITYDELETEGET",
    };

export const  FETCH_CENTER= createAction("FETCH_CENTER");
export const  FETCH_LISTCENTER= createAction("FETCH_LISTCENTER");
export const  FETCH_ACCOUNT=createAction("FETCH_ACCOUNT");
export const  FETCH_ORGANIZATION=createAction("FETCH_ORGANIZATION");
export const FETCH_ORGANIZATIONPUTDATA=createAction("FETCH_ORGANIZATIONPUTDATA");
export const FETCH_SPORTSPHOTOS=createAction("FETCH_SPORTSPHOTOS");
export const FETCH_SPORTSFACILITY=createAction("FETCH_SPORTSFACILITY");
export const FETCH_SPORTSPOSTFACILITY=createAction("FETCH_SPORTSPOSTFACILITY");
export const FETCH_FACILITYDISPLAYPAGE=createAction("FETCH_FACILITYDISPLAYPAGE");
export const FETCH_FACILITYCOPY=createAction("FETCH_FACILITYCOPY");
export const FETCH_FACILITYCOPYGET=createAction("FETCH_FACILITYCOPYGET");
export const FETCH_FACILITYDELETE=createAction("FETCH_FACILITYDELETE");
export const FETCH_FACILITYDELETEGET=createAction("FETCH_FACILITYDELETEGET");

