import {FETCH_PRICING_RULE_ACTION } from "../constants/constants";

const initialValues={
    pricingRuleInitial : [],

};//api response data is stored in the initial value , allfacilitylistreservation  is used to store data from the api 
// allfacilitylistreservation is used for all sports api 

export const pricingRuleReducer = (value = initialValues, action) => {
        switch (action?.type) {
                case  FETCH_PRICING_RULE_ACTION.REQUEST:
                    return {pricingRuleInitial: action?.payload };
                    // the api is receiving the data and it is stored in the intialvalue of addfaciltydisplayPage array
                case FETCH_PRICING_RULE_ACTION.SUCCESS:
                    return {pricingRuleInitial: action?.payload };
                case FETCH_PRICING_RULE_ACTION.ERROR:
                    return {pricingRuleInitial: action?.payload };
                default:
                    return value;
            }
        };