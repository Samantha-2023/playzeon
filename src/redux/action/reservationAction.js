import axios from "axios";
import {FETCH_RESERVATION_FACILITY_TYPE_GET} from "../constants/constants";
import {API_URL} from "../../constantsUrl/constantsUrl.js";
// import {Constants }  from "../constants/constants.js";

export const ReservationGetFacilityType = (values) => async (dispatch) => {
	console.log(values, "action");
		await dispatch({
		type: FETCH_RESERVATION_FACILITY_TYPE_GET.REQUEST,
		payload: { loading: true },
	});

	try {
		const options = {
			method: "GET",
			headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}`, "ngrok-skip-browser-warning": 53 },
			url: `${API_URL}/api/v1/sport-photos`,
		};

        // https://dev-api.playzeon.com/api/v1/sport-photos

        // facility id should pass above url 
		const { data } = await axios(options);

		// localStorage.setItem("account", JSON.stringify(data));

		await dispatch({
			type: FETCH_RESERVATION_FACILITY_TYPE_GET.SUCCESS,
			payload: { loading: false, data: data },
		});
	} catch (error) {
		await dispatch({
			type:FETCH_RESERVATION_FACILITY_TYPE_GET.ERROR,
			payload: { loading: false, data: {} },
		});
		console.error("An error occured during login:", error);
	}
};

