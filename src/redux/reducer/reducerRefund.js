import { FETCH_REFUND_FILTER_GET } from "../constants/constants";

const initialValues={
      refundfilterget : [],

};//api response data is stored in the initial value , refundfilterget  is used to store data from the api 

export const RefundsFilterGetReducer = (value = initialValues, action) => {
        switch (action?.type) {
                case  FETCH_REFUND_FILTER_GET.REQUEST:
                    return {refundfilterget: action?.payload };
                    // the api is receiving the data and it is stored in the intialvalue of refundfilterget array
                case  FETCH_REFUND_FILTER_GET.SUCCESS:
                    return {refundfilterget: action?.payload };
                case FETCH_REFUND_FILTER_GET.ERROR:
                    return {refundfilterget:action?.payload };
                default:
                    return value;
            }
        };