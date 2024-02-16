import axios from "axios";
import {API_URL} from "../../constantsUrl/constantsUrl.js";
import {Constants, FETCH_RESERVATION_GET_LIST_FACILITY }  from "../constants/constants.js";

export const ReservationGetListFacility = (values) => async (dispatch) => {
	console.log(values, "action");
	// this action is for facility type label list 
	
		await dispatch({
		type: FETCH_RESERVATION_GET_LIST_FACILITY.REQUEST,
		payload: { loading: true },
	});

	// Retrieve the value from local storage
	// const CenterId = localStorage.getItem("centerId");
	const centerIddd = localStorage.getItem("centerIddd");


	try {
		const options = {
			method: "GET",
			headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}`, "ngrok-skip-browser-warning": 53 },
			url: `${API_URL}/api/v1/facilities?sportId.equals=${values}&centerId.equals=${centerIddd}`,
		};

		const { data } = await axios(options);


		await dispatch({
			type:FETCH_RESERVATION_GET_LIST_FACILITY.SUCCESS,
			payload: { loading: false, data: data },
		});
	} catch (error) {
		await dispatch({
			type: FETCH_RESERVATION_GET_LIST_FACILITY.ERROR,
			payload: { loading: false, data: {} },
		});
		console.error("An error occured during login:", error);
	}
};

// https://dev-api.playzeon.com/api/v1/facilities?sportId.equals=1&centerId.equals=64901
// get list facilities api 