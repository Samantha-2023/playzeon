import { combineReducers } from "redux";
import {offersListReduce}  from "./loginReduce";
import { addCenterReducer, photosAddCenterReducer } from "./reducerAddCenter";
import { listCenterReducer } from "./reducerListCenter";
import { accountReducer } from "./reducerAccount";
import { organisationDataReducer, organisationPutDataReducer } from "./reducerOrganisation";
import { sportsPhotosReducer } from "./reducerSportsPhotos";
import { sportsFacilityReducer, sportsPostFacilityReducer } from "./reducerSportsFacility";
import { addFacilityDisplayPageReducer } from "./reducerFacilityDisplayPage";
import { copyFacilityReducer, copyGetFacilityReducer } from "./reducerCopyFacility";
import { deleteFacilityReducer, deleteGetFacilityReducer } from "./reducerDeleteFacility";
import { editFacilityReducer } from "./reducerEditFacility";
import { courtGetDisplayReducer } from "./reducerCourtGet";
import { RefundsFilterGetReducer } from "./reducerRefund";
import { reservationFacilityTypeReducer } from "./reservationReducer";
import { reservationFacilitylistReducer } from "./reservationListFacilityReducer";
import { listReservationReducer } from "./listReservationReducer";
import { allFacilitylistReducer } from "./allFacilitiesListReducer";


const reducers = combineReducers({
    offersListData:offersListReduce,
    // offersListData is our own name : offersListReduce is the reducer function name
    addCenterData:addCenterReducer,
    listCenterData:listCenterReducer,
    accountdata:accountReducer,
    organisationDataaa:organisationDataReducer,
    organisationPutDataaa:organisationPutDataReducer,
    sportsPhotosGetData: sportsPhotosReducer,
    sportsFacilityData: sportsFacilityReducer,
    sportsFacilityPostdata:sportsPostFacilityReducer,
    facilityDisplayPageData: addFacilityDisplayPageReducer,
    copyFacilityData:copyFacilityReducer,
    copyGetFacilityData:copyGetFacilityReducer,
    deleteFacilityData:deleteFacilityReducer,
    deleteGetFacilityData:deleteGetFacilityReducer,
    editGetFacilityData:editFacilityReducer,
    photosData:photosAddCenterReducer,
    courtGetData:courtGetDisplayReducer,
    refundsFilterGetData:RefundsFilterGetReducer,
    reservationfacilitytypeget:reservationFacilityTypeReducer,
    reservationfacilitylist: reservationFacilitylistReducer,
    getlistreservation:listReservationReducer,
    AllListApiFacility:allFacilitylistReducer,
});

export default reducers;

