import {FETCH_PRICING_COST_ACTION } from "../constants/constants";

const initialValues={
    pricingCostInitial : [],

};//api response data is stored in the initial value , allfacilitylistreservation  is used to store data from the api 
// allfacilitylistreservation is used for all sports api 

export const pricingCostReducer = (value = initialValues, action) => {
        switch (action?.type) {
                case FETCH_PRICING_COST_ACTION.REQUEST:
                    return {pricingCostInitial: action?.payload };
                    // the api is receiving the data and it is stored in the intialvalue of pricingCostInitial  array
                case FETCH_PRICING_COST_ACTION.SUCCESS:
                    return {pricingCostInitial: action?.payload };
                case FETCH_PRICING_COST_ACTION.ERROR:
                    return {pricingCostInitial: action?.payload };
                default:
                    return value;
            }
        };