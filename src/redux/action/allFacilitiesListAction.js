import axios from "axios";
import { FETCH_ALL_FACILITIES_LIST_RESERVATION} from "../constants/constants";
import {API_URL} from "../../constantsUrl/constantsUrl.js";
// import {Constants }  from "../constants/constants.js";

// this AllFacilitiesList is for all sports api

export const AllFacilitiesList = (values) => async (dispatch) => {
	console.log(values, "action-all-api");

		await dispatch({
		type:  FETCH_ALL_FACILITIES_LIST_RESERVATION.REQUEST,
		payload: { loading: true },
	});

   // Retrieve the value from local storage
	const CenterId = localStorage.getItem("centerId");

	try {
		const options = {
			method: "GET",
			headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}`, "ngrok-skip-browser-warning": 53 },
			url: `${API_URL}/api/v1/facilityList?sportId.equals=${values}&centerId.equals=${CenterId}`,
		};


        //https://dev-api.playzeon.com/api/v1/facilityList?sportId.equals=1&centerId.equals=1753

        // facility id should pass above url 
		const { data } = await axios(options);

		// localStorage.setItem("account", JSON.stringify(data));

		await dispatch({
			type:FETCH_ALL_FACILITIES_LIST_RESERVATION.SUCCESS,
			payload: { loading: false, data: data },
		});
	} catch (error) {
		await dispatch({
			type: FETCH_ALL_FACILITIES_LIST_RESERVATION.ERROR,
			payload: { loading: false, data: {} },
		});
		console.error("An error occured during login:", error);
	}
};

