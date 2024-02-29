import axios from "axios";
import {API_URL} from "../../constantsUrl/constantsUrl.js";
import {Constants,FETCH_CHECK_AVAILABILITY_ACTION }  from "../constants/constants.js";

export const checkAvailabilityAction = (values,startTime,endTime,datesInRange) => async (dispatch) => {
	console.log(values,"valuessssss");
	// this action is for facility type label list 
	
		await dispatch({
		type:FETCH_CHECK_AVAILABILITY_ACTION.REQUEST,
		payload: { loading: true },
	});

	// Retrieve the value from local storage
	// const CenterId = localStorage.getItem("centerId");
	const centerIddd = localStorage.getItem("centerIddd");


	try {
		const options = {
			method: "GET",
			headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}`, "ngrok-skip-browser-warning": 53 },
			url: `${API_URL}/api/v1/facility/getAvailability?centerId.equals=${centerIddd}&sportId.equals=${values}&startTime=${startTime}&endTime=${endTime}&isMultiple=false&days=${datesInRange}`,
		};

		const { data } = await axios(options);


		await dispatch({
			type:FETCH_CHECK_AVAILABILITY_ACTION.SUCCESS,
			payload: { loading: false, data: data },
		});
	} catch (error) {
		await dispatch({
			type:FETCH_CHECK_AVAILABILITY_ACTION.ERROR,
			payload: { loading: false, data: {} },
		});
		console.error("An error occured during login:", error);
	}
};

// http://localhost:8080/api/v1/facility/getAvailability?centerId.equals=81601&sportId.equals=10&startTime=2024-10-01T10:00:00Z&endTime=2024-10-31T11:00:00Z&isMultiple=true&days=sunday,monday