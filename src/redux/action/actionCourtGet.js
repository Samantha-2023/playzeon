import axios from "axios";
import {FETCH_COURT_GET } from "../constants/constants";
import {API_URL  } from "../../constantsUrl/constantsUrl.js";

// import {Constants }  from "../constants/constants.js";

export const CourtGetAction = (values) => async (dispatch) => {
	console.log(values, "action");
		await dispatch({
		type: FETCH_COURT_GET.REQUEST,
		payload: { loading: true },
	});

	try {
		const options = {
			method: "GET",
			headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}`, "ngrok-skip-browser-warning": 53 },
			url: `${API_URL}/api/v1/facility/${values}`,
		};

        // facility id should pass above url 
		const { data } = await axios(options);

		// localStorage.setItem("account", JSON.stringify(data));

		await dispatch({
			type: FETCH_COURT_GET.SUCCESS,
			payload: { loading: false, data: data },
		});
	} catch (error) {
		await dispatch({
			type: FETCH_COURT_GET.ERROR,
			payload: { loading: false, data: {} },
		});
		console.error("An error occured during login:", error);
	}
};
