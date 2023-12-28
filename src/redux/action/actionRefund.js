import axios from "axios";
import {FETCH_REFUND_FILTER_GET } from "../constants/constants";
import {API_URL  } from "../../constantsUrl/constantsUrl.js";

// import {Constants }  from "../constants/constants.js";

export const RefundsFilterAction = (values) => async (dispatch) => {
	console.log(values, "action");
		await dispatch({
		type: FETCH_REFUND_FILTER_GET.REQUEST,
		payload: { loading: true },
	});

	try {
		const options = {
			method: "GET",
			headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}`, "ngrok-skip-browser-warning": 53 },
			// url: `${API_URL}/api/v1/facility/${values}`,
            url:`${API_URL}//api/v1/refunds?ascending=true&pageNo=0&pageSize=10&sortByReservationDate=true&refundStatus.greaterThan=0&centerId.equals=${values}`,
		};

        // facility id should pass above url 
		const { data } = await axios(options);

		// localStorage.setItem("account", JSON.stringify(data));

		await dispatch({
			type:FETCH_REFUND_FILTER_GET.SUCCESS,
			payload: { loading: false, data: data },
		});
	} catch (error) {
		await dispatch({
			type: FETCH_REFUND_FILTER_GET.ERROR,
			payload: { loading: false, data: {} },
		});
		console.error("An error occured during get api:", error);
	}
};



// /api/v1/refunds?ascending=true&pageNo=0&pageSize=10&sortByReservationDate=true&refundStatus.greaterThan=0&centerId.equals=5601