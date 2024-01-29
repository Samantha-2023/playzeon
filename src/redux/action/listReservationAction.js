import axios from "axios";
import { FETCH_GET_LIST_RESERVATION} from "../constants/constants";
import {API_URL} from "../../constantsUrl/constantsUrl.js";
// import {Constants }  from "../constants/constants.js";

export const GetListReservationAction = (values) => async (dispatch) => {
	console.log(values, "action");


    try{
		await dispatch({
		type: FETCH_GET_LIST_RESERVATION.REQUEST,
		payload: { loading: true },
	});

        // Retrieve the value from local storage
        const CenterId = localStorage.getItem("centerId");



		const options = {
			method: "GET",
			headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}`, "ngrok-skip-browser-warning": 53 },
			url: `${API_URL}/api/v1/reservations?centerId.equals=${CenterId}&start.greaterThanOrEqual=2024-01-23T07:00:00Z&end.lessThanOrEqual=2024-01-24T06:59:59Z&Id.in=113251,113252,65551 `,
          
		};

        //https://dev-api.playzeon.com/api/v1/reservations?centerId.equals=64901&start.greaterThanOrEqual=2024-01-23T07:00:00Z&end.lessThanOrEqual=2024-01-24T06:59:59Z&Id.in=113251,113252,65551


        // facility id should pass above url 
		const { data } = await axios(options);

		// localStorage.setItem("account", JSON.stringify(data));

		await dispatch({
			type:FETCH_GET_LIST_RESERVATION.SUCCESS,
			payload: { loading: false, data: data },
		});
	} 
    catch(error) {
		await dispatch({
			type: FETCH_GET_LIST_RESERVATION.ERROR,
			payload: { loading: false, data: {} },
		});
		console.error("An error occured during login:", error);
	};
};
